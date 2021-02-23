//flip switch
$(".settings-switch").on("click" , function(){
    let thisSwitch = this.id;
    if ($(this).hasClass("fa-toggle-off")){
        $(this).removeClass("fa-toggle-off");
        $(this).addClass("fa-toggle-on");
        console.log(`${thisSwitch} is on.`);
        localStorage.setItem(thisSwitch, 'on');
    }else{
        $(this).removeClass("fa-toggle-on");
        $(this).addClass("fa-toggle-off");
        console.log(`${thisSwitch} is off.`);
        localStorage.setItem(thisSwitch, 'off');
    }
});

// dark mode

// setting columns