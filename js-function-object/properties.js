var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the property name , use dot notation to get the property value 
var penCount = shoppingCart.pen;

// alternative system 
// when you know the property name , use dot notation to get the property value 
var penCount = shoppingCart["pen"];

var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValue);
console.log(shoppingCart);


// set property values 
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart["mouse"] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);