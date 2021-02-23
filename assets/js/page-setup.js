
// update settings page to local storage readout

$(document).ready(
    readSettings(),
    drawCurrentMode()
);

// read out settings from the settings page
function readSettings() {

    // read localstorage for darkmode
    const darkmode = localStorage.getItem("settings-switch-dark");

    // update site to show stored settings for darkmode
    if (String(darkmode) === "on") {
        $("#settings-switch-dark").removeClass("fa-toggle-off");
        $("#settings-switch-dark").addClass("fa-toggle-on");
    } else {
        // if it's off or null set it to off
        localStorage.setItem("settings-switch-dark", "off");
    }

    // read localstorage for all 5 columns
    for (let i = 1; i <= 5; i++) {
        var column = localStorage.getItem("settings-column-" + i);

        // check if localstorage is empty and is off in html, set localstorage to off
        if (column === null && $(`#settings-column-${i}`).hasClass("fa-toggle-off")) {
            localStorage.setItem(("settings-column-" + i), "off");

        // check if localstorage is empty and is off in html, set localstorage to off
        } else if (column === null && $(`#settings-column-${i}`).hasClass("fa-toggle-on")) {
            localStorage.setItem(("settings-column-" + i), "on");
        } 
        // if local storage says it's on, set html to that state
        if (String(column) === "on") {
            $("#settings-column-" + i).removeClass("fa-toggle-off");
            $("#settings-column-" + i).addClass("fa-toggle-on");
        }
        // if local storage says it's off, set html to that state
        if (String(column) === "off") {
            $("#settings-column-" + i).addClass("fa-toggle-off");
            $("#settings-column-" + i).removeClass("fa-toggle-on");
        }
    }
}

function drawCurrentMode(){
    const darkmode = localStorage.getItem("settings-switch-dark");
    console.log(`Darkmode is ${darkmode} drawing stuf....`);
    if (darkmode == "on"){
        console.log("welcome to the dark side");
        //let current = $("[href$='assets/css/style.css']");
        let current  = document.getElementById("white-css");
        console.log(current);
    }
}