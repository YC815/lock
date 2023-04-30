input.onGesture(Gesture.LogoDown, function () {
    if (pas == 2) {
        pas = 3
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (pas == 0) {
        pas = 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (pas == 3) {
        pas = 0
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . . # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (pas == 1) {
        pas = 2
    }
})
let pas = 0
pas = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (pas == 1) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (pas == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
    if (pas == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
