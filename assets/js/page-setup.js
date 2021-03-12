// adjust page to settings and adjust decor columns height
$(document).ready(
    setDarkmode(),
    checkColumns()
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
        if (window.location.href.indexOf('mycanban')) {
            $(`#my-canban-${item}`).toggleClass('d-none', false);
            $(`#my-canban-${item} h2`).first().html(thisColumn.columnText);
        }
    } else {
        // if on the settingspage  set this button to false
        if (window.location.href.indexOf('settings')) {
            $(`#${item}-checkbox`).prop("checked", false);
        }
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

// add item to column

$(".add-item").click(function addCanbanItem() {
    let addedItem =  `
   <!--Canban item start-->
    <div class="canban-item">
        <div class="d-flex justify-content-between">
            <i class="fas down fa-level-down-alt"></i>
            <i class="fas left fa-long-arrow-alt-left"></i>
            <i class="far trash fa-trash-alt"></i>
            <i class="fas right fa-long-arrow-alt-right"></i>
            <i class="fas up fa-level-up-alt"></i>
        </div>
            <textarea id="canban-item-input" placeholder="name your item (max 35 chars)"
            name="canban-item-input" maxlength="35" autofocus></textarea>
        </div>`;
    $(addedItem).hide().prependTo($(this).parent().find(".clicked-canban-column")).slideDown(250);
});

//canban items controls
$(".my-canban-column").click(function (event) {
    // get the class of the clicked item
    var clickedIcon = $(event.target).attr('class');
    // if it has class trash the trashcan is clicked so remove the item containing this trashcan
    if(clickedIcon.includes('trash')){
        console.log('Deleting');
        $(event.target).parent().parent().slideUp(300,function(){$(event.target).parent().parent().remove();});
    }if((clickedIcon.includes('left'))||(clickedIcon.includes('up'))){
        console.log('moving left or up');
    }if(clickedIcon.includes('right')||clickedIcon.includes('down')){
        console.log('moving right or down');
    }
});