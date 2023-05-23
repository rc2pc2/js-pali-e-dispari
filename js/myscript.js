const userWord = prompt('Type a word');

if (isPalindrome(userWord)){
    console.log('The given word is palindrome');
} else {
    console.log('The given word is not palindrome');
}

// const userChoice = prompt('Pick even or odd');
// const userNumber = parseInt(prompt('Pick a number between 1 and 5'));

// const aINumber = getRandomInt(1,5);

// const sum = userNumber + aINumber;

// let result = "";
// if ( isEven(sum) ){
//     result = 'even';
// } else {
//     result = 'odd';
// }

// if ( result === userChoice.toLowerCase()){
//     console.log('Player wins!', sum, aINumber, userNumber);
// } else {
//     console.log('I WON AHAHAHAHAHAHAHAHAHAHAHA!!! POWER TO THE MACHINES!' , sum, aINumber, userNumber);
// }


/**
 * Function that checks if a given number is even.
 *
 * @param number the number to be checked
 * @returns true if the number is even, false otherwise.
 */
function isEven(number){
    if ( number % 2 === 0){
        return true;
    }
    return false;
}

/**
 * Function that checks if a string is palindrome.
 *
 * @param  word the string to be checked
 * @returns true if the string was palindrome, false otherwise.
 */
function isPalindrome(word){
    for (let index = 0; index < word.length / 2; index++) {
        if ( word[index] !== word[word.length - 1 - index ]){
            return false;
        }
    }
    return true;
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

/**
 * Function that generates a random number (not secure) between two values, both included.
 *
 * @param minumNumber the included minium value of the random generated number range.
 * @param maximumNumber the included maximum value of the random generated number range
 * @returns A randomly generated number.
 */
function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);

    return randomNumber;
}