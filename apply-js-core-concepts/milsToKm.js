function milesToKilometers(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const myKilometers = 3;
const myHome = milesToKilometers(myKilometers);
console.log(myHome);