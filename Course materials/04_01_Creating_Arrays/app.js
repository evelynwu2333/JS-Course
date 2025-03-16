//An empty array:
let todoList = [];

//Array of strings:
let shoppingList = [ 'cereal', 'cheese', 'ice' ];

// Array of numbers:
let lotto = [ 45, 12, 23, 25, 34 ];

// Array of multiple types:
let myCollection = [ 12, 'dog', true, null, NaN ];

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let sub of subreddits) {
    console.log(sub);
}

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        // console.log(row[j]);
        sum += row[j];
    }
    console.log(sum);
}