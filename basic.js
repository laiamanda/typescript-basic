// BASIC 1 //
/* function add(n1: number, n2:number){
  return n1+ n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result); */
// BASIC 2 //
/* function add(n1: number, n2:number){
  if ( typeof n1 !== 'number' || typeof n2 !== 'number'){
    throw new Error('Incorrect input!');
  }
  return n1+ n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result); */
// BASIC 3 //
// function add(n1: number, n2: number, showResult: boolean, phrase: string){
//   // if ( typeof n1 !== 'number' || typeof n2 !== 'number'){
//   //   throw new Error('Incorrect input!');
//   // }
//   const result = n1 + n2;
//   if (showResult){
//     console.log(phrase +  result);
//   } else {
//     return result;
//   }
// }
// const number1 = 5; // 5.0
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: ';
// add(number1, number2, printResult, resultPhrase);
// BASIC 4 //
function add(n1, n2, showResult, phrase) {
    // if ( typeof n1 !== 'number' || typeof n2 !== 'number'){
    //   throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
// resultPhrase = 5;
add(number1, number2, printResult, resultPhrase);
