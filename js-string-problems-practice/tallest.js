// Tom and his friends are participating in the "who is the tallest?" compentition. As per the name, the perosn with the highest height will be the winner. can you find who is the tallest among Tom and all of his friends? 

// input: 
// The input line can have multiple integer numbers , xi(The height od i friend in cm).

// output: 
// print the height of the tallest friends (cm).

// sample input: 
// 167 , 190, 120 , 165, 137
// sample output 
// 190



function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167 , 190 , 120 , 165, 137];
const tallest = maxInArray(heights);
console.log("tallest person is: " , tallest);

