// adjust page to settings and adjust decor columns height
$(document).ready(
    setDarkmode(),
    setColumns()
);

// set darkmode to match localstorage
function setDarkmode() {  
    let mode = localStorage.getItem('darkmode');
    mode = JSON.parse(mode);
    if (mode.columnStatus == "on") {
        $("#darkmode-checkbox").prop("checked", true);
        document.documentElement.setAttribute('darkmode', 'on');
        if(window.location.href.includes("setting")){
        $("#darkmode")[0].innerHTML = "on";}
    } else if (mode.columnStatus == "off") {
        $("#darkmode-checkbox").prop("checked", false);
        document.documentElement.setAttribute('darkmode', 'off');
        if(window.location.href.includes("setting")){
        $("#darkmode")[0].innerHTML = "off";}
    }
};

// check the setting of a column
function setColumnButtons(item, _index) {
    // get this columns data
    let thisColumn = localStorage.getItem(item);
    // parse to json 
    thisColumn = JSON.parse(thisColumn);
    // check te status of this column in localmemory
    if (thisColumn.columnStatus == "on") {
        // set this button to true
        $(`#${item}-checkbox`).prop("checked", true);
    } else {
        // set this button to false
        $(`#${item}-checkbox`).prop("checked", false);
    }
    // set the value of this columns textfield to the value in local memory
    $(`#${item}`).val(thisColumn.columnText);
};

// set all Columns to match localstorage
function setColumns() {
    //if the loaded page is the settings page
    if (window.location.href.indexOf('settings')) {
        // create array of the 5 columns to load
        let columns = [];
        for (let i = 1; i < 6; i++) {
            columns[i] = "column" + i;
        };
        // read out status of all columns and set the switches
        columns.forEach(setColumnButtons);
    }
};
