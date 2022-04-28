// BMI Calculator Advanced

function bmiCalculator(weight, height) {
    var num = weight / (height * height);
    var bmi = num.toFixed(1);

    if(bmi < 18.5){
        var output = "Your BMI is " + bmi + ", so you are underweight.";
        return output;
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        var output = "Your BMI is " + bmi + ", so you have a normal weight.";
        return output;
    }
    else {
        var output = "Your BMI is " + bmi + ", so you are overweight.";
        return output;
    }  
    
}
bmiCalculator(60, 2);
bmiCalculator(84, 1.2);
bmiCalculator(76, 1.5);
bmiCalculator(72, 1.9);
bmiCalculator(63, 1.3);



// Automated System for Movie Theatre Managers

var age = 12;
var accompanied = false;

if(age === 12 && accompanied === true){
    console.log("Allowed to enter!");
}
else if(age > 12 && accompanied === true) {
    console.log("Allowed to enter!")
}
else if (age > 12 && accompanied === !true){
    console.log("Allowed to enter!")
}
else if(age < 12 ) {
    console.log("Not allowed to enter!")
}
else{
    console.log("All under-aged kids unaccompanied are not allowed into the cinema!")
}

