
// read localstorage


// adjust divs on homepage

function adjustDecoDivs() {
    let height = $("div.col-12.outer-card.yellow-bg.yellow-shadow.home").innerHeight();
    height = Math.round(height);
    $(".outer-card.home.red-bg").css("height", height);
    $(".outer-card.home.green-bg").css("height", height);
};

window.onorientationchange = function () {
    adjustDecoDivs()
    location.reload();
};


$(document).ready(
    adjustDecoDivs()
);
