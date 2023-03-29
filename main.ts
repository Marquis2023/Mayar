let number = 0
let Letter = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("PERCENTAGE")
    number = randint(0, 100)
    if (number < 50) {
        basic.showNumber(number)
        basic.pause(500)
        music.playMelody("E D C D C D C C ", 120)
        basic.showIcon(IconNames.Sad)
    }
    if (number > 50) {
        basic.showNumber(number)
        basic.pause(500)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("INITIAL")
    Letter = randint(1, 26)
    if (Letter == 1) {
        basic.showString("A")
    }
    if (Letter == 2) {
        basic.showString("B")
    }
    if (Letter == 3) {
        basic.showString("C")
    }
    if (Letter == 4) {
        basic.showString("D")
    }
    if (Letter == 5) {
        basic.showString("E")
    }
    if (Letter == 6) {
        basic.showString("F")
    }
    if (Letter == 7) {
        basic.showString("G")
    }
    if (Letter == 8) {
        basic.showString("H")
    }
    if (Letter == 9) {
        basic.showString("I")
    }
    if (Letter == 10) {
        basic.showString("J")
    }
    if (Letter == 11) {
        basic.showString("K ")
    }
    if (Letter == 12) {
        basic.showString("L")
    }
    if (Letter == 13) {
        basic.showString("M")
    }
    if (Letter == 14) {
        basic.showString("N")
    }
    if (Letter == 15) {
        basic.showString("O")
    }
    if (Letter == 16) {
        basic.showString("P")
    }
    if (Letter == 17) {
        basic.showString("Q")
    }
    if (Letter == 18) {
        basic.showString("R")
    }
    if (Letter == 19) {
        basic.showString("S")
    }
    if (Letter == 20) {
        basic.showString("T")
    }
    if (Letter == 21) {
        basic.showString("U")
    }
    if (Letter == 22) {
        basic.showString("V")
    }
    if (Letter == 23) {
        basic.showString("W")
    }
    if (Letter == 24) {
        basic.showString("X")
    }
    if (Letter == 25) {
        basic.showString("Y")
    }
    if (Letter == 26) {
        basic.showString("Z")
    }
})
