class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
  }
  getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
      gameState = data.val()
    })
  }
  update(state){
  }
}
