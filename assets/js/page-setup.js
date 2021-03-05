// adjust page to settings and adjust decor columns height
$(document).ready(
    adjustDecoDivs(),
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
    } else if (mode.columnStatus == "off") {
        $("#darkmode-checkbox").prop("checked", false);
        document.documentElement.setAttribute('darkmode', 'off');
    }
};

// check the setting of a column
function checkSetting(item, _index) {
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
        columns.forEach(checkSetting);
    }
};

// get the height of the mainpage yellow div and match decoration div's height
function adjustDecoDivs() {
    let height = $("div.col-12.outer-card.yellow-bg.yellow-shadow.home").innerHeight();
    height = Math.round(height);
    $(".outer-card.home.red-bg").css("height", height);
    $(".outer-card.home.green-bg").css("height", height);
};

// adjust div's when the screen rotates on mobile
window.onorientationchange = function () {
    adjustDecoDivs();
    location.reload();
};
