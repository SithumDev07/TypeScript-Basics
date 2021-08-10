// Data Types

function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect inputs!');
    // }
    let result = n1 + n2;
    // Mathematical operation before print 
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
}

let number: number;
const number1 = 6;
const number2 = 23.36;
const printResult = true;
const resultPhrase = 'Result is ';

// const result = add(number1, number2, printResult);
add(number1, number2, printResult, resultPhrase);
// console.log(result);
