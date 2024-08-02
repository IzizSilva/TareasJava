/*
*Sum of Resistors in Series
 
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123) 
*/

function sumResistance(resistors) {
    let totalResistance = resistors.reduce((sum, r) => sum + Math.abs(r), 0);
    return `${totalResistance} ohms`;
}

console.log(sumResistance([-1, 5, 6, 3]));  // Should return "15 ohms"
console.log(sumResistance([14, 3.5, 6]));   // Should return "23.5 ohms"
console.log(sumResistance([8, 15, 100]));   // Should return "123 ohms"

/* 
*Number divided into halves
Given a number, return the number divided into its halves in an array.
Examples:
- numDiv(4) should return [2, 2].
- numDiv(10) should return [5, 5].
*/

function numDiv(number) {
    let half = number / 2;
    return [half, half];
}

console.log(numDiv(4));  // Should return [2, 2]
console.log(numDiv(10)); // Should return [5, 5]

/*
*Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`. */

function secretName(names) {
    return names.map(name => name[0]).sort().join('');
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));  // Should return "EFN"
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));  // Should return "CJMPRR"
console.log(secretName(['Harry', 'Ron', 'Hermione']));  // Should return "HHR"

/* 
*Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`. 
*/

function onlineStatus(users) {
    if (users.length === 0) {
        return 'No one is online';
    } else if (users.length === 1) {
        return `${users[0]} is online`;
    } else if (users.length === 2) {
        return `${users[0]} and ${users[1]} are online`;
    } else {
        return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
    }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));  // Should return "mockIng99, J0eyPunch and 1 more online"
console.log(onlineStatus(['user1']));  // Should return "user1 is online"
console.log(onlineStatus(['user1', 'user2']));  // Should return "user1 and user2 are online"
console.log(onlineStatus([]));  // Should return "No one is online"


/*
*Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

function arrayMultiplos(number, length) {
    return Array.from({ length }, (_, i) => number * (i + 1));
}

// Examples
console.log(arrayMultiplos(2, 10));  // Should return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6));  // Should return [17, 34, 51, 68, 85, 102]

/*
*Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- positiveDom([-1, -3, -5, 4, 6767]) should return false.
*/

function positiveDom(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        }
    });

    return positiveCount > negativeCount;
}

// Example
console.log(positiveDom([-1, -3, -5, 4, 6767]));  // Should return false


/*
*Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
 */

function antipodalAverage(arr) {
    const len = arr.length;
    const halfLen = Math.floor(len / 2);

    // Divide el array en dos partes iguales. Si es impar, eliminamos el elemento del medio.
    const firstPart = arr.slice(0, halfLen);
    const secondPart = arr.slice(len % 2 === 0 ? halfLen : halfLen + 1);

    // Revertimos la segunda parte
    const reversedSecondPart = secondPart.reverse();

    // Calculamos la suma de cada número en la primera parte con el número inverso en la segunda parte
    const result = firstPart.map((num, index) => (num + reversedSecondPart[index]) / 2);

    return result;
}

// Ejemplo
console.log(antipodalAverage([1, 2, 3, 5, 22, 6]));  // Debería devolver [3.5, 12, 4]
