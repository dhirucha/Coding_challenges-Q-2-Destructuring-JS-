
//funtion to cound words occurance in an given sentence
const countWords = (str) => {
    const words = str.split(' ');
    const map = new Map();

    for (let word of words) {
        if (map.has(word)) {
          map.set(word, map.get(word) + 1);
        } else {
          map.set(word, 1);
        }
      }
      return map;
}

const sentence = "I am learning full stack web dev from PW_SKILLS";
console.log(countWords(sentence));