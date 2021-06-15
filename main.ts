input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("" + input.temperature() + "C")
})
basic.forever(function () {
    basic.showString("Bt_A temp:")
})
