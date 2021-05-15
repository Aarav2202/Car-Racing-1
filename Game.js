class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState= data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state 
        })
    }

   async start(){
        if (gameState === 0) {
            player= new Player()
            var playerCountRef= await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val()
                player.getCount()
            }
            form= new Form()
            form.display()
        }

    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        textSize(30);
        text("Game Started",150,100);

        if(allPlayers !== undefined) {


        }

        if(keyIsDown(UP_ARROW) && player.index!== null){
            player.distance += 50
            player.update
        }
    }
}