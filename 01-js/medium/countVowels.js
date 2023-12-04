/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let arr = new Array(5).fill(0);
    let s = str.toLowerCase();
    for(let i=0;i<s.length;i++){
      console.log(s[i]);
      if(s[i]==='a'){
        arr[0]=1;
      }else  if(s[i]==='e'){
        arr[1]=1;
      }else  if(s[i]==='i'){
        arr[2]=1;
      }else  if(s[i]==='o'){
        arr[3]=1;
      }else  if(s[i]==='u'){
        arr[4]=1;
      }
    }
    var c=0;
    for(let i =0;i<arr.length;i++){
      if(arr[i]===1){
        c++;
      }
    }
    return c;
}

module.exports = countVowels;