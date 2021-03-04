// set darkmode to match localstorage
function setDarkmode() {
    let mode = localStorage.getItem('darkmode');
    if (mode == "on") {
        document.documentElement.setAttribute('darkmode', 'on');
    } else if (mode == "off"){
        document.documentElement.setAttribute('darkmode', 'off');
    }
};

// set switches to match localstorage

function setSwitches() {
    //if the loaded page is the settings page
    if (window.location.href.indexOf('settings')) {
        // read out status of all switches
        console.log('settings page')};
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
