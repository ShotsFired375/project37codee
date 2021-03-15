class Contestant {
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;

        this.button = createButton('submit');
    }

    display() {
        this.button.position(250, 325);

        this.button.mousePressed(()=>{
            // this.title.hide();
            // this.input.hide();
            this.button.hide();

            contestant.name = this.nameIN.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
    
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
            contestantCount = data.val();
        })
    }
      
    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
    }
      
    update() {
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
        });
    }
      
    static getcontestantInfo() {
        var contestantInfoRef = database.ref("contestants");
        contestantInfoRef.on("value", (data)=>{
        allContestants = data.val();
        })
    }
      
    
}