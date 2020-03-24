/////////////////
/// script.js ///
/////////////////


/////////////////////
// Pseudocode
//
//
// variables
// score, initials

var score = 0;
var initials = "";
var categoryIndex = 0;
var time = 90;
var randQuestionNum = 0;

// Display Time
//$(".timer").text(time);

// My CobWeb
var questionObj = {
    category1 : {
        categoryName : "Mathematics",
        questions : {
            question1 : {
                question : "Joelle earns her regular pay of $7.50 per hour for up to 40 hours of work in a week. For each hour over 40 hours of work in a week, Joelle is paid 1.5 times her regular pay. How much does Joelle earn for a week in which she works 42 hours?",
                answers : ["$322.50", "126.00", "378.00", "472.50"],
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
                question : "What was the first country to recognize Mexic's independence in 1836?",
                answers : ["United States", "Canada", "Canada", "United Kingdom"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "Of which country was Greenland a colony until 1981?",
                answers : ["Sweden", "Denmark", "Iceland", "Russia"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "Which of the following was not a D-Day beach?",
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

// Functions
// answeredQuestion - attached to eventlistener and adds
// score for correct answer and reduces points / time 
// storeScore - take score and initials and store values
// 
// Event Listeners
//

function startTimer() {
    time = 90;

    var timerInterval = setInterval(function() {
    time--;
    $(".timer").text(time);
    console.log(time);

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
    // else score = score - 5 and time = time - 10
    if(userAnswer === "Correct"){
        quickMessage("Correct!");
        score = score + 10;
    }
    else {
        quickMessage("Wrong");        
        score = score - 5;

        if(time < 11) {
            time = 0;
        }
        else{
            time = time - 10;
        }
    }
    
    // if categoryIndex > 4, then run finalScreen function
    // else run switchScreen(categories[categoryIndex])
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
    $(".timer").text("0");

    // Calculate final score with bonus time
    if(time > 1) {
        score = score + (Math.floor(time / 3));
    }
    time = 0;

    // Hide quiz_cont and unhide final_screen
    $("#quiz_cont").addClass("hide");
    $("#final_screen").removeClass("hide");
    $("#final_score").text(score);
}


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