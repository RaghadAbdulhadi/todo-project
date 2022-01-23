'use strict';
var name = prompt('Please enter your Name');
var gender = prompt('What is your Gender (Male or Female)?')


var age = prompt('What is your age?');
if (age > 0) {
    var welcoming = confirm('Do you want to skip the welcoming message?')
    if (welcoming == false) {
        if (gender == 'Male' || gender == 'male') {
            alert('Welcome to Tick your Task website Mr.' + name)
        }
        else if (gender == 'Female' || gender == 'female') {
            alert('Welcome to Tick your Task website Ms.' + name)
        }
        else {
            alert('Welcome to Tick your Task website')
        }
    }
}
else {
    alert('Your age is not acceptable, Please make sure you entered your age correctly!')
}






//arrays
var array1 = [] //way1
var array2 = new Array(); //way2

console.log(typeof(array1),typeof(array2))

//to add new property 
arr[indexnum] = value;

//Array methods:
//push: pushes values to the end of the array
array1.push()
//pop: remove values from the end of the array
array1.pop()
//unshift: adds the begg
array1.unshift()
//shift: remove elements from the end
array1.shift()

//to know the length of the array
array1.length

//to convert the array to a string
array1.toString() //method1

//loops
//DRY: dont repeat yourself
//for loop:
/* for([initialization; condition; final-expression]){
    statment
} */
for (var i = 0; i>=5; i++){
    console.log('raghad',i)
}
// break, goes out of the if statment and stops iterating
for (var i = 0; i<5; i++){
    if(i==3){
        break
    }
    console.log(i);
}
//continue, goes out of the if statment but it continues iterating the next iteration 
for (var i = 0; i<5; i++){
    if(i==3){
        continue
    }
    console.log(i);
}


//while loop: when i dont know how many times the statment should be executed
/*while (condition){
    statments
}
*/
// infinite loop , the condition is always true
var number = 10
while (number<15){
    console.log(number)
}
// so we should increment the varaible
var number = 10
while (number<15){
    console.log(number);
    number++;
}
//do .. while loop
do{ //to execute the first statment even if the while condition is false
    console.log('hello world')
    number++;
}
while(number<6){

}
//for .. in loop
//for ..of loop

//functions
//function declaration:
function greeting (){
    console.log('hello world')
}
greeting() //invoke or call the function 
function square(number){//parameter
    return number*number; //
}
console.log(square(5));//argument

//function expression (anonymous functions), without a name but you should save it in a varaible
var saygoodbye = function (name){
    console.log('good bye'+ name)
}
saygoodbye();

// arrow function
let arrowfunction = () => {
    console.log('this is an arrow function')
}
arrowfunction();

var square = (number) => {
    return number*number;
}
//if we have one line code we can just remove the curly brackets and return keyword
var square = (number) => number*number;

console.log(square(5));//argument


//scopes
//1.global scope
/* window scope --- the whole window 
can acess or reach them from anywhere
 */
//2.local scope....specifcally for function 
/* function scope --- inside the function 
can acess it from inside the function only 
 */
//3.block scope 
/*let, const
starts from { and ends till the }
 */
{
    let x =10;
    const r = '25';
    console.log(x);//x=10
}
console.log(x);//undefined
console.log(r);//undefined

var x = 10 //global varaible
function {
    console.log(x);//x = 10
    var y = 25; //local varaible
}
console.log(y);//undefined



function sayhi(){
    let greeting = 'hi rania';//local
    for (let i = 0; i<3; i++){
        let greeting = 'hi everyone';//block
        console.log(greeting);//block
    }
    console.log(greeting);//local
}
sayhi()


//hoisting
/*all declarations will move to the top of the scope declaration not assing, if you want to assign an value you should write it at he top*/
console.log(value)
var value;

function sum(a,b){
    return a + b;
}
console.log(sum(1,3))
//or
console.log(sum(1,3))
function sum(a,b){
    return a + b;
}
// syncrounus func vs asyncronus func
// sync func ... execute line by line 
/*
let a = 10 ... save a=10
let b = 13 ... save b=13
console.log(a+b) ... console.log(23)
 */
//async func ... if a line takes alot of time it will skip it and contoniue executing and give it a promise that it will come back and exceute it
setTimeout(function(){
    console.log('async func',a)
},50000)//5000sec then execute the code in the console
