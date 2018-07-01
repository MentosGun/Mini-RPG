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
    turn = 0
    startRestartFrame.style.display = 'none'
    applicationFrame.style.display = 'block'
    actionFrame.style.display = "block"
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
      game.loosing()
    }
  },
  winning: function() {
    actionFrame.style.display = "none"
    while (skillsOfHero.firstChild) {
      skillsOfHero.removeChild(skillsOfHero.firstChild);
    }
    hpLeft.innerHTML = 0
    endFrame.style.display = "block"
    endFrameText.innerHTML = youWin
  },
  loosing: function() {
    actionFrame.style.display = "none"
    while (skillsOfHero.firstChild) {
      skillsOfHero.removeChild(skillsOfHero.firstChild);
    }
    if (players > 1) {
      endFrame.style.display = "block"
      endFrameText.innerHTML = youAllLose
    }
    else {
      endFrame.style.display = "block"
      endFrameText.innerHTML = youLose
    }
  },
  restartSameGame: function() {
    endFrame.style.display = "none"
    playerList = JSON.parse(JSON.stringify(copyList))
    game.start()
  }
}
