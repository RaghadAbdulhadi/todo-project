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


