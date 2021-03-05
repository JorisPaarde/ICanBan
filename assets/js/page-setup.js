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

// set switches to match localstorage

function setSwitches() {
    //if the loaded page is the settings page
    if (window.location.href.indexOf('settings')) {
        // create array of the 5 switches to load
        let columns = [];
        for (let i = 1; i < 6; i++) {
            columns[i] = "column" + i;
        };
        // check te setting of a column
        function checkSetting(item, _index) {
            // get this columns data
            let thisColumn = localStorage.getItem(item);
            // parse to json 
            thisColumn = JSON.parse(thisColumn);
            if(thisColumn.columnStatus == "on"){
                // set this button to true
                $(`#${item}-checkbox`).prop("checked", true);
            }else{
                // set this button to false
                $(`#${item}-checkbox`).prop("checked", false);
            }
        };
        // read out status of all columns and set the switches
        columns.forEach(checkSetting);
    }
};

// adjust divs on homepage
$(document).ready(
    adjustDecoDivs(),
    setDarkmode(),
    setSwitches()
);

function adjustDecoDivs() {
    let height = $("div.col-12.outer-card.yellow-bg.yellow-shadow.home").innerHeight();
    height = Math.round(height);
    $(".outer-card.home.red-bg").css("height", height);
    $(".outer-card.home.green-bg").css("height", height);
};

window.onorientationchange = function () {
    adjustDecoDivs();
    location.reload();
};
