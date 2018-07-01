// Frame constants
const selectPlayersFrame = document.querySelector('.selectPlayers')
const creationFrame = document.querySelector('.creation')
const playerListFrame = document.querySelector('.playerList')
const startRestartFrame = document.querySelector('.startRestart')
const applicationFrame = document.querySelector('.application')
const actionFrame = document.querySelector('.actionFrame')

// Button constants
const validateNumberOfPlayersButton = document.querySelector('#numberOfPlayersConfirm')
const playerCreateButton = document.querySelector('#playerCreate')
const startButton = document.querySelector('#startButton')
const redefineButton = document.querySelector('#redefineButton')
const stopButton = document.querySelector('#stopButton')
const attackButton = document.querySelector('#attack')
const healSelfButton = document.querySelector('#healSelf')
const healButton = document.querySelector('#heal')

// Other constants
const creationInput = document.querySelector("#creationInput")
const nameError = document.querySelector('#nameError')
const classError = document.querySelector('#classError')
const playersRadioError = document.querySelector('#playersRadioError')
const heroPic = document.querySelector('.heroPic')
const nameOfHero = document.querySelector('.heroName')
const skillsOfHero = document.querySelector('#heroSkills')
const hpLeft = document.querySelector('#hpLeft')
const selectTheHero = document.querySelector('.selectFrame')

// Creation objects
const creatureSkills = {
  "minHp": 50,
  "maxHp": 300,
  "minDamage": 5,
  "maxDamage": 20
}
const rpgClasses = {
  "warrior": {
    "name": "warrior",
    "hp": 200,
    "damage": 10,
    "healSelf": false,
    "heal": false
  },
  "mage": {
    "name": "mage",
    "hp": 100,
    "damage": 20,
    "healSelf": true,
    "heal": false
  },
  "healer": {
    "name": "healer",
    "hp": 50,
    "damage": 5,
    "healSelf": false,
    "heal": true
  }
}
