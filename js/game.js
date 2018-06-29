let game = {
  restart: function() {
    players = null
    playerList = []
    creaturePvs = null
    uncheckRadio('.selectPlayersRadio')
    uncheckRadio('.selectClassRadio')
    emptyList()
    app.init()
  },
  start: function() {
    startRestartFrame.style.display = 'none'
    applicationFrame.style.display = 'block'
    gameFunc.generateCreature()
  }
}
