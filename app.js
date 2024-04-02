console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//Exercise 1 
let favoriteNumber = 30;
const input = window.prompt("Please input a number");
console.log(input)

if (input < favoriteNumber) {
  console.log("too low");
} else if (input > favoriteNumber) {
  console.log("toohigh");
}
else { 
console.log("Congratulations!")
}

//Exercise 2
const birthMonth = window.prompt("What is your birth month?");

switch (birthMonth){
  case "January":
  case "February":
  case "March":
    console.log("Winter");
  break;
  case "April":
  case "May":
  case "June":
    console.log("Spring");
    break;
  case "July":
  case "August":
  case "September":
console.log("Summer");
  case "October":
  case "November":
  case "December":
    console.log("Fall");
    break;
    default :
    console.log("Please enter a valid birth month");
}


//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";
switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

/*
if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}
*/

if (colorId == "BK") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}
switch (colorId) {
  case "BK":
  color = "Black";
  break;
  case "BL":
  color = "Blue";
  break;
  case "RD":
    color = "Red"
  break;
  case "PU":
    color = "Purple"
  break;
    default:
      color = "White"
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
    case "M":
      size = "Medium";
    break;
    case "L":
      size = "Large";
    break;
    case "XL":
      size = "Extra Large";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);

