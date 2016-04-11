/**
 * Reverse a string.
 */

function reverseString(str) {
    var temp = '';
    for (var i = (str.length - 1); i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}

reverseString("hello"); // --> "olleh"


/**
 * Factorialize a number.
 */

function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

factorialize(5); // --> 5*4*3*2*1=120


/**
 * Check for palindromes (word or sentence that's spelled the same both forward and backward).
 */

function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z\d]/gi, "");
    strtemp = "";
    for (var i = str.length - 1; i >= 0; i--) {
        strtemp += str[i];
    }

    if (strtemp === str) return true;
    else return false;
}

palindrome("eye"); // --> true


/**
 * Find the longest word in a String, and return the length.
 */

function findLongestWord(str) {
    var strarray = str.split(" ");
    var max = 0;
    for (var i = 0; i < strarray.length; i++) {
        if (strarray[i].length > max) max = strarray[i].length;
    }
    return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // --> 6


/**
 * Title case a sentence.
 */

function titleCase(str) {
    str = str.toLowerCase();
    var strings = str.split(" ");
    var res = [];
    for (var i = 0; i < strings.length; i++) {
        res[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
    return res.join(" ");
}

titleCase("I'm a little tea pot"); // --> "I'm A Little Tea Pot"


/**
 * Return largest number in arrays.
 */

function largestOfFour(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var max = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) max = arr[i][j];
        }
        res[i] = max;
    }
    return res;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
// --> [5, 27, 39, 1001]


/**
 * Confirm ending of a string.
 */

function confirmEnding(str, target) {
    str = str.toLowerCase();
    target = target.toLowerCase();
    var res = "";
    for (var i = 0; i < target.length; i++) {
        if (str[str.length - i - 1] === target[target.length - i - 1])
            res += target[target.length - i - 1];
    }
    res = res.split('').reverse().join('');
    if (res === target) return true;
    else return false;
}

confirmEnding("Bastian", "n"); // --> true


/**
 * Repeat a string n times.
 */

function repeatStringNumTimes(str, num) {
    var initstr = str;
    if (num < 0) return "";
    for (var i = 0; i < num - 1; i++) {
        str += initstr;
    }
    return str;
}

repeatStringNumTimes("abc", 3); // --> "abcabcabc"


/**
 * Truncate a string.
 */

function truncateString(str, num) {
    if (str.length > num) {
        if (num < 3) {
            return str.replace(str.slice(num), '') + "...";
        } else {
            return str.replace(str.slice(num - 3), '') + "...";
        }
    } else return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


/**
 * Split array into equally sized groups
 */

function chunkArrayInGroups(arr, size) {
    var slicedArray = [];
    var step = 0;
    for (var i = 0; i < arr.length / size; i++) {
        if (arr.length > step + size) {
            slicedArray[i] = arr.slice(step, step + size);
            step += size;
        } else {
            slicedArray[i] = arr.slice(step);
        }
    }
    return slicedArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2); // -> [["a", "b"]["c", "d"], ["e"]]


/**
 * Return remaining elements of an array, after chopping off n elements from the start.
 */

function slasher(arr, howMany) {
    if (howMany > arr.length) {
        return [];
    } else {
        arr.splice(0, howMany);
        return arr;
    }
}

slasher(["a", "b", "c"], 2); // -> ["c"]


/**
 * Return true if the string in the first element of the array contains all of the letters of 
 * the string in the second element of the array.
 */

function mutation(arr) {
    var letters = arr[1].toLowerCase().split('');
    for (var i = 0; i < letters.length; i++) {
        if (arr[0].toLowerCase().indexOf(letters[i]) < 0) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]); // ->  false


/**
 * Remove all falsy values from an array.
 */

function bouncer(arr) {
    var filtered = arr.filter(function(value) {
        if (value) return true;
        else return false;
    });
    return filtered;
}

bouncer([7, "ate", "", false, 9]); // -> [7, "ate", 9]


/**
 * Delete all elements provided by function argument from array.
 */

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    args = args.slice(1);

    function destroy(value) {
        if (args.indexOf(value) >= 0) return false;
        else return true;
    }
    return arr.filter(destroy);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // -> [1, 1]


/**
 * Return lowest index at which a value should be inserted into array (sorted).
 */

function getIndexToIns(arr, num) {
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
        if (num <= arr[i]) return i;
    }
    return arr.length;
}

getIndexToIns([40, 60], 50); // -> 1


/**
 * Caesar cipher (ROT13).
 */

function rot13(str) {
    var codes = [];
    for (var i = 0; i < str.length; i++) {
        var code = str[i].charCodeAt();
        if ((code > 77 && code < 91) || (code > 109 && code < 123)) {
            codes[i] = code - 13;
        } else if ((code > 64 && code < 78) || (code > 96 && code < 110)) {
            codes[i] = code + 13;
        } else {
            codes[i] = code;
        }
    }
    var res = String.fromCharCode.apply(null, codes);
    return res;
}

rot13("SERR PBQR PNZC"); // -> "FREE CODE CAMP"