const lyrics = "Tumi bondhu kala pakhi ami jeno ki. bosonto kale tumi bolte paro ni, kala kala sada sada";

const searchString = 'pakhi';
// const doesExist = lyrics.includes("pakhi");
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLocaleLowerCase();
const searchStringLower = searchString.toLocaleLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLocaleLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);