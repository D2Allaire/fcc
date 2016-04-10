/**
 * Reverse a string.
 */

function reverseString(str) {
  var temp = '';
  for (var i=(str.length-1); i>=0; i--) {
    temp += str[i];
  }
  return temp;
}

reverseString("hello");


/**
 * Factorialize a number.
 */

function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num*factorialize(num-1);
  }
}

factorialize(5);


/**
 * Check for palindromes (word or sentence that's spelled the same both forward and backward).
 */

function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z\d]/gi, "");
  strtemp = "";
  for (var i=str.length-1; i>=0; i--){
    strtemp += str[i];
  }
  
  if (strtemp === str) return true;
  else return false;
}

palindrome("eye");


/**
 * Find the longest word in a String, and return the length.
 */

function findLongestWord(str) {
  var strarray = str.split(" ");
  var max = 0;
  for (var i=0; i<strarray.length; i++) {
    if (strarray[i].length > max) max = strarray[i].length;
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


/**
 * Title case a sentence.
 */

function titleCase(str) {
  str = str.toLowerCase();
  var strings = str.split(" ");
  var res = [];
  for (var i=0; i<strings.length; i++) {
    res[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
  }
  return res.join(" ");
}

titleCase("I'm a little tea pot");


/**
 * Return largest number in arrays.
 */

function largestOfFour(arr) {
  var res = [];
  for (var i=0; i<arr.length; i++) {
      var max = 0;
      for (var j=0; j<arr[i].length; j++) {
          if (arr[i][j] > max) max = arr[i][j];
      }
      res[i] = max;
  }
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/**
 * Confirm ending of a string.
 */

function confirmEnding(str, target) {
  str = str.toLowerCase();
  target = target.toLowerCase();
  var res = "";
  for (var i=0; i<target.length; i++) {
      if (str[str.length-i-1] === target[target.length-i-1])
      res += target[target.length-i-1];
  }
  res = res.split('').reverse().join('');
  if (res === target) return true;
  else return false;
}

confirmEnding("Bastian", "n");


/**
 * Repeat a string n times.
 */

function repeatStringNumTimes(str, num) {
  var initstr = str;
  if (num<0) return "";
  for (var i=0; i<num-1; i++) {
    str += initstr;
  }
  return str;
}

repeatStringNumTimes("abc", 3);