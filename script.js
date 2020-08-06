var dice1;
var dice2;

function rollDice() {
  dice1 = Math.floor(Math.random() * 6 + 1);
  dice2 = Math.floor(Math.random() * 6 + 1);

  emptyDice();
  updateDice1(dice1);
  updateDice2(dice2);
  announceWinner(dice1, dice2);
}


function updateDice1(dice1) {
  switch (dice1) {
    case 1:
      draw1("a");
      break;
    case 2:
      draw2("a");
      break;
    case 3:
      draw3("a");
      break;
    case 4:
      draw4("a");
      break;
    case 5:
      draw5("a");
      break;
    case 6:
      draw6("a");
      break;
    default:
      alert("I don't know such values");
  }
}

function updateDice2(dice2) {
  switch (dice2) {
    case 1:
      draw1("b");
      break;
    case 2:
      draw2("b");
      break;
    case 3:
      draw3("b");
      break;
    case 4:
      draw4("b");
      break;
    case 5:
      draw5("b");
      break;
    case 6:
      draw6("b");
      break;
    default:
      alert("I don't know such values");
  }
}

function announceWinner(d1, d2){
    var winner = document.getElementById("winner");
    if(d1 > d2){
      winner.innerText = "Player 1 Wins";
    }else if(d2 > d1){
      winner.innerText = "Player 2 Wins";
    }else{
      winner.innerText = "Draw";
    }
}


function draw1(alfa) {
  document.querySelector("." + alfa + "5").style.opacity = "1";
}

function draw2(alfa) {
  document.querySelector("." + alfa + "3").style.opacity = "1";
  document.querySelector("." + alfa + "7").style.opacity = "1";
}

function draw3(alfa) {
  document.querySelector("." + alfa + "3").style.opacity = "1";
  document.querySelector("." + alfa + "5").style.opacity = "1";
  document.querySelector("." + alfa + "7").style.opacity = "1";
}

function draw4(alfa) {
  document.querySelector("." + alfa + "1").style.opacity = "1";
  document.querySelector("." + alfa + "3").style.opacity = "1";
  document.querySelector("." + alfa + "7").style.opacity = "1";
  document.querySelector("." + alfa + "9").style.opacity = "1";
}

function draw5(alfa) {
  document.querySelector("." + alfa + "1").style.opacity = "1";
  document.querySelector("." + alfa + "3").style.opacity = "1";
  document.querySelector("." + alfa + "5").style.opacity = "1";
  document.querySelector("." + alfa + "7").style.opacity = "1";
  document.querySelector("." + alfa + "9").style.opacity = "1";
}

function draw6(alfa) {
  document.querySelector("." + alfa + "1").style.opacity = "1";
  document.querySelector("." + alfa + "3").style.opacity = "1";
  document.querySelector("." + alfa + "4").style.opacity = "1";
  document.querySelector("." + alfa + "6").style.opacity = "1";
  document.querySelector("." + alfa + "7").style.opacity = "1";
  document.querySelector("." + alfa + "9").style.opacity = "1";
}

function emptyDice() {
  var allDots = document.querySelectorAll(".dice-dots");
  for (i = 0; i < allDots.length; i++) {
    allDots[i].style.opacity = "0";
  }
}


function sayHello() {
  alert("Hello!");
}
