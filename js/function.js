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
    "heroClass": Object.assign({}, rpgClasses[playerClass]),
    "dead": false
  })
  let newPlayer = document.createElement('span')
  newPlayer.className = 'singlePlayer'
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
    let hp = gameFunc.generateNumber(creatureSkills.minHp, creatureSkills.maxHp)
    creatureHp = hp
    game.loops()
  },
  generateNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  checkTurn: function() {
    while (skillsOfHero.firstChild) {
      skillsOfHero.removeChild(skillsOfHero.firstChild);
    }
    let playerHero = playerList[turn].heroClass
    if (playerHero.hp > 0) {
      gameFunc.insertSkills(playerHero.name, playerHero.hp)
    }
    else {
      game.deletePlayers()
    }
  },
  insertSkills: function(typeClass, heroHp) {
    heroPic.setAttribute("src", "img/" + typeClass + ".png")
    nameOfHero.innerHTML = playerList[turn].name
    let playerType = document.createElement('li')
    let playerHP = document.createElement('li')
    playerType.innerHTML = "Class : " + typeClass.charAt(0).toUpperCase() + typeClass.substring(1).toLowerCase()
    playerHP.innerHTML = "HP : " + heroHp
    skillsOfHero.appendChild(playerType).appendChild(playerHP)
    hpLeft.innerHTML = creatureHp
  },
  attackCreature: function() {
    let strength = playerList[turn].heroClass.damage
    creatureHp -= strength
    if (creatureHp > 0) {
      gameFunc.creatureHit()
      gameFunc.changePlayer()
    }
    else {
      creatureHp = 0
      console.log("You Win");
    }
  },
  restoreSelfHp: function() {
    playerList[turn].heroClass.hp += 5
    gameFunc.creatureHit()
    gameFunc.changePlayer()
  },
  healPlayer: function() {
    gameFunc.selectPlayerToHeal()
  },
  changePlayer: function() {
    if (turn >= playerList.length - 1) {
      turn = 0
      gameFunc.checkTurn()
    }
    else {
      turn++
      gameFunc.checkTurn()
    }
  },
  creatureHit: function() {
    let hit = gameFunc.generateNumber(creatureSkills.minDamage, creatureSkills.maxDamage)
    playerList[turn].heroClass.hp -= hit
  },
  selectPlayerToHeal: function() {
    actionFrame.style.display = "none"
    selectTheHero.style.display = "block"
    let children = document.querySelectorAll('.singlePlayer')
    for (var i = 0; i < children.length; i++) {
      children[i].style.cursor = "pointer"
      children[i].onclick = function(children, i) {
        gameFunc.healTheHero(this.textContent);
      }
    }
  },
  healTheHero: function(heroName) {
    let hero = playerList.find(function(element) {
      return element.name === heroName;
    })
    hero.heroClass.hp += 30
    gameFunc.creatureHit()
    gameFunc.changePlayer()
    actionFrame.style.display = "block"
    selectTheHero.style.display = "none"
  }
}
