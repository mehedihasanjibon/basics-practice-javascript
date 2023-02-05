// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i > 10){
//         break;
//     }
// }

// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log("Roast den, gift item anchi");
//     roastGiven++;
//     if(roastGiven > 4){
//         break;
//     }
// }

var items = ["bottle" , "sunglass" , "Moues" , "Pen" , "NoteBook"];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    // console.log(item);
    if(item == "Pen"){
        break;
    }
    console.log(item);
}