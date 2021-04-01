// adjust page to settings and adjust decor columns height
$(document).ready(
    populateMem(),
    setDarkmode(),
    checkColumns(),
    setCanbanItems()
);
//--------------------------------------------------initializing memory------------------------------------------
// Constructor function for columns
function column(text, status) {
    this.columnText = text;
    this.columnStatus = status;
}

// Constructor function for items
function item(column, text) {
    this.itemText = text;
    this.itemLocation = column;
}

//populate local storage if empty
function populateMem() {
    if (localStorage.length < 1) {
        localStorage.setItem('itemCount', '4');
        localStorage.setItem('darkmode', '{"columnStatus":"off"}');
        // Create five column objects with default settings
        var column1 = new column("To Do", "on");
        var column2 = new column("Doing", "on");
        var column3 = new column("Done", "on");
        localStorage.setItem('column1', JSON.stringify(column1));
        localStorage.setItem('column2', JSON.stringify(column2));
        localStorage.setItem('column3', JSON.stringify(column3));
        // Create four item objects with default settings
        var item1 = new item("my-canban-column1", "");
        var item2 = new item("my-canban-column1", "");
        var item3 = new item("my-canban-column2", "");
        var item4 = new item("my-canban-column3", "");
        localStorage.setItem('item-nr-1', JSON.stringify(item1));
        localStorage.setItem('item-nr-2', JSON.stringify(item2));
        localStorage.setItem('item-nr-3', JSON.stringify(item3));
        localStorage.setItem('item-nr-4', JSON.stringify(item4));
        console.log('memory was empty default values initialized..');
    }
};

//--------------------------------------------------building site from memory------------------------------------------

// set darkmode to match localstorage
function setDarkmode() {
    let mode = localStorage.getItem('darkmode');
    mode = JSON.parse(mode);
    if (mode.columnStatus == "on") {
        // set the darkmode css element attribute to on
        document.documentElement.setAttribute('darkmode', 'on');
        if (window.location.href.includes("setting")) {
            // adjust the menu text and button
            $("#darkmode")[0].innerHTML = "on";
            $("#darkmode-checkbox").prop("checked", true);
        }
        if (window.location.href.includes("index")) {
            // adjust the image in the index page
            $(".kanban-image").attr("src", "assets/images/Kanban-board-dark.jpg");
        }
    } else if (mode.columnStatus == "off") {
        // set the darkmode css element attribute to off
        document.documentElement.setAttribute('darkmode', 'off');
        if (window.location.href.includes("setting")) {
            // adjust the menu text and button
            $("#darkmode-checkbox").prop("checked", false);
            $("#darkmode")[0].innerHTML = "off";
        }
        if (window.location.href.includes("index")) {
            // adjust the image in the index page
            $(".kanban-image").attr("src", "assets/images/Kanban-board-light.jpg");
        }
    }
};

// set all Columns to match localstorage
function checkColumns() {
    // create array of the columns to load
    let columns = [];
    for (let i = 1; i < 4; i++) {
        columns[i] = "column" + i;
    };
    //if the loaded page is the settings page
    // read out status of all columns and set the switches
    columns.forEach(setColumns);
};

// set all items to match localstorage
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

//--------------------------------------------------modifying items------------------------------------------

// add new canban-item to column when plus is clicked
$(".add-item").click(function addNewCanbanItem() {

    //update number of items in localstorage
    let lastid = localStorage.getItem('itemCount');
    lastid++;
    localStorage.setItem('itemCount', lastid);

    //set default values for new item
    let currentColumn = $(event.target).closest("div[id]").attr('id');
    let canbanItem = {
        itemText: '',
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
            <textarea class="item-textarea" id="canban-item-input" placeholder="name your item (max 35 chars)"
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
            <textarea class="item-textarea" id="canban-item-input" placeholder="${thisItem.itemText}"
            name="canban-item-input" maxlength="35"></textarea>
        </div>`;
    //hide it add it to the clicked column and animate it in
    $(addedItem).hide().prependTo($(`#${thisItem.itemLocation}`).find('.clicked-canban-column')).slideDown(250);
};


// execution of different canban item controls
function executeButtonPress(clickedElement) {
    // find the clicked item id
    var thisItemKey = $(event.target).closest("div[id]").attr('id');
    // find the clicked item in localstorage
    var thisItem = localStorage.getItem(thisItemKey);
    thisItem = JSON.parse(thisItem);

    // if the textarea is clicked the value should represent the localstorage itemText for this item
    if (clickedElement.includes('item-textarea')){
        console.log(`setting`);
        console.log(event.target);
        console.log(`to: ${thisItem.itemText}`)
        //enter the text in memory as value to this textarea
        event.target.value = thisItem.itemText;
        console.log(event.target.value);
    }

    // if the trashcan is clicked remove the item containing this trashcan
    if (clickedElement.includes('trash')) {
        removeCanban(event);
        localStorage.removeItem(thisItemKey);

    // if up arrow or left arrow is clicked move the item in that direction
    } if ((clickedElement.includes('left')) || (clickedElement.includes('up'))) {
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

    // if down arrow or right arrow is clicked move the item in that direction
    } if (clickedElement.includes('right') || clickedElement.includes('down')) {
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

// saving text when edited

$(".my-canban-column").focusout(function (event) {
    // the input value of the textarea
    let thisItemText = event.target.value;
    // the id of the item the textarea is in
    let thisItemId = $(event.target).closest('div[id]')[0].id;
    // the id of the column this item is in
    let currentColumn = $(event.target).parents('div[id]')[1].id;

    let canbanItem = {
        itemText: thisItemText,
        itemLocation: currentColumn
    };
    // save the settings for this item
    localStorage.setItem(thisItemId, JSON.stringify(canbanItem));
});

//--------------------------------------------------modifying settings------------------------------------------

//handle clicking of switches in localstorage
$(document).ready(
    checkSwitches(),
    checkColumnText()
);

// set clicked columns to either on or off in localstorage
function setColumnStatus(thisColumn, status) {
    if (window.location.href.includes('settings')) {
        // get columndata and change to json format
        let column = localStorage.getItem(thisColumn);
        column = JSON.parse(column);
        // set columnstatus to this status
        column.columnStatus = status;
        // convert JSON back to sting
        column = JSON.stringify(column);
        // store the new data for this column
        localStorage.setItem(thisColumn, column);
    }
};

// set the text of a column to match localstorage value
function setColumnText(thisColumn, text) {
    if (window.location.href.includes('settings')) {
        // get columndata and change to json format
        let column = localStorage.getItem(thisColumn);
        column = JSON.parse(column);
        // set columnstatus to this status
        column.columnText = text;
        // convert JSON back to sting
        column = JSON.stringify(column);
        // store the new data for this column
        localStorage.setItem(thisColumn, column);
    }
};

// process when a switch is clicked
function checkSwitches() {
    if (window.location.href.includes('settings')) {
        $('.column , input[type="checkbox"]').click(function () {
            //get id of the switch that's clicked
            let thisSwitch = $(this).parent().siblings()[1].id;
            let text = $(this).parent().siblings()[1].value;
            // is this button is checked
            if ($(this).prop("checked") == true) {
                if (thisSwitch == 'darkmode') {
                    // if it's darkmode update css
                    document.documentElement.setAttribute('darkmode', 'on');
                    //save this setting
                    localStorage.setItem(thisSwitch, '{"columnStatus":"on"}');
                    //update html
                    $(this).parent().siblings()[1].innerHTML = "on";
                } else {
                    // this is a column turn it on and save the text
                    setColumnStatus(thisSwitch, "on");
                    setColumnText(thisSwitch, text);
                }
            }
            // is this button is unchecked
            else if ($(this).prop("checked") == false) {
                if (thisSwitch == 'darkmode') {
                    // if it's darkmode update css
                    document.documentElement.setAttribute('darkmode', 'off');
                    //save this setting
                    localStorage.setItem(thisSwitch, '{"columnStatus":"off"}');
                    //update html
                    $(this).parent().siblings()[1].innerHTML = "off";
                } else {
                    // this is a column turn it off and save the text
                    setColumnStatus(thisSwitch, "off");
                    setColumnText(thisSwitch, text);
                }
            }
        })
    }
};

function checkColumnText() {
    if (window.location.href.includes('settings')) {
        // save text when enter pressed
        $('.text-box').keydown(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                setColumnText(this.id, this.value);
                $(this).blur();
            }
        });
        // save text when clicking outside of text area
        $('.text-box').focusout(function (event) {
            event.preventDefault();
            setColumnText(this.id, this.value);
        });
    }
};