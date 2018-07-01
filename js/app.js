let app = {
  init: function() {
    // console.log("Application started")
    selectPlayersFrame.style.display = "block"
    creationFrame.style.display = "none"
    playerListFrame.style.display = "none"
    selectTheHero.style.display = "none"
    startRestartFrame.style.display = "none"
    applicationFrame.style.display = 'none'
    endFrame.style.display = 'none'
    validateNumberOfPlayersButton.onclick = function() {
      // console.log(validateNumberOfPlayers())
      let numberOfPlayers = checkRadio('.selectPlayersRadio')
      if (Number(numberOfPlayers) < 1 || Number(numberOfPlayers) > 4) {
        // console.log(numberOfPlayers)
        playersRadioError.innerHTML = "You have to select a number!"
      }
      else {
        showPlayersFrame(numberOfPlayers)
        playersRadioError.innerHTML = ""
      }
    }
    playerCreateButton.onclick = function() {
      createPlayer()
    }
    redefineButton.onclick = function() {
      game.restart()
    }
    startButton.onclick = function() {
      copyList = JSON.parse(JSON.stringify(playerList))
      game.start()
    }
    stopButton.onclick = function() {
      game.restart()
    }
    restartButton.onclick = function() {
      game.restartSameGame()
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
    app.init()
});
