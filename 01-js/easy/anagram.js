/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  let arr = new Array(129).fill(0);
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(let i=0;i<str1.length;i++){
    arr[str1[i].charCodeAt(0)]++;
    arr[str2[i].charCodeAt(0)]--;
  }
  for(let i=0;i<str2.length;i++){
    console.log(str2[i]," | - | ",arr[str2[i].charCodeAt(0)]);
    if(arr[str2[i].charCodeAt(0)]!=0){
      return false;
    };
  }
  return true;

}

module.exports = isAnagram;
