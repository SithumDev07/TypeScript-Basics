// Data Types
function add(n1, n2, showResult, resultPhrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect inputs!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 6;
var number2 = 23.36;
var printResult = true;
var resultPhrase = 'Result is ';
// const result = add(number1, number2, printResult);
add(number1, number2, printResult, resultPhrase);
// console.log(result);
