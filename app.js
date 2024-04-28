
prompt("write Question number like 1,2..")
// Question 1
let num = [2,3,-2,-4]
alert(num[0] * num[1]);



if (prompt == 1){
    alert(num)
}if (prompt !== 1){
alert("it's not Q NO:01");
}
// Question 02
let nums = [2,7,11,15]
alert(nums [0] + [1])

if(prompt == 2){
    alert(nums)
}
// Question 3

// program to reverse a string

function reverseString(str) {

    // return a new array of strings
    
    const arrayStrings = str.split("");
    
    // reverse the new created array elements
    
    const reverseArray = arrayStrings.reverse();
    
    // join all elements of the array into a string
    
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    
    return joinArray;
    
    }
    
    // take input from the user
    
    const string = prompt('Q:04 Enter a string: ');
    
    const result = reverseString(string);
    
    alert(result);




// Question 04
var library = [
    {
        authour: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        authour: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        authour: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        authour: 'Suzanne Collins',
        title: 'The Final Book of the Hunger Games',
        readingStatus: false
    },
]
for (var i = 0; i < library.length; i++) {
    var book = library[i];
    var bookInfo = book.title + ' by ' + book.author;
    if (book.readingStatus) {
      alert(bookInfo + ' - Already read.');
    } else {
      alert(bookInfo + ' - Not yet read.');
    }
  }

// Question 05
  function amountToCoins(amount, coins) {
    var result = [];
    
    for (var i = 0; i < coins.length; i++) {
      while (amount >= coins[i]) {
        result.push(coins[i]);
        amount -= coins[i];
      }
    }
    
    return result;
  }
  
  alert(amountToCoins(46, [25, 10, 5, 2, 1]))

 



