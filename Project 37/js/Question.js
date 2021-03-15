class Question {
    constructor() {
        this.nameIN = createInput("name");
        this.choiceIN = createInput("choice number");
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
    }
  
    hide() {
        this.nameIN.hide();
        this.choiceIN.hide();
        this.title.hide();
    }
  
    display(){
        this.title.html("the quiz");
        this.title.position(360, 0);

        this.question.html("questionn??");
        this.question.position(150, 60);

        this.option1.html("wrong answer");
        this.option1.position(150, 110);
        this.option2.html("correct answer");
        this.option2.position(150, 140);
        this.option3.html("wrong answer");
        this.option3.position(150, 170);
        this.option4.html("wrong answer");
        this.option4.position(150, 200);
      
        this.nameIN.position(150, 280);
        this.choiceIN.position(350, 280);
  
       
    }

}