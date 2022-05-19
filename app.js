const players = {
    Knight: {
        hp: 100,
        gold: 20,
        lvl: 6,
        emoji: '🤺'
    },
    Wizard: {
        hp: 100,
        gold: 25,
        lvl: 7,
        emoji: '🧙‍♂'
    }
}

let maxhp = 100

const boss = {
    Gooeyboy: {
        hp: maxhp,
        lvl: 1
    }
}

function drawPlayers() {
    let template = ''
    for (const key in players) {
        let player = players[key]
        template += `
        <div class="col-6 bg-secondary col-md-3 m-3 p-3">
        <div class="row">

          <div class="col-12 d-flex justify-content-between">
            <div>${key}</div>
            <h1>${player.emoji}</h1>
          </div>

          <div class="col-12 d-flex justify-content-between">
          <div>HP:</div>
          <div>${player.hp}</div>
        </div>

        <div class="col-12 d-flex justify-content-between">
        <div>GOLD:</div>
        <div>${player.gold}</div>
        </div>

        <div class="col-12 d-flex justify-content-between">
        <div>LVL:</div>
        <div>${player.lvl}</div>
        </div>

        </div>
      </div>
        `
        document.getElementById('players-draw').innerHTML = template
    }
}

function attackBoss() {
    if (boss.Gooeyboy.hp > 0) {
        boss.Gooeyboy.hp -= 5
        updateBoss()
    }
    if (boss.Gooeyboy.hp == 0) {
        maxhp = maxhp * 2
        boss.Gooeyboy.hp = maxhp
    }
}

function updateBoss() {
    let template = ''
    template +=
        `
    <div class="progress-bar" style="width: ${boss.Gooeyboy.hp}%" role="progressbar" aria-valuenow="100" aria-valuemin="0"
    aria-valuemax="100">${boss.Gooeyboy.hp}
  </div>
    `
    document.getElementById('boss-health').innerHTML = template
}

function bossAttack() {
    for (const key in players) {
        let player = players[key]
        if (player.hp > 0) {
            player.hp -= 5
        }
    }
    drawPlayers()
}


function resetGame() {
    for (const key in players) {
        let player = players[key]
        player.hp = 100
        boss.Gooeyboy.hp = 100
    }
    updateBoss()
    drawPlayers()
}



setInterval(bossAttack, 1000)
updateBoss()
drawPlayers()
