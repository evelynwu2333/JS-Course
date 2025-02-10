// let day = 2;

// if (day === 1) {
//     console.log('MONDAY');
// }
// else if (day === 2) {
//     console.log('TUESDAY');
// }
// else if (day === 3) {
//     console.log('WEDNESDAY');
// }
// else if (day === 4) {
//     console.log('THURSDAY');
// }
// else if (day === 5) {
//     console.log('FRIDAY');
// }
// else if (day === 6) {
//     console.log('SATURDAY');
// }
// else if (day === 7) {
//     console.log('SUNDAY');
// }
// else {
//     console.log('INVALID DAY');
// }

// switch (day) {
//     case 1:
//         console.log('MONDAY');
//         break;
//     case 2:
//         console.log('TUESDAY');
//         break;
//     case 3:
//         console.log('WEDNESDAY');
//         break; 
//     case 4:
//         console.log('THURSDAY');
//         break;
//     case 5:
//         console.log('FRIDAY');
//         break;
//     case 6:
//         console.log('SATURDAY');
//         break;
//     case 7:
//         console.log('SUNDAY');
//         break;
//     default:
//         console.log('INVALID DAY');
//         break;
// }


let num = 7;

if (num === 7) {
    console.log('lucky');
}
else {
    console.log('bad');
}

num === 7 ? console.log('lucky') : console.log('bad');

let yourStatus = 'offline';

// let color;
// if (yourStatus === 'offline') {
//     color = 'red';
// }
// else {
//     color = 'green';
// }

let color = yourStatus === 'offline' ? 'red' : 'green';
console.log(color);

let newArray = [];

newArray = ['cheese', 12, NaN, null];

console.log(newArray[0]);

newArray[0] = 'milk';
console.log(newArray);


newArray[newArray.length] = 'ice cream';
console.log(newArray);


let songs = ['s1', 's2', 's3', 's4'];
songs.push('new song');
console.log(songs);

songs.push(true);
console.log(songs);
songs.pop();
console.log(songs);

songs.shift()
console.log(songs);

songs.unshift('old song');
console.log(songs);

songs.unshift('spoon', 'mug');
console.log(songs);


let fruits = ['apple', 'banana'];
let veggies = ['cabbage', 'onion'];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let meats = ['steak', 'chicken'];

let allFood = fruits.concat(veggies, meats);
console.log(allFood);

console.log(allFood.indexOf('fish'));

console.log(allFood.indexOf('apple'));

console.log(allFood.reverse());
let foodNames = allFood.join(', ');
console.log(foodNames);

let pick = allFood.slice(0,3);
console.log(pick);

pick = allFood.slice(4, 6);
console.log(pick);
pick = allFood.slice(4);
console.log(pick);
pick = allFood.slice(-2);
console.log(pick);
pick = allFood.slice(-2, -1);
console.log(pick);

let copy = allFood.slice();
console.log(copy);

let animals = ['shark', 'octopus', 'cow', 'lizard', 'whale'];
console.log(animals);
// add
animals.splice(1, 0, 'sheep');
console.log(animals);
// remove
animals.splice(1, 1);
console.log(animals);
// add multiple
animals.splice(3, 0, 'snake', 'frog')
console.log(animals);
// replace
animals.splice(3, 2, 'tiger', 'cat');
console.log(animals);

// let nums = [34, 10, 1000, 67, 99];
// nums.sort();
// console.log(nums); // sort as strings


// let otherNums = nums;
// nums.push(9);
// console.log(otherNums);


const nums = [34, 10, 1000, 67, 99];
nums.unshift('a string');
nums.pop();
nums.push(5);
console.log(nums);

const animalPairs = [
    ['doe', 'buck'],
    [22, 23],
    ['ewe', 'ram'] 
];

console.log(animalPairs[2][0]);

animalPairs[2][0] = 'new ewe';
console.log(animalPairs);

const texts = ['lol', 'omg', 'ttyl'];
const caps = texts.map(t => {
    return t.toUpperCase();
})
console.log(caps);

const newTexts = texts.map(t => {
    return {
        text: t,
        firstCharacter: t.charAt(0),
        lastCharacter: t.charAt(t.length-1)
    };
});

console.log(newTexts);
const square = n => n * n;