// Frame constants
const selectPlayersFrame = document.querySelector('.selectPlayers')
const creationFrame = document.querySelector('.creation')
const playerListFrame = document.querySelector('.playerList')
const startRestartFrame = document.querySelector('.startRestart')
const applicationFrame = document.querySelector('.application')

// Button constants
const validateNumberOfPlayersButton = document.querySelector('#numberOfPlayersConfirm')
const playerCreateButton = document.querySelector('#playerCreate')
const startButton = document.querySelector('#startButton')
const restartButton = document.querySelector('#restartButton')
const stopButton = document.querySelector('#stopButton')

// Other constants
const creationInput = document.querySelector("#creationInput")
const nameError = document.querySelector('#nameError')
const classError = document.querySelector('#classError')
const playersRadioError = document.querySelector('#playersRadioError')

// Creation objects
const creatureSkills = {
  "minPvs": 50,
  "maxPvs": 300,
  "minDamage": 5,
  "maxDamage": 20
}
const rpgClasses = {
  "warrior": {
    "name": "warrior",
    "pvs": 200,
    "damage": 10,
    "attack": true,
    "healSelf": false,
    "heal": false
  },
  "mage": {
    "name": "mage",
    "pvs": 100,
    "damage": 20,
    "attack": true,
    "healSelf": true,
    "heal": false
  },
  "healer": {
    "name": "healer",
    "pvs": 50,
    "damage": 5,
    "attack": true,
    "healSelf": false,
    "heal": true
  }
}
