/////////////////
/// script.js ///
/////////////////

var i = 0;
var myColors = ["#0000ff", "#8a2be8", "#7fff00"];
var clickTitle = document.getElementById("clickTitle");


clickTitle.addEventListener("click", changeColor);

function changeColor() {
    i = (i + 1) % 3;
    console.log("i = " + i);
    console.log("color code = " + myColors[i]);
    document.body.style.backgroundColor = myColors[i];
}


/*
#0000ff
#8a2be8
#7fff00
*/