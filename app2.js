// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     console.log("password less than 8 characters");
//     return false;
//   }
//   if (password.indexOf(" ") != -1) {
//     console.log("password contains space");
//     return false;
//   }
//   if (password.indexOf(username) != -1) {
//     console.log("password contains username");
//     return false;
//   }
//   return true;
// }

// const arr = [1, 2, 3, 4];
// const [first, second] = arr;
// console.log([first, second]);
// console.log(...arr);

// const dt = new Date(...[2016, 8, 5]);
// console.log(dt);

// if (true) {
//   var animal = "eel";
// }
// console.log(animal);

function doubleArr(arr) {
  const result = [];
  let double;
  for (let num of arr) {
    double = num * 2;
    result.push(double);
  }
  console.log(double);
  return result;
}
console.log(doubleArr([1, 2, 3]));

const sum = function (x, y) {
  return x + y;
};
console.dir(sum);
const thing = {
  doSomthing: sum,
};
console.log(thing.doSomthing(1, 3));

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

function rage() {
  console.log("RAGE!!");
}

repeatNTimes(rage, 8);

function grumpus() {
  alert("go away");
}

// setTimeout(grumpus, 5000);
// setTimeout(() => {
//   alert("go away");
// }, 5000);

const nums = [34, 35, 66, 23, 56, 9];
const odds = nums.filter((n) => n % 2 === 1);
console.log(odds);
const bigNums = nums.filter((n) => n > 50);
console.log(bigNums);
