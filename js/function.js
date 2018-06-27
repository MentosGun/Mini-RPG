validateNumberOfPlayers = function() {
  // console.log("Number Validated")
  let recoveredValue = null
  let children = document.querySelectorAll('.selectPlayersRadio')
  for (var i = 0; i < children.length; i++) {
    if (children[i].checked) {
      recoveredValue = children[i].value
    }
  }
  return recoveredValue
}

showPlayersFrame = function(number) {
  // console.log(number)
  players = number
  selectPlayersFrame.style.display = "none"
  creationFrame.style.display = "block"
}

createPlayer = function() {
  // console.log("Player Creation Button")
  let playerName = null
  let playerClass = null
  if (creationInput.value == '' || creationInput.value == null) {
    console.log("Name isn't valide")
  }
  else {
    playerName = creationInput.value.replace(/[^a-zA-Z0-9]/g, '')
    console.log("Name is valide")
    if (playerName != ) {

    }
  }
}
