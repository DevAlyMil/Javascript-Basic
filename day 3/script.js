let userName = "";
let age = 0;
let height = 183;
let weigth = 75;

userName = prompt("What your name ?")
age = parseInt(prompt("What your age?"))
height = parseFloat(prompt("What your height? (in cm) "))
weigth = parseInt(prompt("What your wheigth?"))

let calcAge = 0;
calcAge = 2023 - age ;

let imc = 0 ; 
imc = weigth / (height * height);

let resultImc = 0;
resultImc = (imc * 10000).toFixed(2);

console.log("Hello " + userName + ", you are " + age +" years old, you were born in "
+ calcAge + ", you are " + height + "cm tall, you weigh " + weigth + "kg and your BMI is " + resultImc + "kg/m2" )







