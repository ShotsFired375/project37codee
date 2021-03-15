class Quiz {
    constructor(){}

    play() {
        hide();

        background("lightblue");

        stroke("lightgrey");
        fill("lightgrey");
        textSize(72);
        text("results",350, 50);

        getcontestantInfo();

        if (allContestants!==undefined) {
            text("note:if you got it right, your name is in green, if you didn't it's in red", )
        }
        for(var plr in allContestants) {
            var correctAns = "2";
            if (correctAns === allContestants[plr].answer) {
                fill("green");
            }   else {
                fill("red");
            }
        }
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }
    
    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
    
    async start(){
        if (gameState == 0) {
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if (contestantCountRef.exists()) {
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
    
}