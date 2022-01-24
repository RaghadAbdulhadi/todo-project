'use strict';
//Enter your name
var name = prompt('Please enter your Name');
//Enter your gender
var gender = prompt('What is your Gender (Male or Female)?')
//Enter your age 
var age = prompt('What is your age?');


//If your age is less than or equal to zero -- age not acceptable
//If you are a female -- Ms
//If you are a male -- Mr
//If not male or female -- alert and welcome without ms or mr
if (age > 0) {
    var welcoming = confirm('Do you want to skip the welcoming message?')
    if (welcoming == false) {
        if (gender == 'Male' || gender == 'male') {
            alert('Welcome to Tick your Task website Mr.' + name)
        }
        else if (gender == 'Female' || gender == 'female') {
            alert('Welcome to Tick your Task website Ms.' + name)
        }
        else if (gender != 'Female' && gender != 'Male' || gender != 'female' && gender == 'male') {
            alert('Please you should enter you gender (Male or Female)')
            alert('Welcome to Tick your Task website')
        }
    }
}
else {
    alert('Your age is not acceptable, Please make sure you entered your age correctly!')
}

//yes or no questions
let answersArray = [];

function validateAndGetAnswer(question, userAns) {
    let answer = userAns;
    while (answer !== "yes" && answer !== "no" && answer !== "") {
        answer = prompt(question).toLowerCase();
    }
    return answer == "" ? "Invalid!" : answer;
}

let q1 = "Do you usually find difficulties organizing your tasks?"
let ans1 = prompt(q1).toLowerCase();
ans1 =  validateAndGetAnswer(q1, ans1);


let q2 = "Do you postpone your tasks everyday?"
let ans2 = prompt(q2).toLowerCase();
ans2 = validateAndGetAnswer(q2, ans2);


let q3 = "Do you write down your tasks?"
let ans3 = prompt(q3).toLowerCase();
ans3 = validateAndGetAnswer(q3, ans3);

answersArray.push(ans1)
answersArray.push(ans2)
answersArray.push(ans3)

answersArray.forEach((answer) => console.log(answer));
