let game = {
  restart: function() {
    players = null
    playerList = []
    copyList = null
    creatureHp = null
    uncheckRadio('.selectPlayersRadio')
    uncheckRadio('.selectClassRadio')
    emptyList()
    app.init()
  },
  start: function() {
    startRestartFrame.style.display = 'none'
    applicationFrame.style.display = 'block'
    gameFunc.generateCreature()
  },
  loops: function() {
    attackButton.onclick = function() {
      gameFunc.attackCreature()
    }
    healSelfButton.onclick = function() {
      gameFunc.restoreSelfHp()
    }
    healButton.onclick = function() {
      gameFunc.healPlayer()
    }
    gameFunc.checkTurn()
  },
  deletePlayers: function() {
    playerList.splice(turn, 1)
    if (playerList.length > 0) {
      if (!playerList[turn]) {
        turn = 0
      }
      else {
        gameFunc.checkTurn()
      }
    }
    else {
      console.log("You Lose!");
    }
  }
}
