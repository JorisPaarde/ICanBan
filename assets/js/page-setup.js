// adjust page to settings and adjust decor columns height
$(document).ready(
    setDarkmode(),
    checkColumns(),
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

// add new canban-item to column when plus is clicked

$(".add-item").click(function addNewCanbanItem() {
    
    //update number of items in localstorage
    let lastid = localStorage.getItem('itemCount');
    lastid++;
    localStorage.setItem('itemCount', lastid);

    //set default values for new item
    let currentColumn = $(event.target).closest("div[id]").attr('id');
    let canbanItem = {
        text: 'name your item (max 35 chars)',
        columnLocation: currentColumn
    };

    // make new item in localstorage with default values
    localStorage.setItem(`item nr ${JSON.stringify(lastid)}`, JSON.stringify(canbanItem));
    //add the following html
    let addedItem = `
   <!--Canban item start-->
    <div class="canban-item">
        <div class="d-flex justify-content-between">
            <i class="fas down fa-level-down-alt"></i>
            <i class="fas left fa-long-arrow-alt-left"></i>
            <i class="far trash fa-trash-alt"></i>
            <i class="fas right fa-long-arrow-alt-right"></i>
            <i class="fas up fa-level-up-alt"></i>
        </div>
            <textarea id="canban-item-input" placeholder="${canbanItem.text}"
            name="canban-item-input" maxlength="35" autofocus></textarea>
        </div>`;
    //hide it add it to the clicked column and animate it in
    $(addedItem).hide().prependTo($(this).parent().find(".clicked-canban-column")).slideDown(250);
});

// delete canban item
function removeCanban(event) {
    $(event.target).parent().parent().slideUp(300, function () { $(event.target).parent().parent().remove(); });
};

function addCanbanItem(column) { 
    //get values for this item
    let canbanItem = {
        text: 'name your item (max 35 chars)',
        columnLocation: column
    };

    //add the following html
    let addedItem = `
   <!--Canban item start-->
    <div class="canban-item">
        <div class="d-flex justify-content-between">
            <i class="fas down fa-level-down-alt"></i>
            <i class="fas left fa-long-arrow-alt-left"></i>
            <i class="far trash fa-trash-alt"></i>
            <i class="fas right fa-long-arrow-alt-right"></i>
            <i class="fas up fa-level-up-alt"></i>
        </div>
            <textarea id="canban-item-input" placeholder="${canbanItem.text}"
            name="canban-item-input" maxlength="35" autofocus></textarea>
        </div>`;
    //hide it add it to the clicked column and animate it in
    $(addedItem).hide().prependTo($(`#my-canban-column${column}`).find('.clicked-canban-column')).slideDown(250);
};


// execution of different canban item controls
function executeButtonPress(clickedElement) {
    // if it has class trash the trashcan is clicked so remove the item containing this trashcan
    if (clickedElement.includes('trash')) {
        console.log('Deleting');
        removeCanban(event);
        // if up arrow or left arrow is clicked
    } if ((clickedElement.includes('left')) || (clickedElement.includes('up'))) {
        // find the column this item is in
        let currentColumn = $(event.target).closest("div[id]").attr('id');
        let columnNumber = /\d+/;
        columnNumber = currentColumn.match(columnNumber);
        // this item goes to the column with 1 digit lower
        columnNumber[0]--;
        let newColumnNumber = columnNumber[0];
        console.log(`my-canban-column${newColumnNumber}`);
        addCanbanItem(newColumnNumber);
        removeCanban(event);
        // if down arrow or right arrow is clicked
    } if (clickedElement.includes('right') || clickedElement.includes('down')) {
        // find the column this item is in
        let currentColumn = $(event.target).closest("div[id]").attr('id');
        let columnNumber = /\d+/;
        columnNumber = currentColumn.match(columnNumber);
        // this item goes to the column with 1 digit higher
        columnNumber[0]++;
        let newColumnNumber = columnNumber[0];
        console.log(`my-canban-column${newColumnNumber}`);
        addCanbanItem(newColumnNumber);
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