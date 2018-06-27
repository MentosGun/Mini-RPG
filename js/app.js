let app = {
  init: function() {
    // console.log("Application started")
    selectPlayersFrame.style.display = "block"
    creationFrame.style.display = "none"
    playerListFrame.style.display = "none"
    startRestartFrame.style.display = "none"
    validateNumberOfPlayersButton.onclick = function() {
      // console.log(validateNumberOfPlayers())
      let numberOfPlayers = validateNumberOfPlayers()
      if (Number(numberOfPlayers) >= 1 && Number(numberOfPlayers) <= 4) {
        // console.log(numberOfPlayers)
        showPlayersFrame(numberOfPlayers)
      }
      else {
        throw new Error('Between 1 and 4 players only')
      }
    }
    playerCreateButton.onclick = function() {
      createPlayer()
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
    app.init()
});
