// Constructor function for columns
function column(text, status) {
    this.columnText = text;
    this.columnStatus = status;
}

//populate local storage if empty
function populateMem() {
    if (localStorage.length < 1) {
        localStorage.setItem('darkmode', 'off');
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
        console.log('memory reset');
    }
};

populateMem();