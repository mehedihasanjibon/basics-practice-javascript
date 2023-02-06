var shoppingCart = {
    books : 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys: [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    console.log(keys[i]);
    // console.log(shoppingCart[])
    
    var propertyName =keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop 
for(var propertyName in shoppingCart){
    // console.log(propertyName);
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

function movie(){
    return "Din-The day";
    return "porna";
    return "Hawa";
}
console.log(movie());