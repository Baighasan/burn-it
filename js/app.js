/* BMR CALCULATION (INPUT: GENDER, WEIGHT [lbs.], HEIGHT [inches], AGE [years])

 * Adult Male BMR = 66 + (6.3 x body weight in lbs.) + (12.9 x height in inches) - (6.8 x age in years)
 * 
 * Adult Female BMR = 655 + (4.3 x weight in lbs.) + (4.7 x height in inches) - (4.7 x age in years)
 */

/* TOTAL CALORIES NEEDS BASED ON ACTIVITY LEVEL

 * Sedentary = BMR x 1.2
 * 
 * Lightly Active (1-3 days a week) = BMR x 1.375
 * 
 * Moderately Active (3-5 days a week) = BMR x 1.55
 * 
 * Very Active (6-7 days a week) = BMR x 1.725
 * 
 * Extra Active (Extreme Daily Exercise) = BMR x 1.9
 */

function calculateCalories(){
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let weight = document.getElementById("weight").value;
    weight = parseInt(weight);
    let feetHeight = document.getElementById("feetHeight").value;
    let inchesHeight = document.getElementById("inchesHeight").value;
    let age = document.getElementById("age").value;
    let activityLevel = document.getElementById("activityLevel").value;
    let gainLosePerWeek = document.getElementById("gainLose/Week").value;
    let displayCalories = document.getElementById("displayCalories");
    let displayIdealWeight = document.getElementById("displayIdealWeight");
    let displayWeightChange = document.getElementById("displayWeightChange");
    let displayNewCalorieIntake = document.getElementById("displayNewCalorieIntake");
    let displayWeeksNeeded = document.getElementById("displayWeeksNeeded");

    // Converts ft. to inches and combines the two height values
    let height = parseInt(feetHeight) * 12;
    height = height + parseInt(inchesHeight);

    // Converts height from inches to cm for ideal weight calculations
    let cmHeight = height * 2.54;


    if (gender == "Male"){
        // Calculates male BMR (Daily calories needed based on weight, height, and age)
        let BMR = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);


        // Calculate ideal male weight based on height (cm)
        let maleIdealWeight = 50 + (0.91 * [cmHeight - 152.4]);
        maleIdealWeight = maleIdealWeight * 2.205;
        maleIdealWeight = parseInt(maleIdealWeight);

        // Nested if statements for calculation based on activity level
        if (activityLevel == "sedentary"){
            BMR = BMR * 1.2;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }
        else if (activityLevel == "lightlyActive"){
            BMR = BMR * 1.375;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;

        }
        else if (activityLevel == "moderatelyActive"){
            BMR = BMR * 1.55;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }
        else if (activityLevel == "veryActive"){
            BMR = BMR * 1.725;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }
        else if (activityLevel == "extremeActive"){
            BMR = BMR * 1.9;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }

        // Display male ideal weight based on height ONLY if user is not the same as the ideal weight
        if (weight !== maleIdealWeight){
            displayIdealWeight.innerHTML = "Your approximate ideal weight is " + maleIdealWeight + " pound(s)";
        }
        
        // If user is above/below male ideal weight, display how much user needs to gain/lose
        if (weight > maleIdealWeight){
            let maleLoseWeight = weight - maleIdealWeight;
            displayWeightChange.innerHTML = "You need to lose approximately " + maleLoseWeight + " pound(s)";
            let newDailyCalorieIntake = BMR - ([gainLosePerWeek * 3500] / 7);
            let weeksRequired = (1/gainLosePerWeek) * maleLoseWeight;
            weeksRequired = parseInt(weeksRequired);
            newDailyCalorieIntake.innerHTML = "Your daily intake if you want to lose " + gainLosePerWeek + " pound(s) is " + newDailyCalorieIntake;
            displayWeeksNeeded.innerHTML = "If you gain/lose " + gainLosePerWeek + " pound(s) per week, you will need to spend around " + weeksRequired + " weeks to achieve your goal.";
        }
        else if (weight < maleIdealWeight){
            let maleGainWeight = maleIdealWeight - weight;
            displayWeightChange.innerHTML = "You need to gain approximately " + maleGainWeight + " pound(s)"
            let newDailyCalorieIntake = BMR - ([gainLosePerWeek * 3500] / 7);
            let weeksRequired = (1/gainLosePerWeek) * maleGainWeight;
            weeksRequired = parseInt(weeksRequired);
            newDailyCalorieIntake.innerHTML = "Your daily intake if you want to gain " + gainLosePerWeek + " pound(s) is " + newDailyCalorieIntake;
            displayWeeksNeeded.innerHTML = "If you gain/lose " + gainLosePerWeek + " pounds per week, you will need to spend around " + weeksRequired + " weeks to achieve your goal.";
        }
        else if (weight == maleIdealWeight){
            displayWeeksNeeded.innerHTML = "Keep up the great work! You have an ideal weight";
        }
    }

    if (gender == "Female"){
        // Calculates female BMR (Daily calories needed based on weight, height, and age)
        let BMR = 665 + (4.3 * weight) + (4.7 * height) - (4.7 * age);

        // Calculate ideal female weight based on height (cm)
        let femaleIdealWeight = 45.5 + (0.91 * [cmHeight - 152.4]);
        femaleIdealWeight = femaleIdealWeight * 2.205;
        femaleIdealWeight = parseInt(femaleIdealWeight);

        // Nested if statements for calculation based on activity level
        if (activityLevel == "sedentary"){
            BMR = BMR * 1.2;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }
        else if (activityLevel == "lightlyActive"){
            BMR = BMR * 1.375;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;

        }
        else if (activityLevel == "moderatelyActive"){
            BMR = BMR * 1.55;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }
        else if (activityLevel == "veryActive"){
            BMR = BMR * 1.725;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }
        else if (activityLevel == "extremeActive"){
            BMR = BMR * 1.9;
            BMR = Math.round(BMR);
            displayCalories.innerHTML = "Your total calorie intake per day is " + BMR;
        }

        // Display female ideal weight based on height ONLY if user is not the same as the ideal weight
        if (weight !== femaleIdealWeight){
            displayIdealWeight.innerHTML = "Your approximate ideal weight is " + femaleIdealWeight + " pounds(s)";
        }

        // If user is above/below female ideal weight, display how much user needs to gain/lose
        if (weight > femaleIdealWeight){
            let femaleLoseWeight = weight - femaleIdealWeight;
            displayWeightChange.innerHTML = "You need to lose approximately " + femaleLoseWeight + " pound(s)"
            let newDailyCalorieIntake = BMR - ([gainLosePerWeek * 3500] / 7);
            let weeksRequired = (1/gainLosePerWeek) * femaleLoseWeight;
            weeksRequired = parseInt(weeksRequired);
            newDailyCalorieIntake.innerHTML = "Your daily intake if you want to gain/lose " + gainLosePerWeek + " pound(s) is " + newDailyCalorieIntake;
            displayWeeksNeeded.innerHTML = "If you gain/lose " + gainLosePerWeek + " pounds per week, you will need to spend around " + weeksRequired + " weeks to achieve your goal."
        } 
        else if (weight < femaleIdealWeight){
            let femaleGainWeight = femaleIdealWeight - weight;
            displayWeightChange.innerHTML = "You need to gain approximately " + femaleGainWeight + " pound(s)"
            let newDailyCalorieIntake = BMR - ([gainLosePerWeek * 3500] / 7);
            let weeksRequired = (1/gainLosePerWeek) * femaleGainWeight;
            weeksRequired = parseInt(weeksRequired);
            newDailyCalorieIntake.innerHTML = "Your daily intake if you want to gain/lose " + gainLosePerWeek + " pound(s) is " + newDailyCalorieIntake;
            displayWeeksNeeded.innerHTML = "If you gain/lose " + gainLosePerWeek + " pounds per week, you will need to spend around " + weeksRequired + " weeks to achieve your goal."
        }
        else if (weight == femaleIdealWeight){
            displayWeightChange.innerHTML = "Keep up the great work! Your weight is ideal."
        }
    }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function validate(){
    debugger;
    let email = document.getElementById("email").value;
    let emailText = document.getElementById("emailText");
    emailText.style.textAlign = "center";
    emailText.style.paddingTop = "25px"
    if (email.includes("@")){
        emailText.style.color = "green";
        emailText.innerHTML = "Thank you! You'll receive weekly updates for the latest calorie news";
        return;
    } else {
        emailText.style.color = "red";
        emailText.innerHTML = "Invalid email. Try again";
        return;
    }
}


// Var is used so that it becomes a global variable
var finalScore;

function question1Validation(){
    finalScore = 0;
    // Question 1 Validation
    let question1Answer = document.querySelector('input[name="caloriesInBodyFat"]:checked');
    let question1Null = document.getElementById("question1Null");
    if (question1Answer == null){
        question1Null.style.color = "#ab2016";
        question1Null.style.fontStyle = "italic";
        question1Null.style.textAlign = "center";
        question1Null.innerHTML = "Please select an answer"
        return;
    }
    if (question1Answer.value == 3500){
        finalScore++;
        console.log(finalScore);
    }

    // Removes the Null message
    question1Null.innerHTML = "";
    // Disables Button
    let question1Button = document.getElementById("question1Button");
    question1Button.disabled = true;

    // Display Question 2
    let displayQuestion2 = document.getElementById("question2");
    displayQuestion2.style.visibility = "visible";
}

function question2Validation(){
    // Question 2 Validation
    let question2Answer = document.querySelector('input[name="mainSourcesCalories"]:checked');
    let question2Null = document.getElementById("question2Null");
    if (question2Answer == null){
        question2Null.style.color = "#ab2016";
        question2Null.style.fontStyle = "italic";
        question2Null.style.textAlign = "center";
        question2Null.innerHTML = "Please select an answer"
        return;
    }
    if (question2Answer.value == "All of the above"){
        finalScore++;
    }

    // Removes the Null message
    question2Null.innerHTML = "";
    // Disables Button
    let question2Button = document.getElementById("question2Button");
    question2Button.disabled = true;

    // Display Question 3
    let displayQuestion3 = document.getElementById("question3");
    displayQuestion3.style.visibility = "visible";
}

function question3Validation(){
    // Question 3 Validation
    let question3Answer = document.querySelector('input[name="howManyCalories"]:checked');
    let question3Null = document.getElementById("question3Null");
    if (question3Answer == null){
        question3Null.style.color = "#ab2016";
        question3Null.style.fontStyle = "italic";
        question3Null.style.textAlign = "center";
        question3Null.innerHTML = "Please select an answer"
        return;
    }
    if (question3Answer.value == 449){
        finalScore++;
    }

    // Removes the Null message
    question3Null.innerHTML = "";
    // Disables Button
    let question3Button = document.getElementById("question3Button");
    question3Button.disabled = true;

    // Display Question 4
    let displayQuestion4 = document.getElementById("question4");
    displayQuestion4.style.visibility = "visible";
}

function question4Validation(){
    // Question 4 Validation
    let question4Answer = document.querySelector('input[name="gramsCarbsBrain"]:checked');
    let question4Null = document.getElementById("question4Null");
    if (question4Answer == null){
        question4Null.style.color = "#ab2016";
        question4Null.style.fontStyle = "italic";
        question4Null.style.textAlign = "center";
        question4Null.innerHTML = "Please select an answer";
        return;
    }
    if (question4Answer.value == "200-250"){
        finalScore++;
    }

    // Removes the Null message
    question4Null.innerHTML = "";
    // Disables Button
    let question4Button = document.getElementById("question4Button");
    question4Button.disabled = true;

    // Display Question 5
    let displayQuestion5 = document.getElementById("question5");
    displayQuestion5.style.visibility = "visible";
}

function question5Validation(){
    // Question 5 Validation
    let question5Answer = document.querySelector('input[name="macroNutrientsGlucose"]:checked');
    let question5Null = document.getElementById("question5Null");
    if (question5Answer == null){
        question5Null.style.color = "#ab2016";
        question5Null.style.fontStyle = "italic";
        question5Null.style.textAlign = "center";
        question5Null.innerHTML = "Please select an answer"
        return;
    }
    if (question5Answer.value == "carbs"){
        finalScore++;
    }

    // Removes the Null message
    question5Null.innerHTML = "";
    // Disables Button
    let question5Button = document.getElementById("question5Button");
    question5Button.disabled = true;

    // Display final answer
    let displayFinalScore = document.getElementById("displayFinalScore");
    displayFinalScore.style.padding = "30px"
    displayFinalScore.style.fontStyle = "italic";
    displayFinalScore.style.textAlign = "center";
    if (finalScore < 2){
        displayFinalScore.style.color = "red";
    } else {
        displayFinalScore.style.color = "green";
    }
    displayFinalScore.innerHTML = "YOUR FINAL SCORE: " + finalScore + "/5"
}


// Moves the slideshow every 5 seconds
setInterval(function(){ plusSlides(1); }, 5000);