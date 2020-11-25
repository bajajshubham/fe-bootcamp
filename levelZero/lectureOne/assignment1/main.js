var read = require('readline-sync');
var name = read.question("what's your name buddy: ");
console.log("\nWelcome "+name+" to DO YOU KNOW ShubhamBajaj ");
score = 0;
function play(question, answer ){
  var userAnswer = read.question(question);
  if(userAnswer === answer){
    console.log("\nRight Answer");
    score++;
  }else{
    console.log("\nWrong Answer");
    
  }
  console.log("Current Score is "+score);
  

}


var question = [{question : "\nI love cofee or tea ? " , answer : "tea"
},{question : "\nMy favourite color (black or blue) ? " , answer : "black"},{question : " \nAm i married ? ", answer : "no"
}];
 for( var i = 0 ; i < question.length ; i++){
   var currentQuestion = question[i];
   play(currentQuestion.question , currentQuestion.answer);
    }
