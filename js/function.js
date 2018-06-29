checkRadio = function(radioClass) {
  // console.log("Number Validated")
  let recoveredValue = null
  let children = document.querySelectorAll(radioClass)
  for (var i = 0; i < children.length; i++) {
    if (children[i].checked) {
      recoveredValue = children[i].value
    }
  }
  return recoveredValue
}

uncheckRadio = function(radioClass) {
  let children = document.querySelectorAll(radioClass)
  for (var i = 0; i < children.length; i++) {
    if (children[i].checked) {
      children[i].checked = false
    }
  }
}

showPlayersFrame = function(number) {
  // console.log(number)
  players = number
  selectPlayersFrame.style.display = "none"
  creationFrame.style.display = "block"
  playerListFrame.style.display = "block"
}

createPlayer = function() {
  // console.log("Player Creation Button")
  let playerName = null
  let playerClass = null
  let nameTest = creationInput.value.replace(/[^a-zA-Z0-9]/g, '')
  let classTest = checkRadio('.selectClassRadio')
  if (classTest != 'Warrior' && classTest != 'Mage' && classTest != 'Healer') {
    classError.innerHTML = "You have to select a class!"
  }
  else {
    playerClass = classTest
  }
  if (creationInput.value == '' || creationInput.value == null) {
    nameError.innerHTML = "You have to tape something!"
  }
  else {
    if (nameTest == '') {
      nameError.innerHTML = "Space and special characters are not allowed!"
    }
    if (nameTest.length > 15) {
      nameError.innerHTML = "No more than 15 characters are allowed!"
    }
    else {
      playerName = nameTest
    }
  }
  testNameAndClass(playerName, playerClass)
}

testNameAndClass = function(playerName, playerClass) {
  if (playerName != null && playerClass != null) {
    if (playerList.length > 0) {
      let same = false
      playerList.forEach(function(player) {
        if (player.name === playerName) {
          same = true
        }
      })
      if (same) {
        nameError.innerHTML = "This Hero already exists!"
      }
      else {
        addPlayer(playerName, playerClass)
      }
    }
    else {
      addPlayer(playerName, playerClass)
    }
  }
}

addPlayer = function(playerName, playerClass) {
  playerClass = playerClass.toLowerCase()
  playerList.push({
    "name": playerName,
    "heroClass": rpgClasses[playerClass]
  })
  let newPlayer = document.createElement('span')
  newPlayer.innerHTML = playerName
  playerListFrame.appendChild(newPlayer)
  creationInput.value = ""
  nameError.innerHTML = ""
  classError.innerHTML = ""
  checkPlayersLimit()
}

checkPlayersLimit = function() {
  if (players == playerList.length) {
    // console.log("Full")
    creationFrame.style.display = "none"
    startRestartFrame.style.display = "block"
  }
}

emptyList = function() {
  while (playerListFrame.firstChild) {
    playerListFrame.removeChild(playerListFrame.firstChild);
  }
}

let gameFunc = {
  generateCreature: function() {
    console.log('Creating Creature');
  }
}
