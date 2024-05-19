console.log("Hello World");

function welcomeMeg(name) {
  console.log("Welcome " + name);
}

welcomeMeg("Jane! ");
welcomeMeg("Marc! ");


//calcGrossPrice
//-----------------------------------------------------------------------
function calcGrossPrice(x, y){
  return x * ( 1 + y);
 
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));



//addPositive
//-----------------------------------------------------------------------
function addPositive(num1 , num2) {
  r = Math.abs(num1) + Math.abs(num2)
  return r;
}
console.log(addPositive(2, 3));
console.log(addPositive(3,-5));
console.log(addPositive(-1, -8))




let userName="brad";
userName = "janne";
userName="sara";

//getUserNameLength
//------------------------------------------------------------------------------
function getUserNameLength(name) {
  const result = name.length;
  return result;
}

console.log(getUserNameLength(userName) > 4)

//isString function
//-------------------------------------------------------------------------------
const  isString = function(word) {

  return typeof word == "string";

};
console.log(isString("hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));

//If & switch statements
//-------------------------------------------------------------------------------

const size = 25;
let result;
if (size > 20 ) {
  result = "Greater than 20";
} else if ((size > 10)) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);

//-------------------------------------------------------------------------------


const X= 3;
const Y= -5; 
const Z= Math.abs(X) + Math.abs (Y) ;
console.log(Z)




function oldYoung(age) {
  if ( typeof age !== "number" || age < 0) {
    return " invalid parameter";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return " young person";
  } else {
    return " elder person ";
  }
}

console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));
console.log(oldYoung("sara")); 

//charCount
//-------------------------------------------------------------------------------

function charCount(word, char) {
  if (char.length !== 1) {
    console.log("The second parameter must be a single character.");
    return;
  }
  word = word.toLowerCase();
  char = char.toLowerCase();

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(charCount("hello", "l")); // result should be: 2
console.log(charCount("mama", "m")); // result should be: 2
console.log(charCount("Resümee", "e")); // result should be: 3



//removeItem
//-------------------------------------------------------------------------------

function removeItem(aray,index){
  const newArray = aray.slice();
  newArray.splice(index,1);
  return   newArray;


}


  const animals = ["Dog", "Cat", "Lion"];
  console.log(removeItem(animals,0))
  // result should be: ["Cat", "Lion"]

  console.log(animals);
  // result should be still: ["Dog", "Cat", "Lion"]

  const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
  console.log(removeItem(fruits, 2));
  // result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

  console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]



//sumOfCharacters
//-------------------------------------------------------------------------------


function sumOfCharacters(array) {
  let sum = 0;
 for (let i of array){
  
if (typeof i ==="string") {
  sum+= i.length;
}
}

 return sum;

}
const arr1 = ["Luke","Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
const arr2 = ["Code is","like humor",".","When you have","to explain it, it's bad!"];
console.log(sumOfCharacters(arr2));

const arr3 = ["Luke","Anakin", true, "Obi Wan", 333];




