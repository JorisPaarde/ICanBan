//https://www.tutorialrepublic.com/faq/how-to-check-a-checkbox-is-checked-or-not-using-jquery.php//

//handle switch settings in localstorage and toggle darkmode
$(document).ready(
    checkSwitches()
);

function setColumnStatus(thisColumn, status) {
    // get columndata and change to json format
    let column = localStorage.getItem(thisColumn);
    column = JSON.parse(column);
    // set columnstatus to this status
    column.columnStatus = status;
    // convert JSON back to sting
    column = JSON.stringify(column);
    // store the new data for this column
    localStorage.setItem(thisColumn, column);
};

function checkSwitches() {
    $('.column , input[type="checkbox"]').click(function () {
        //get id of the switch that's clicked
        let thisSwitch = $(this).parent().siblings()[1].id;
        if ($(this).prop("checked") == true) {
            // if it's darkmode update css
            if (thisSwitch == 'darkmode') {
                document.documentElement.setAttribute('darkmode', 'on');
                //save this setting
                localStorage.setItem(thisSwitch, 'on');
                $(this).parent().siblings()[1].innerHTML = "on";
            } else {
                // this is a column turn it on
                setColumnStatus(thisSwitch, "on");
            }
        }
        else if ($(this).prop("checked") == false) {
            // if it's darkmode update css
            if (thisSwitch == 'darkmode') {
                document.documentElement.setAttribute('darkmode', 'off');
                //save this setting
                localStorage.setItem(thisSwitch, 'off');
                $(this).parent().siblings()[1].innerHTML = "off";
            } else {
                // this is a column turn it off
                setColumnStatus(thisSwitch, "off");
            }
        }
    })
};
