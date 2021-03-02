//populate local storage if empty
$(document).ready(function(){
    localStorage.clear();
    if(localStorage.length < 1){
        localStorage.setItem('darkmode','on');
    }
});

// read localstorage
