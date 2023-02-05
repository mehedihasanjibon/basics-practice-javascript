/* function functionName(parametars){
    function body
    return
}

var returnedValue = functionName(parametars value); */

function getAverage(assignment1 ,assignment2 , assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 58;
const assignment2Marks = 56;
const assignment3marks = 58;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3marks);
console.log("my average so far: " , myAverage);