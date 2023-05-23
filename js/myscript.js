const userWord = prompt('Type a word');

if (isPalindrome(userWord)){
    console.log('The given word is palindrome');
} else {
    console.log('The given word is not palindrome');
}










/**
 * Function that checks if a string is palindrome.
 *
 * @param  word the string to be checked
 * @returns true if the string was palindrome, false otherwise.
 */
function isPalindrome(word){
    if (word.toLowerCase() == wordReverser(word).toLowerCase()){
        return true;
    }
    return false;
}

/**
 * Function that reverses a string.
 *
 * @param wordToReverse the string to be reversed
 * @returns The reversed string
 */
function wordReverser(wordToReverse){
    let reversedWord = "";

    for (let index = wordToReverse.length - 1 ; index >= 0 ; index--) {
        reversedWord += wordToReverse[index];
    }

    return reversedWord;
}