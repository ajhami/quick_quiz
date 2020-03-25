var hsList = document.querySelector("#hs_list");

$(document).ready(function(){
    
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    
    function renderHighScores() {
    
        for(var i = 0; i < highScores.length; i++) {
            var highscore = highScores[i];
            var newLI = document.createElement('li');
            var myText = highscore.playerInitials + " - " + highscore.playerScore;
            console.log(myText);
            newLI.textContent = myText;
            console.log("New Element = " + newLI.textContent);
            
            hsList.appendChild(newLI);
            
        }
        console.log(hsList);
    
    }

    renderHighScores();


    var returnToPage = function(){
        console.log("Is this working?");
        window.location.assign("./../../index.html");
    }

    $("#return_button").on("click", returnToPage);

    var clearHSL = function() {
        window.localStorage.clear();
        location.reload();
        renderHighScores();
    };
    
    $("#clear_scores").on("click", clearHSL);

});


