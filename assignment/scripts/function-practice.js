console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  return 'Hello World!';
}

// Call the function to test

console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'

function helloName( name ) {
  console.log('Hello,', name);
  return name;
}

// Remember to call the function to test

helloName('Octavius');
helloName('Dmitri');
helloName('Brighine');

// 3. Function to add two numbers together & return the result

function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
let solution = firstNumber + secondNumber;
return solution;
}

console.log('Q3:', addNumbers(4,92.4));
console.log('Q3:', addNumbers(42566432,73451677));

// 4. Function to multiply three numbers & return the result

function multiplyThree(num0, num1, num2){
  let answer = num0 * num1 * num2;
  return answer;
}

console.log('Q4:', multiplyThree(1,2,3));
console.log('Q4:', multiplyThree(10,8,12));
console.log('Q4:', multiplyThree(0,2.2,465));
console.log('Q4:', multiplyThree(88,21,9));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    else{return false;
    }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let array = [];

function getLast(array) {
  let lastItem = array[array.length - 1];
  if(array.length > 0){
    return lastItem;
  }
  else{
    return lastItem;
  }
}

console.log('Q6:', getLast(array));

array = [4, 3, 6, 3, 7, 5, 8, 10, 9];
console.log('Q6:', getLast(array));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let myRocks = ['Blue Kyanite', 'Moldavite', 'Fluorite', 'Chalcedony', 'Malachite', 'Selenite', 'Amethyst', 'Rose Quartz', 'Ocean Jasper'];

function find( value, myRocks ){
  for (let i  of myRocks){
    if(value === myRocks[i]){
      return true;
      }
    else{
      return false;
      }
    }
  }

console.log('Q7:', find('Malachite', myRocks));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0;
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
