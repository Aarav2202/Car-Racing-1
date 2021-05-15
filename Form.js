class Form{
    constructor(){
        this.input= createInput("Name")
        this.button= createButton("Start")
        this.greeting= createGreeting("h3")
    }
    display(){
        title= createElement("h2")
        title.html("Car Racing")
        title.position(150,20)

        this.input.position(150,150)
        this.button.position(200,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name= this.input.value()
            playerCount+= 1
            player.index= playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(150,200)
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}