input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    definir_tempo = 10
    for (let index = 0; index < 10; index++) {
        definir_tempo += -1
        basic.showNumber(definir_tempo)
        basic.pause(100)
    }
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("A D F B G E B F ", 120), music.PlaybackMode.UntilDone)
})
let definir_tempo = 0
basic.showNumber(10)
definir_tempo = 10
