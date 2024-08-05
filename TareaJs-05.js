/*
*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'. 
*/
/* 
*El programa esta comentado para poder ejecutar cada ejercicio sin fallas
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Función para obtener los datos del usuario 
  function getUserProfile() {
    readline.question('Please enter your username: ', (username) => {
      readline.question('Please enter your age: ', (age) => {
        readline.question('Please enter your favorite movies (separated by commas): ', (movies) => {
          const favoriteMovies = movies.split(',').map(movie => movie.trim());
  
          console.log(`\nUsername: ${username}`);
          console.log(`Age: ${age}`);
          console.log('Favorite Movies:');
          favoriteMovies.forEach(movie => {
            console.log(`The film "${movie}" is one of my favorites.`);
          });
  
          readline.close();
        });
      });
    });
  }
  
  // Llamada a la función para obtener los datos del usuario
  getUserProfile(); */
  

  /* 
  *Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 */

 /* 
 *El programa esta comentado para poder ejecutar cada ejercicio sin fallas
 const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numbers = [];
  
  function askForNumber(index) {
    readline.question(`Enter number ${index + 1}: `, (num) => {
      numbers.push(parseFloat(num));
  
      if (numbers.length < 10) {
        askForNumber(numbers.length);
      } else {
        const highestNumber = Math.max(...numbers);
        console.log(`The highest number is: ${highestNumber}`);
        readline.close();
      }
    });
  }
  
  // Comienza el proceso de solicitud de números
  askForNumber(0);
  */

 /*
 *Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */

/* 
 *El programa esta comentado para poder ejecutar cada ejercicio sin fallas

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Función para iniciar la alarma
  function setAlarm(seconds, message) {
    console.log(`Alarm set for ${seconds} seconds.`);
    
    setTimeout(() => {
      console.log(message);
      readline.close();
    }, seconds * 1000);
  }
  
  // Solicitar la cantidad de segundos y el mensaje
  readline.question('Enter the number of seconds until the alarm: ', (seconds) => {
    readline.question('Enter the message to show when the alarm goes off: ', (message) => {
      setAlarm(parseInt(seconds), message);
    });
  });
  */

  /* 
  * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

/* 
 *El programa esta comentado para poder ejecutar cada ejercicio sin fallas

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Función para verificar si una frase es un palíndromo
  function isPalindrome(str) {
    // Remover espacios, puntuación y convertir a minúsculas
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  // Solicitar la palabra o frase al usuario
  readline.question('Enter a word or sentence: ', (input) => {
    if (isPalindrome(input)) {
      console.log('The input is a palindrome.');
    } else {
      console.log('The input is not a palindrome.');
    }
    readline.close();
  });

  */
  
  /* 
 *Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

/* 
 *El programa esta comentado para poder ejecutar cada ejercicio sin fallas

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Función recursiva para calcular el factorial
  function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Solicitar el número al usuario
  readline.question('Enter an integer number n (where 1 <= n): ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
      console.log('Please enter a valid integer greater than or equal to 1.');
    } else {
      const result = factorial(n);
      console.log(`The factorial of ${n} is ${result}.`);
    }
    readline.close();
  });

  */

   /* 
 *Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

   */

// Función recursiva para aplanar la matriz
function flattenArray(arr) {
    let result = [];
    
    arr.forEach(element => {
      if (Array.isArray(element)) {
        result = result.concat(flattenArray(element));
      } else {
        result.push(element);
      }
    });
  
    return result;
  }
  
  let multiDimension = [1, [2, 3, [4, 5, [6]]]];
  
  // Llamada a la función para aplanar la matriz
  let flattenedArray = flattenArray(multiDimension);
  
  console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
