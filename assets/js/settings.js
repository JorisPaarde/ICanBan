//populate local storage if empty
$(document).ready(function () {
    if (localStorage.length < 1) {
        localStorage.setItem('darkmode', 'off');
        // Constructor function for columns
        function column(text, status) {
            this.columnText = text;
            this.columnStatus = status;
        }
        // Create five column objects
        var column1 = new column("To Do", "on");
        var column2 = new column("Doing", "on");
        var column3 = new column("Done", "on");
        var column4 = new column("", "off");
        var column5 = new column("", "off");

        localStorage.setItem('column1', JSON.stringify(column1));
        localStorage.setItem('column2', JSON.stringify(column2));
        localStorage.setItem('column3', JSON.stringify(column3));
        localStorage.setItem('column4', JSON.stringify(column4));
        localStorage.setItem('column5', JSON.stringify(column5));
    }
});

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
                console.log(thisSwitch);
                console.log(column1);
                console.log(column2);
                if(thisSwitch == column1){
                    console.log('on');
                }
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