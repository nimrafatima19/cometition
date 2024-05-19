



var ary = ["", "Question # 01: Given an integer array nums, find a subarray that has the largest product, and return the product.<br/>", "Question # 02: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use thesame element twice.<br/>", "Question # 03: Reverse each word in a given input string.", "Question # 04: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.<br/>", "Question # 05:Write a JavaScript function to convert an amount into coins.Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1 <br/>",]

for (i = 0; i < ary.length; i++) {

}
// Question # 3
var question = prompt("Enter any question no 1 to 5") // if we add + before prompt it will number
document.write(ary[question]);
if (question === "3") {  //use inverted comma to make number to string
  var name = prompt("Enter your name")
  function reverseString(name) {
    return name.split("").reverse().join("");
  }
  document.write("<br>"  + `See your name is reverse now :  `,reverseString(name));
}


var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walltron",
    readingStatus: true
  },
  {
    author: "Nimra",
    title: "Web Developer",
    readingStatus: false
  }
];
//Question #4
if (question === "4") {
  document.write(`<h2>Solution</h2>`)

  for (i = 0; i < library.length; i++) {
    document.write("Author is " + library[i].author + "<br/>");
    document.write("Book Name is " + library[i].title + "<br/>");
    document.write("Status is " + library[i].readingStatus + "<br/>");
  }
}
//  Question # 5
if (question === "5") {
  
  function amountToCoins(amount, coins) {
    var result = [];
    document.write(`<h2>Solution</h2>`)
    for (var i = 0; i < coins.length; i++) {
      while (amount >= coins[i]) {
        result.push(coins[i]);
        amount -= coins[i];
      }
    }

    return result;
  }

document.write(amountToCoins(46, [25, 10, 5, 2, 1]))
}
// Question # 1
if (question === "1") {
  document.write(`<h2>Solution</h2>`)
  let num = [2, 3, -2, -4]
  document.write(`Output is `,num[0] * num[1]);
}


// Question # 2
if (question === "2") {
  document.write(`<h2>Solution</h2>`)
let nums = [2,7,11,15]
document.write(`Output is `,nums [0] + [1])

}

