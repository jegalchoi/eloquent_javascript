console.log("Looping a Triangle");
var num = "";
for(i = 0; i < 7; i++) {
  console.log(num += "#");
};


console.log("Fizzbuzz");
//need to check solution for this exercise...outputs correctly though
for(i = 1; i <= 100; i++) {
  if(i % 3 == 0 && i % 5 == 0) {
    console.log("Fizzbuzz");
  } else if(i % 3 == 0) {
    console.log("Fizz");
  } else if(i % 5 == 0) {
    console.log("Buzz");
  } else{
    console.log(i);
  }
};

console.log("Fizzbuzz 2.0");
//skipped

console.log("Chessboard");
var size = Number(prompt("What would you like the size of grid size to be?"));
var grid = size + 1;
var arr = [];
for(i = 0; i <= grid * size; i++) {
  if(size % 2 ==0) {
    if(i % 2 == 0 && i % grid == 0) {
      arr.push("\n");
    } else if(i % 2 !== 0 && i % grid == 0) {
      arr.push("\n");
    } else if(i % 2 == 0) {
      arr.push("#");
    } else {
      arr.push(" ");
    };
  };
  if(size % 2 !== 0) {
    if(i % grid == 0) {
        arr.push("\n" + "#");
    } else if(i % 2 == 0) {
      arr.push("#");
    } else {
      arr.push(" ");
    };
  };

};
console.log(arr.join(''));
