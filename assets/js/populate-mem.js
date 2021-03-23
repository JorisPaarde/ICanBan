// Constructor function for columns
function column(text, status) {
    this.columnText = text;
    this.columnStatus = status;
}

// Constructor function for items
function item(column, text) {
    this.itemText = text;
    this.itemLocation = column;
}

//populate local storage if empty
function populateMem() {
    if (localStorage.length < 1) {
        localStorage.setItem('itemCount','3');
        localStorage.setItem('darkmode','{"columnStatus":"off"}');
        // Create five column objects with default settings
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
        var item1 = new item("my-canban-column1","name your item (max 35 chars)");
        var item2 = new item("my-canban-column1","name your item (max 35 chars)");
        var item3 = new item("my-canban-column2","name your item (max 35 chars)");
        var item4 = new item("my-canban-column3","name your item (max 35 chars)");
        localStorage.setItem('item-nr-0', JSON.stringify(item1));
        localStorage.setItem('item-nr-1', JSON.stringify(item2));
        localStorage.setItem('item-nr-2', JSON.stringify(item3));
        localStorage.setItem('item-nr-3', JSON.stringify(item4));
        console.log('memory was empty default values initialized..');
    }
};

populateMem();