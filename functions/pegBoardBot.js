const holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let filled = []

let die1
let die2

let won = false

let attempts = 0

function rollDice() {
    const sides = 6
    return Math.floor(Math.random() * sides) + 1
}

function matchesAnyCombo(hole) {
    return hole == die1 || hole == die2 || hole == die1 + die2
}

while (!won) {

    attempts++

    console.log("_______ NEW GAME ________")

    // 12 opportunites to roll the dice
    for (let i = 0; i < holes.length; i++) {

        die1 = rollDice()
        die2 = rollDice()

        console.log("die1: " + die1)
        console.log("die2: " + die2)
        // from largest to smallest, try filling in each hole, breaking when successful
        for (let j = holes.length - 1; j > -1; j--) {
            // hole can't be present in filled holes, and some combo of dice must match it
            if (filled.indexOf(holes[j]) == -1 && matchesAnyCombo(holes[j])) {
                console.log("Dice roll matches " + holes[j])
                // add hole number to filled holes
                filled.push(holes[j])
                break
            }
        }

        // if we didn't succeed in filling in a hole, game is over
        if (filled.length !== i + 1) {
            console.log("GAME OVER")
            console.log("You filled in " + filled.length + " holes")

            // reset filled array and break
            filled = []
            break
        }

    }

    if (filled.length == 12) {
        won = true;
        console.log("You won after " + attempts + " attempts");
    }
}

