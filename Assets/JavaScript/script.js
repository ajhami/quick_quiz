/////////////////
/// script.js ///
/////////////////


/////////////////////
// Pseudocode
//
//
// variables
// score, initials
// maybe questions
//      Idea
//          var questions = {
//                              question : {
//                                             answer : wrong,
//                                             answer : correct,
//                                             answer : wrong,
//                                             answer : wrong
//                                         }
//                              question : {
//                                             answer : wrong,
//                                             answer : correct,
//                                             answer : wrong,
//                                             answer : wrong
//                                         }
//                          }
//
// Check activity 5.19 cobweb!!
//
// Functions
// answeredQuestion - attached to eventlistener and adds
// score for correct answer and reduces points / time 
// storeScore - take score and initials and store values
// 
// Event Listeners
//

var switchScreen = function() {
    $("#main_page").addClass("hide");
    $("#quiz_cont").removeClass("hide");
}

$("#quiz_btn").on("click", switchScreen);

