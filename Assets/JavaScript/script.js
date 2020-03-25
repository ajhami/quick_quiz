/////////////////
/// script.js ///
/////////////////



// variables
var score = 0;
var initials = "";
var categoryIndex = 0;
var time = 75;
var randQuestionNum = 0;
var answeredCorrect = 0;
//var highScores = [];
var initialsText = "";
var highScoresList = document.querySelector("#hs_list") || {};

// Questions Object
var questionObj = {
    category1 : {
        categoryName : "Mathematics",
        questions : {
            question1 : {
                question : "Joelle earns her regular pay of $7.50 per hour for up to 40 hours of work in a week. For each hour over 40 hours of work in a week, Joelle is paid 1.5 times her regular pay. How much does Joelle earn for a week in which she works 42 hours?",
                answers : ["$322.50", "$126.00", "$378.00", "$472.50"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "Aaron is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Aaron’s total charge, in dollars, for staying x nights?",
                answers : ["(99.5 + 0.08x) + 5", "1.08(99.95x) + 5", "1.08(99.95x + 5)", "1.08(99.95 + 5)x"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "A company’s manager estimated that the cost C, in dollars, of producing n items is C equals 7 n plus 350. The company sells each item for $12. The company makes a profit when total income from selling a quantity of items is greater than the total cost of producing that quantity of items. Which of the following inequalities gives all possible values of n for which the manager estimates that the company will make a profit?",
                answers : ["n < 70", "n < 84", "n > 70", "n > 84"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "At a primate reserve, the mean age of all the male primates is 15 years, and the mean age of all female primates is 19 years. Which of the following must be true about the mean age m of the combined group of male and female primates at the primate reserve?",
                answers : ["m = 17", "m > 17", "m < 17", "15 < m < 19"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category2 : {
        categoryName : "History",
        questions : {
            question1 : {
                question : "What was the first country to recognize Mexico's independence in 1836?",
                answers : ["United States", "Spain", "Canada", "United Kingdom"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "Of which country was Greenland a colony until 1981?",
                answers : ["Sweden", "Denmark", "Iceland", "Russia"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "Which of the following was NOT a D-Day beach?",
                answers : ["Gold", "Juno", "Reno", "Sword"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "Which organization was awarded the Nobel Peace Prize in 1917?",
                answers : ["Fathers for Justice", "The Police", "The Boy Scouts of America", "The Red Cross"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category3 : {
        categoryName : "Science",
        questions : {
            question1 : {
                question : "Hormones are chemicals of which system of the body?",
                answers : ["Endocrine", "Cardiovascular", "Excretory", "Nervous"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "About how mucuh of the Earth is covered by the ocean?",
                answers : ["100%", "70%", "40%", "10%"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "What was named after a hydrogen bomb test?",
                answers : ["Hula Hoop", "Spitfire", "Bikini", "Matchbox"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "The word 'plasma' describes what?",
                answers : ["A liquid component of blood", "A state of matter", "Neither", "Both"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category4 : {
        categoryName : "Geography",
        questions : {
            question1 : {
                question : "What is the capital of Florida?",
                answers : ["Tallahassee", "Orlando", "Jacksonville", "Tampa Bay"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "What is the smallest state in the United States?",
                answers : ["New Jersey", "Rhode Island", "Massachusetts", "Conneticut"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "What is the largest country in the world by area?",
                answers : ["Brazil", "Canada", "Russia", "China"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "One of the ancient world wonders, the 'Hanging Gardens', was found in which city?",
                answers : ["Rome", "Alexandria", "Athens", "Babylon"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category5 : {
        categoryName : "Entertainment",
        questions : {
            question1 : {
                question : "Richard Hatch is famously known as the first winner of which reality TV show?",
                answers : ["Survivor", "The Bachelor", "Jeopardy", "Celebrity Apprentice"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "Kevin Costner produces and stars in the 1990 Academy Award's Best Picture:",
                answers : ["Ghost", "Dances with Wolves", "Goodfellas", "The Silence of the Lambs"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "What movie does not have Brad Pitt in it?",
                answers : ["Oceans 13", "Burn After Reading", "300", "Fight Club"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "Ozzy Osbourne is the former lead vocalist of which classic metal band?",
                answers : ["Led Zeppelin", "Guns N' Roses", "Iron Maiden", "Black Sabbath"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    }

}


// Functions and Event Listeners

function startTimer() {

    var timerInterval = setInterval(function() {
    time--;
    $(".timer").text(time);

    if(time < 1) {
        finalScreen();
        clearInterval(timerInterval);
    }

    }, 1000);
}

function quickMessage(message) {
    var messageTime = 4;
    $("#quick_message").removeClass("hide");
    $("#answer_status").text(message);

    var quickInterval = setInterval(function() {
    messageTime--;

    if(messageTime < 1) {
        clearInterval(quickInterval);
        $("#quick_message").addClass("hide");
    }

    }, 200);
}


var switchScreen = function(category) {
    randQuestionNum = Math.floor(Math.random() * 4);

    $("#category_header").text(category.categoryName);
    $("#question_p").text(questionNum[randQuestionNum].question);
    $("#ans1").text(questionNum[randQuestionNum].answers[0]);
    $("#ans2").text(questionNum[randQuestionNum].answers[1]);
    $("#ans3").text(questionNum[randQuestionNum].answers[2]);
    $("#ans4").text(questionNum[randQuestionNum].answers[3]);

    categoryIndex++;
}

var answerSelect = function(userAnswer) {
    // if the event selected is correct, score = score + 10
    // otherwise, deduct score and time
    if(userAnswer === "Correct"){
        answeredCorrect++;
        score = score + 15;
        
        quickMessage("Correct!");
    }
    else {        
        
        if(time < 11) {
            time = 0;
        }
        else{
            time = time - 10;
        }

        if(score >= 10){
            score = score - 10;
        }
        else {
            score = 0;
        }
        
        quickMessage("Wrong");



    }
    
    // if categoryIndex > 4, then run finalScreen function
    // otherwise, switch out category and questions
    if(categoryIndex > 4) {
        finalScreen();
    }
    else{
        // Refreshing the question number array using updated category index
        questionNum = [categories[categoryIndex].questions.question1, categories[categoryIndex].questions.question2, categories[categoryIndex].questions.question3, categories[categoryIndex].questions.question4];
        clickForward();
    }
}

var finalScreen = function() {
    //$(".timer").text("0");

    // If the user gets 3 or more questions correct, add bonus points
    if(answeredCorrect >= 3) {
        // Maximum of 30 bonus points for completing the quiz with 50 seconds remaining
        if(time > 50){
            score = score + 30;
        }
        else{
            score = score + (Math.floor(time / 10) * 5);
        }
    }

    $("#final_score").text(score);

    time = 0;
    $(".timer").text(time);

    // Hide quiz_cont and unhide final_screen
    //$("#final_score").text(score);
    $("#quiz_cont").addClass("hide");
    $("#final_screen").removeClass("hide");
}

// Arrays for accessing proper values from the greater Questions Object
var categories = [questionObj.category1, questionObj.category2, questionObj.category3, questionObj.category4, questionObj.category5];
var questionNum = [categories[categoryIndex].questions.question1, categories[categoryIndex].questions.question2, categories[categoryIndex].questions.question3, categories[categoryIndex].questions.question4];

var clickForward = function() {switchScreen(categories[categoryIndex])};



// Starting the Quiz
$("#quiz_btn").on("click", function() {
    $("#main_page").addClass("hide");
    $("#quiz_cont").removeClass("hide");
    clickForward();
    startTimer();
});

// Taking Quiz

// Chooses ans1
var choseAns1 = function() {answerSelect(questionNum[randQuestionNum].answerType[0])};
$("#ans1").on("click", choseAns1);

// Chooses ans2
var choseAns2 = function() {answerSelect(questionNum[randQuestionNum].answerType[1])};
$("#ans2").on("click", choseAns2);

// Chooses ans3
var choseAns3 = function() {answerSelect(questionNum[randQuestionNum].answerType[2])};
$("#ans3").on("click", choseAns3);

// Chooses ans4
var choseAns4 = function() {answerSelect(questionNum[randQuestionNum].answerType[3])};
$("#ans4").on("click", choseAns4);



//CHECK IF NECESSARY
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


var saveScore = function(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log("High Scores in Local Storage before Submission: ");
    console.log(highScores);

    if($("#initials").val() === "") {
        //event.preventDefault();
        console.log("No initials entry!");
        quickMessage("Please enter your initials!");
        return;
    }

    const savedScore = {
        playerScore : score,
        playerInitials : $("#initials").val().substring(0,3)
    }
    console.log("Saved Score:");
    console.log(savedScore);

    highScores.push(savedScore);
    // Sort function will compare scores within the highScores array and return in descending order
    highScores.sort((a, b) =>  b.playerScore - a.playerScore);
    // Keep only the top 5 scores
    highScores.splice(5);
    console.log("High Scores in Local Storage after Submission: ");
    console.log(highScores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    //renderHighScores();
    location.reload();

}

$("#initials_form").on("submit", saveScore);