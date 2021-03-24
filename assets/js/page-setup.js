// adjust page to settings and adjust decor columns height
$(document).ready(
    setDarkmode(),
    checkColumns(),
    setCanbanItems()
);

// set darkmode to match localstorage
function setDarkmode() {
    let mode = localStorage.getItem('darkmode');
    mode = JSON.parse(mode);
    if (mode.columnStatus == "on") {
        $("#darkmode-checkbox").prop("checked", true);
        document.documentElement.setAttribute('darkmode', 'on');
        if (window.location.href.includes("setting")) {
            $("#darkmode")[0].innerHTML = "on";
        }
    } else if (mode.columnStatus == "off") {
        $("#darkmode-checkbox").prop("checked", false);
        document.documentElement.setAttribute('darkmode', 'off');
        if (window.location.href.includes("setting")) {
            $("#darkmode")[0].innerHTML = "off";
        }
    }
};

// set all Columns to match localstorage
function checkColumns() {
    // create array of the 5 columns to load
    let columns = [];
    for (let i = 1; i < 6; i++) {
        columns[i] = "column" + i;
    };
    //if the loaded page is the settings page
    // read out status of all columns and set the switches
    columns.forEach(setColumns);
};

function setCanbanItems() {
    if (window.location.href.includes('mycanban')) {
        //scan localstorage for canban items
        for (var i = 0; i < localStorage.length; i++) {
            let thisItem = localStorage.getItem(localStorage.key(i));
            let thisItemKey = localStorage.key(i);
            if (thisItemKey.includes('item-nr')) {
                // this is a canban item add it to the html
                thisItem = JSON.parse(thisItem);
                addCanbanItem(thisItemKey, thisItem);
            }
        }
    }
};

// check the setting of a column
function setColumns(item, _index) {
    // get this columns data
    let thisColumn = localStorage.getItem(item);
    // parse to json 
    thisColumn = JSON.parse(thisColumn);
    // check te status of this column in localmemory
    if (thisColumn.columnStatus == "on") {
        // if on the settingspage set this button to true
        if (window.location.href.indexOf('settings')) {
            $(`#${item}-checkbox`).prop("checked", true);
        }
        // if on the mycanban page display this as in settings
        if (window.location.href.indexOf('mycanban')) {
            $(`#my-canban-${item}`).toggleClass('d-none', false);
            $(`#my-canban-${item} h2`).first().html(thisColumn.columnText);
        }
    } else {
        // if on the settingspage set this button to false
        if (window.location.href.indexOf('settings')) {
            $(`#${item}-checkbox`).prop("checked", false);
        }
        // if on the mycanban page display this as in settings
        if (window.location.href.indexOf('mycanban')) {
            $(`#my-canban-${item}`).toggleClass('d-none', true);
        }
    }
    // set the value of this columns textfield to the value in local memory
    $(`#${item}`).val(thisColumn.columnText);
};

// add new canban-item to column when plus is clicked
$(".add-item").click(function addNewCanbanItem() {

    //update number of items in localstorage
    let lastid = localStorage.getItem('itemCount');
    lastid++;
    localStorage.setItem('itemCount', lastid);

    //set default values for new item
    let currentColumn = $(event.target).closest("div[id]").attr('id');
    let canbanItem = {
        itemText: 'name your item (max 35 chars)',
        itemLocation: currentColumn
    };

    // make new item in localstorage with default values
    localStorage.setItem(`item-nr-${JSON.stringify(lastid)}`, JSON.stringify(canbanItem));
    //add the following html
    let addedItem = `
   <!--Canban item start-->
    <div id="item-nr-${JSON.stringify(lastid)}" class="canban-item">
        <div class="d-flex justify-content-between">
            <i class="fas down fa-level-down-alt"></i>
            <i class="fas left fa-long-arrow-alt-left"></i>
            <i class="far trash fa-trash-alt"></i>
            <i class="fas right fa-long-arrow-alt-right"></i>
            <i class="fas up fa-level-up-alt"></i>
        </div>
            <textarea id="canban-item-input" placeholder="${canbanItem.itemText}"
            name="canban-item-input" maxlength="35" autofocus></textarea>
        </div>`;
    //hide it add it to the clicked column and animate it in
    $(addedItem).hide().prependTo($(this).parent().find(".clicked-canban-column")).slideDown(250);
});

// delete canban item
function removeCanban(event) {
    $(event.target).parent().parent().slideUp(300, function () { $(event.target).parent().parent().remove(); });
};

function addCanbanItem(thisItemKey, thisItem) {
    //add the following html
    let addedItem = `
   <!--Canban item start-->
    <div id="${thisItemKey}" class="canban-item">
        <div class="d-flex justify-content-between">
            <i class="fas down fa-level-down-alt"></i>
            <i class="fas left fa-long-arrow-alt-left"></i>
            <i class="far trash fa-trash-alt"></i>
            <i class="fas right fa-long-arrow-alt-right"></i>
            <i class="fas up fa-level-up-alt"></i>
        </div>
            <textarea id="canban-item-input" placeholder="${thisItem.itemText}"
            name="canban-item-input" maxlength="35"></textarea>
        </div>`;
    //hide it add it to the clicked column and animate it in
    $(addedItem).hide().prependTo($(`#${thisItem.itemLocation}`).find('.clicked-canban-column')).slideDown(250);
};


// execution of different canban item controls
function executeButtonPress(clickedElement) {
    // if it has class trash the trashcan is clicked so remove the item containing this trashcan
    if (clickedElement.includes('trash')) {
        removeCanban(event);
        let thisItemKey = $(event.target).closest("div[id]").attr('id');
        localStorage.removeItem(thisItemKey);
        // if up arrow or left arrow is clicked
    } if ((clickedElement.includes('left')) || (clickedElement.includes('up'))) {
        // find this item in localstorage
        let thisItemKey = $(event.target).closest("div[id]").attr('id');
        thisItem = localStorage.getItem(thisItemKey);
        thisItem = JSON.parse(thisItem);
        //update itemlocation
        let currentColumn = thisItem.itemLocation;
        let columnNumber = /\d+/;
        columnNumber = currentColumn.match(columnNumber);
        // this item goes to the column with 1 digit lower
        columnNumber[0]--;
        // set the new location
        thisItem.itemLocation = `my-canban-column${columnNumber[0]}`;
        //store new settings in memory
        localStorage.setItem(thisItemKey, JSON.stringify(thisItem));
        //visual update
        addCanbanItem(thisItemKey, thisItem);
        removeCanban(event);

        // if down arrow or right arrow is clicked
    } if (clickedElement.includes('right') || clickedElement.includes('down')) {
        // find this item in localstorage
        let thisItemKey = $(event.target).closest("div[id]").attr('id');
        let thisItem = localStorage.getItem(thisItemKey);
        thisItem = JSON.parse(thisItem);
        //update itemlocation
        let currentColumn = thisItem.itemLocation;
        let columnNumber = /\d+/;
        columnNumber = currentColumn.match(columnNumber);
        // this item goes to the column with 1 digit lower
        columnNumber[0]++;
        // set the new location
        thisItem.itemLocation = `my-canban-column${columnNumber[0]}`;
        //store new settings in memory
        localStorage.setItem(thisItemKey, JSON.stringify(thisItem));
        //visual update
        addCanbanItem(thisItemKey, thisItem);
        removeCanban(event);
    }
};

//canban items controls
$(".my-canban-column").click(function (event) {
    // get the class of the clicked item
    var clickedElement = $(event.target).attr('class');
    // if an icon is clicked check which one
    if (clickedElement != undefined) {
        executeButtonPress(clickedElement);
    }
});