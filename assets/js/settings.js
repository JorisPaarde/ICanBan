//flip switch
$(".settings-switch").on("click" , function(){
    let thisSwitch = this.id;
    if ($(this).hasClass("fa-toggle-off")){
        $(this).removeClass("fa-toggle-off");
        // turn the switch on both in storage and appearance
        $(this).addClass("fa-toggle-on");
        localStorage.setItem(thisSwitch, 'on');
        // if dark mode is turned on draw the page dark
        if(thisSwitch == "settings-switch-dark"){
            drawCurrentMode();
        }
    }else{
        // turn the switch off both in storage and appearance
        $(this).removeClass("fa-toggle-on");
        $(this).addClass("fa-toggle-off");
        localStorage.setItem(thisSwitch, 'off');
         // if dark mode is turned off draw the page white
        if(thisSwitch == "settings-switch-dark"){
            drawCurrentMode();
        }
    }
   
});

// setting columns