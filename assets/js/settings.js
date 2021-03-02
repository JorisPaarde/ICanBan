
//https://www.tutorialrepublic.com/faq/how-to-check-a-checkbox-is-checked-or-not-using-jquery.php//

//handle switch settings in localstorage and toggle darkmode
$(document).ready(function () {
    $('.column , input[type="checkbox"]').click(function () {
        //get id of the switch that's clicked
        let thisSwitch = $(this).parent().siblings()[1].id;
        if ($(this).prop("checked") == true) {
            // if it's darkmode update css
            if (thisSwitch == 'darkmode'){
                document.documentElement.setAttribute('darkmode', 'on');
                //save this setting
                localStorage.setItem(thisSwitch, 'on');
            }else{
                // this is a column turn it on and save the name
                let columnName = $(this).parent().siblings()[1].innerHTML;
                localStorage.setItem(thisSwitch, columnName);
            }
        }
        else if ($(this).prop("checked") == false) {
            // if it's darkmode update css
            if (thisSwitch == 'darkmode'){
                document.documentElement.setAttribute('darkmode', 'off');
                //save this setting
                localStorage.setItem(thisSwitch, 'off');
            }else{
                // this is a column turn it off
                let columnName = $(this).parent().siblings()[1].innerHTML;
                localStorage.setItem(thisSwitch, columnName);
            }
        }
    });
});

//edit column names