var canvas;
var gameState=0, contestantCount, database;
var quizz, question, contestant;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

  quizz = new Quiz();
  quizz.getState();
  quizz.start();


}


function draw(){
  background("lightgrey");
  // quizz.display();
  contestant.display();

  if (gameState===1) {
    quizz.play();
  }

  if (contestantCount===4) {
    gameState=1;
  }
  
 
}
