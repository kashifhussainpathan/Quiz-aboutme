
var readlineSync = require('readline-sync');

let score = 0;

var userName = readlineSync.question("What's your name ?");
console.log("Welcome " + userName + " DO YOU KNOW Kashif ?");

var highScore = [
  {
    name: "kashif",
    highscore: 10,
  },
  {
    name: "ruhina",
    highscore: 9,
  },
  {
    name: "tohid",
    highscore: 9,
  },

]
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right!")
    score++;
  }
  else {
    console.log("Wrong");
  }
  console.log("Score: ", score);
}


var questions = [{
  question: "Where do you i live ?",
  answer: "indore"
},
{
  question: "What i love to do the most ?",
  answer: "trading"
},
{
  question: "Who i love the most ?",
  answer: "ruhina"
}];
for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("your total score is:", score);

for (i = 0; i < highScore.length; i++) {
  var scoreof = highScore[i];
  console.log(`${scoreof.name} ${scoreof.highscore}`);
}