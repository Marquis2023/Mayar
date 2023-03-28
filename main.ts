let number = 0
let Letter = 0
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
    if (Letter == 1) {
        basic.showString("B")
    }
    if (Letter == 1) {
        basic.showString("C")
    }
    if (Letter == 1) {
        basic.showString("D")
    }
    if (Letter == 1) {
        basic.showString("E")
    }
    if (Letter == 1) {
        basic.showString("F")
    }
    if (Letter == 1) {
        basic.showString("G")
    }
    if (Letter == 1) {
        basic.showString("H")
    }
    if (Letter == 1) {
        basic.showString("I")
    }
    if (Letter == 1) {
        basic.showString("J")
    }
    if (Letter == 1) {
        basic.showString("K ")
    }
    if (Letter == 1) {
        basic.showString("L")
    }
    if (Letter == 1) {
        basic.showString("M")
    }
    if (Letter == 1) {
        basic.showString("N")
    }
    if (Letter == 1) {
        basic.showString("O")
    }
    if (Letter == 1) {
        basic.showString("P")
    }
    if (Letter == 1) {
        basic.showString("Q")
    }
    if (Letter == 1) {
        basic.showString("R")
    }
    if (Letter == 1) {
        basic.showString("S")
    }
    if (Letter == 1) {
        basic.showString("T")
    }
    if (Letter == 1) {
        basic.showString("U")
        if (Letter == 1) {
            basic.showString("V")
            if (Letter == 1) {
                basic.showString("W")
            }
            if (Letter == 1) {
                basic.showString("X")
            }
            if (Letter == 1) {
                basic.showString("Y")
            }
            if (Letter == 1) {
                basic.showString("Z")
            }
        }
    }
})
