// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for(let i = 5; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

function sum(i){
    if(i == 1){
        return 1;
    }
    // console.log(i)
    return i + sum(i- 1);
}
const result = sum(5);
console.log(result);

/* 
    5 + sum(4)
    5 + i + sum(3)
    5 + 4 + i + sum(2)
    5 + 4 + 3 + i + sum(1)
    5 + 4 + 3 + 2 + 1
*/