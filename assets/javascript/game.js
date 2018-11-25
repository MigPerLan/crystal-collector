$(document).ready(function () {

    // setting up variables
    var wins = 0;
    var losses = 0;
    var score = 0;
    var selected = 0;

    var orangeStone;
    var redStone;
    var blueStone;
    var purpleStone;
// ----------------------------Functions-------------------------------------
    // make random number for ai
    function makeNumber() {
        // making random number
        selected = Math.floor((Math.random() * 102)+ 19);
        // put number in div
        $("#thanos").text(selected);
    };

    // make numbers for stones
    function stoneValue() {
        // orangestone
        orangeStone = Math.floor((Math.random() * 8) + 2);
        $("#orange").attr("value", orangeStone);
        //redStone
        redStone = Math.floor((Math.random() * 8) + 2);
        $("#red").attr("value", redStone);
        //blueStone
        blueStone = Math.floor((Math.random() * 8) + 2);
        $("#blue").attr("value", blueStone);
        //purpleStone
        purpleStone = Math.floor((Math.random() * 8) + 2);
        $("#purple").attr("value", purpleStone);
        console.log(orangeStone, redStone, blueStone, purpleStone);
    };
    // reset the score
    function reset() {
        score = 0;
        $("#player").text(score);
    }
    //if you win
    function win() {
        wins++;
        $("#wins").text(wins);
        alert("I hope they remember you...");
        reset();
        makeNumber();
        stoneValue();
    };

    //if you lose
    function lose() {
        losses++;
        $("#losses").text(losses);
        alert("You don't feel so good...");
        reset();
        makeNumber();
        stoneValue();
    };

        // put score on page
    function keepScore(){
       $("#player").text(score);
        console.log(score);
    };

    function winLoss() {
         
        $("#wins").text(wins);
        
        $("#losses").text(losses);
    }; 
function winCon(){
    if (score === selected){
        win();
    }
     else if (score > selected){
        lose();
    };
};



  

    // click
    
        $("#orange").click(function () {
            score += Number($(this).attr("value"));
            keepScore();
            winCon();
        });
    $("#red").click(function(){
        score += Number($(this).attr("value"));
        keepScore();
        winCon();
    });
    $("#blue").click(function(){
        score += Number($(this).attr("value"));
        keepScore();
        winCon();
    });
    $("#purple").click(function(){
        score += Number($(this).attr("value"));
        keepScore();
        winCon();
    });
    
    reset(); 
    stoneValue();
    makeNumber();
    
    
   
});