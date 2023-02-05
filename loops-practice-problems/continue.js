var numbers = [45, 43, 76, 23, 98, 77, 65, 345, 87];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    // console.log(numbers);
    if(number > 50){
        continue;
    }
    console.log(number);
}