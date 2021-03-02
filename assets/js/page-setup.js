//populate local storage if empty
$(document).ready(function () {
    localStorage.clear();
    if (localStorage.length < 1) {
        localStorage.setItem('darkmode', 'off');
        var columns = {
            column1: { name: 'To Do', status: 'on' },
            column2: { name: 'Doing', status: 'on' },
            column3: { name: 'Done', status: 'on' },
            column4: { name: '', status: 'off' },
            column5: { name: '', status: 'off' }
        };
        console.log(columns);
        for (var key in columns) {
            localStorage.setItem(key,JSON.stringify(key.value));
        }
    }
});

// read localstorage
