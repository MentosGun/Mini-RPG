let app = {
  init: function() {
    // console.log("Application started")
    selectPlayersFrame.style.display = "block"
    creationFrame.style.display = "none"
    playerListFrame.style.display = "none"
    startRestartFrame.style.display = "none"
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
    restartButton.onclick = function() {
      players = null
      playerList = []
      uncheckRadio('.selectPlayersRadio')
      uncheckRadio('.selectClassRadio')
      emptyList()
      app.init()
    }
    startButton.onclick = function() {
      game.start()
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
    app.init()
});
