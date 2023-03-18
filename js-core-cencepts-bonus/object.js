const nayok = {
    name: "Mehedi hasan",
    id: 165,
    address: "R14 Nurjahasn",
    isSingle: true,
    friends: ["Apu" , "Raaz" , "Salam" , "Aamit"],
    movies: [{name: "no.1" , year: 2015,} , {name: "King khan" , year: 2018}],
    act: function(){
        console.log("acting like sakib khan")
    },
    car: {
        brand: "tesla",
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: "tesla",
            ceo: "Elon Mask",
            country: "USA"
        }
    }
}

// console.log(nayok.friends);
// console.log(nayok.act);
nayok.act();