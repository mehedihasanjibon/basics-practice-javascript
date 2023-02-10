const lyrics = "tumi bondhu kala pakhi ami jeno ki. bosonto kale tumi bolte paro ni, kala kala sada sada";

const searchString = 'pakhi';
// const doesExist = lyrics.includes("pakhi");
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLocaleLowerCase();
const searchStringLower = searchString.toLocaleLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLocaleLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// -------------
// indexOf 

console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("tumi"));

if(lyrics.indexOf('sada') !== -1){
    console.log("exists inside the string");
}
else{
    console.log("cannot find it");
}

// startWith 
console.log(lyrics.startsWith('tumi'));

// endsWith 
const fileName = "mybiodata.pdf";
const otherFile = "mypic.png"
fileName.endsWith(".pdf");
console.log(fileName);
