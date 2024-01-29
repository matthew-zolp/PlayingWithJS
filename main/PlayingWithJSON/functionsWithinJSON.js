//You cannot parse JSON data that from an object that includes a function as a property

//Example

let page = {
    size: 'A4',
    color: 'white',
    changeColor(color){
        this.color = color;
    }
};

page = JSON.parse(JSON.stringify(page));
page.changeColor('black');