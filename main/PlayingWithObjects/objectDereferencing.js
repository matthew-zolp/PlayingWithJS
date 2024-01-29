let jsObject = [{
    isbn: 898829,
    price: 24.95
},{
    isbn: 898829,
    price: 24.95
},{
    isbn: 898829,
    price: 24.95
},{
    isbn: 898829,
    price: 24.95
}];

function getJsObjectValues(obj){
    for(let index = 0; index < obj.length; index++){
        console.log('Index: ', index, 'ISBN:', obj[index].isbn, 'Price:', obj[index].price);
    }
}

getJsObjectValues(jsObject);