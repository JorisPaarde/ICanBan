//https://www.tutorialrepublic.com/faq/how-to-check-a-checkbox-is-checked-or-not-using-jquery.php//

//handle clicking of switches in localstorage
$(document).ready(
    checkSwitches(),
    checkText()
);

// set clicked columns to either on or off in localstorage

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

function setColumnText(thisColumn, text) {
    // get columndata and change to json format
    let column = localStorage.getItem(thisColumn);
    column = JSON.parse(column);
    // set columnstatus to this status
    column.columnText = text;
    // convert JSON back to sting
    column = JSON.stringify(column);
    // store the new data for this column
    localStorage.setItem(thisColumn, column);
};


// process when a switch is clicked

function checkSwitches() {
    $('.column , input[type="checkbox"]').click(function () {
        //get id of the switch that's clicked
        let thisSwitch = $(this).parent().siblings()[1].id;
        let text = $(this).parent().siblings()[1].value;
        if ($(this).prop("checked") == true) {
            // if it's darkmode update css
            if (thisSwitch == 'darkmode') {
                document.documentElement.setAttribute('darkmode', 'on');
                //save this setting
                localStorage.setItem(thisSwitch, '{"columnStatus":"on"}');
                $(this).parent().siblings()[1].innerHTML = "on";
            } else {
                // this is a column turn it on
                setColumnStatus(thisSwitch, "on");
                setColumnText(thisSwitch, text);
            }
        }
        else if ($(this).prop("checked") == false) {
            // if it's darkmode update css
            if (thisSwitch == 'darkmode') {
                document.documentElement.setAttribute('darkmode', 'off');
                //save this setting
                localStorage.setItem(thisSwitch, '{"columnStatus":"off"}');
                $(this).parent().siblings()[1].innerHTML = "off";
            } else {
                // this is a column turn it off
                setColumnStatus(thisSwitch, "off");
                setColumnText(thisSwitch, text);
            }
        }
    })
};

function checkText(){
    $('.textBox').keydown(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            setColumnText(this.id,this.value);
         }
    });
};