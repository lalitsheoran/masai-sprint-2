var count = 0; // initiating counter for sum of random value

function playername1() { //Entering player name//
    var player1 = prompt("Please enter Player name:", "Your Name");
    if (player1 == "" || player1 == "Your Name" || player1 == " ") {
        player1 = "Lazy player" //if player leaves name field empty or doesnt enter name, then he is a lazy player
    } else {
        player1 = player1
    }
    document.getElementById("selectPlayer1").innerHTML = player1;
    return player1

}

function rollDice() {
    var randomNum = Math.floor(Math.random() * (6) + 1); //generating random nuuber for dice
    var tboxes = document.getElementsByTagName("td");
    var diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got : " + randomNum //displaying random number
    var dicepic = document.getElementById("picDice"); // changing dice face according to random number
    if (randomNum == 1) {
        dicepic.setAttribute("src", "resources/1.jpg")
    }
    if (randomNum == 2) {
        dicepic.setAttribute("src", "resources/2.jpg")
    }
    if (randomNum == 3) {
        dicepic.setAttribute("src", "resources/3.jpg")
    }
    if (randomNum == 4) {
        dicepic.setAttribute("src", "resources/4.jpg")
    }
    if (randomNum == 5) {
        dicepic.setAttribute("src", "resources/5.jpg")
    }
    if (randomNum == 6) {
        dicepic.setAttribute("src", "resources/6.jpg")
    }

    var len = tboxes.length;
    count += randomNum; //adding random number to get actual postion on board
    if (count > 100) {
        count = count - randomNum //restricting sum to 100
    }
    if (count == 6) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"
        count = 48
    }
    if (count == 11) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"

        count = 90
    }
    if (count == 19) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"
        count = 39
    }
    if (count == 37) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 13
    }
    if (count == 44) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got a ladder"
        count = 85
    }
    if (count == 52) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 29
    }
    if (count == 61) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 4
    }
    if (count == 89) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by a snake"
        count = 47
    }
    if (count == 99) {
        diceAreaT = document.getElementById("diceAreaText").innerHTML = "You got bitten by the largest snake"
        count = 14
    }
    for (i = 0; i < len; i++) { // showing player location on board
        var tnum = tboxes[i].textContent
        tnum = Number(tnum)
        if (tnum == count) {
            tboxes[i].style.backgroundImage = "url('resources/1piece.png')";
        } else {
            tboxes[i].style.backgroundImage = "url('')"
        }
    }
    if (count == 100) {
        alert("Congratulations, You have won") //alert message after winning
        count = 0; // reseting counter after winning

    }
}