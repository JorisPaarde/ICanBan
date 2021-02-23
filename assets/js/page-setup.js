
// update settings page to local storage readout

$(document).ready(function () {

    // read localstorage for darkmode
    const darkmode = localStorage.getItem("settings-switch-dark");

    // update site to show stored settings for darkmode
    if (String(darkmode) == "on") {
        $("#settings-switch-dark").removeClass("fa-toggle-off");
        $("#settings-switch-dark").addClass("fa-toggle-on");
    } else {

        // if it's off or null set it to off
        localStorage.setItem("settings-switch-dark", 'off');
    }

    // read localstorage for all 5 columns
    for (let i = 1; i <= 5; i++) {
        var column = localStorage.getItem("settings-column-" + i);
        console.log(column);
    }
});
