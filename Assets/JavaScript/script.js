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
var time = 60;
var randQuestionNum = 0;

// Display Time
$(".timer").text(time);

// My CobWeb
var questionObj = {
    category1 : {
        categoryName : "Category 1",
        questions : {
            question1 : {
                question : "The First Question, Part 1",
                answers : ["answer1.1.1", "answer2.1.1", "answer3.1.1", "answer4.1.1"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "The First Question, Part 2",
                answers : ["answer1.2.1", "answer2.2.1", "answer3.2.1", "answer4.2.1"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "The First Question, Part 3",
                answers : ["answer1.3.1", "answer2.3.1", "answer3.3.1", "answer4.3.1"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "The First Question, Part 4",
                answers : ["answer1.4.1", "answer2.4.1", "answer3.4.1", "answer4.4.1"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category2 : {
        categoryName : "Category 2",
        questions : {
            question1 : {
                question : "The Second Question, Part 1",
                answers : ["answer1.1.2", "answer2.1.2", "answer3.1.2", "answer4.1.2"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "The Second Question, Part 2",
                answers : ["answer1.2.2", "answer2.2.2", "answer3.2.2", "answer4.2.2"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "The Second Question, Part 3",
                answers : ["answer1.3.2", "answer2.3.2", "answer3.3.2", "answer4.3.2"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "The Second Question, Part 4",
                answers : ["answer1.4.2", "answer2.4.2", "answer3.4.2", "answer4.4.2"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category3 : {
        categoryName : "Category 3",
        questions : {
            question1 : {
                question : "The Third Question, Part 1",
                answers : ["answer1.1.3", "answer2.1.3", "answer3.1.3", "answer4.1.3"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "The Third Question, Part 2",
                answers : ["answer1.2.3", "answer2.2.3", "answer3.2.3", "answer4.2.3"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "The Third Question, Part 3",
                answers : ["answer1.3.3", "answer2.3.3", "answer3.3.3", "answer4.3.3"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "The Third Question, Part 4",
                answers : ["answer1.4.3", "answer2.4.3", "answer3.4.3", "answer4.4.3"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category4 : {
        categoryName : "Category 4",
        questions : {
            question1 : {
                question : "The Forth Question, Part 1",
                answers : ["answer1.1.4", "answer2.1.4", "answer3.1.4", "answer4.1.4"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "The Forth Question, Part 2",
                answers : ["answer1.2.4", "answer2.2.4", "answer3.2.4", "answer4.2.4"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "The Forth Question, Part 3",
                answers : ["answer1.3.4", "answer2.3.4", "answer3.3.4", "answer4.3.4"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "The Forth Question, Part 4",
                answers : ["answer1.4.4", "answer2.4.4", "answer3.4.4", "answer4.4.4"],
                answerType : ["Wrong", "Wrong", "Wrong", "Correct"]
            }
        }  
    },
    category5 : {
        categoryName : "Category 5",
        questions : {
            question1 : {
                question : "The Fifth Question, Part 1",
                answers : ["answer1.1.5", "answer2.1.5", "answer3.1.5", "answer4.1.5"],
                answerType : ["Correct", "Wrong", "Wrong", "Wrong"]
            },
            question2 : {
                question : "The Fifth Question, Part 2",
                answers : ["answer1.2.5", "answer2.2.5", "answer3.2.5", "answer4.2.5"],
                answerType : ["Wrong", "Correct", "Wrong", "Wrong"]
            },
            question3 : {
                question : "The Fifth Question, Part 3",
                answers : ["answer1.3.5", "answer2.3.5", "answer3.3.5", "answer4.3.5"],
                answerType : ["Wrong", "Wrong", "Correct", "Wrong"]
            },
            question4 : {
                question : "The Fifth Question, Part 4",
                answers : ["answer1.4.5", "answer2.4.5", "answer3.4.5", "answer4.4.5"],
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

var switchScreen = function(category) {
    randQuestionNum = Math.floor(Math.random() * 4);
    //$("#main_page").addClass("hide");
    //$("#quiz_cont").removeClass("hide");

    // Console Log Tests on Quiz Page
    /*
    $("#category_header").text(category.categoryName);
    console.log(category.questions.question1.question);
    $("#question_p").text(category.questions.question1.question);
    console.log(category.questions.question1.answers[0]);
    $("#ans1").text(category.questions.question1.answers[0]);
    console.log(category.questions.question1.answers[1]);
    $("#ans2").text(category.questions.question1.answers[1]);
    console.log(category.questions.question1.answers[2]);
    $("#ans3").text(category.questions.question1.answers[2]);
    console.log(category.questions.question1.answers[3]);
    $("#ans4").text(category.questions.question1.answers[3]);
    */
   $("#category_header").text(category.categoryName);
   $("#question_p").text(questionNum[randQuestionNum].question);
   $("#ans1").text(questionNum[randQuestionNum].answers[0]);
   $("#ans2").text(questionNum[randQuestionNum].answers[1]);
   $("#ans3").text(questionNum[randQuestionNum].answers[2]);
   $("#ans4").text(questionNum[randQuestionNum].answers[3]);

    //console.log("Current Category Index = " + categoryIndex);
    categoryIndex++;
    //console.log("Category Index switching to " + categoryIndex);
    //randQuestionNum = Math.floor(Math.random() * 4);
    //console.log("Random Number = " + randQuestionNum);
}

var answerSelect = function(userAnswer) {
    console.log("Random Number = " + randQuestionNum);
    console.log("Answer Type Selected = " + userAnswer);

    // if the event selected is correct, score = score + 10
    // else score = score - 5 and time = time - 10
    if(userAnswer === "Correct"){
        score = score + 10;
    }
    else {
        score = score - 5;
        if(time < 11) {
            time = 0;
        }
        else{
            time = time - 10;
        }
    }
    
    console.log("Current Score = " + score);

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