//Different ways to coerce a Boolean value from a non-Boolean value

var customer = { name: 'John Bo John', age: undefined, email: undefined,phone: '999-999-9999'};
var values = [];
console.log('Using Boolean()');
for(const key in customer) {
    const obj = {};
    obj[key] = Boolean(customer[key]);
    values.push(obj);
}
console.log(JSON.stringify(values));


var customer = { name: 'Billy Mack', age: undefined, email: undefined,phone: ''};
var values = [];
console.log('Using double not !!');
for(const key in customer) {
    const obj = {};
    obj[key] = !!customer[key];
    values.push(obj);
}
console.log(JSON.stringify(values));


var customer = { name: 'Tuff Richard', age: 34, email: undefined,phone: '888-889-8839'};
var values = [];
console.log('Using ternary operator');
for(const key in customer) {
    const obj = {};
    obj[key] = customer[key] ? true : false;
    values.push(obj);
}
console.log(JSON.stringify(values));