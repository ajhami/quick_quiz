/////////////////////
/// highscores.js ///
/////////////////////

var hsList = document.querySelector("#hs_list");

$(document).ready(function(){
    
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    
    function renderHighScores() {
    
        for(var i = 0; i < highScores.length; i++) {
            var highscore = highScores[i];
            var newLI = document.createElement('li');
            var myText = highscore.playerInitials + " - " + highscore.playerScore;
            newLI.textContent = myText;
            newLI.setAttribute("class", "hs_style");
            hsList.appendChild(newLI);
            
        }
        console.log(hsList);
    
    }

    renderHighScores();


    var returnToPage = function(){
        window.location.assign("./../../index.html");
    }

    $("#return_button").on("click", returnToPage);

    var clearHSL = function() {
        window.localStorage.clear();
        renderHighScores();
        location.reload();
    };
    
    $("#clear_scores").on("click", clearHSL);

});


