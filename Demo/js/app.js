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


