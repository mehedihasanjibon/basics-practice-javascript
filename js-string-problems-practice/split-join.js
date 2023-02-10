const lyrics = "tumi bondhu kala pakhi ami jeno ki. bosonto kale tumi bolte paro ni, kala kala sada sada";
// split() method 

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');

// console.log(parts);
// console.log(sentences);
// console.log(chars);

// slice() method 
const partial = lyrics.slice(5, 8);
console.log(partial);

// substring() method 
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'Bosonto kale tumi bolte pari ni',
    'sada sada kala kala'
];
const newSong = lines.join('.');
console.log(newSong);