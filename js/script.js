//Rock Paper Scissors Game
  
$(".play").click(function () {
  let ranNumber = Math.random();
  let compNumber = Math.ceil(ranNumber * 3);
  let compChoice = compNumber;

  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);

  //Possible responses
  let result1 = "Rock beaten by paper...for whatever reason. You lose!";
  let result2 = "Rock v. rock. It's a tie!";
  let result3 = "Rock crushes scissors. You win!";
  let result4 = "Paper v. paper. It's a tie!";
  let result5 = "Paper beats rock. Sure. You win!";
  let result6 = "Paper sliced by scissors. You lose!";
  let result7 = "Scissors slice paper. You win!";
  let result8 = "Scissors crushed by rock. You lose!";
  let result99 = "Scissors v. scissors. It's a tie!";

  //Computer Choices

  if (compChoice === 1) {
    compChoice = "rock";
    $(".computerChoice").text(compChoice);
  } else if (compChoice === 2) {
    compChoice = "paper";
    $(".computerChoice").text(compChoice);
  } else if (compChoice === 3) {
    compChoice = "scissors";
    $(".computerChoice").text(compChoice);
  }

  //User v. Computer

  if (userChoice === "rock" && compChoice === "paper") {
    $(".resultMessage").text(result1);
  } else if (userChoice === "rock" && compChoice === "rock") {
    $(".resultMessage").text(result2);
  } else if (userChoice === "rock" && compChoice === "scissors") {
    $(".resultMessage").text(result3);
  } else if (userChoice === "paper" && compChoice === "paper") {
    $(".resultMessage").text(result4);
  } else if (userChoice === "paper" && compChoice === "rock") {
    $(".resultMessage").text(result5);
  } else if (userChoice === "paper" && compChoice === "scissors") {
    $(".resultMessage").text(result6);
  } else if (userChoice === "scissors" && compChoice === "paper") {
    $(".resultMessage").text(result7);
  } else if (userChoice === "scissors" && compChoice === "rock") {
    $(".resultMessage").text(result8);
  } else if (userChoice === "scissors" && compChoice === "scissors") {
    $(".resultMessage").text(result99);
  }

});
 
