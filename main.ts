let 鍵盤 = 0
music.setBuiltInSpeakerEnabled(false)
pins.setAudioPin(AnalogPin.P0)
basic.clearScreen()
basic.forever(function () {
    鍵盤 = pins.analogReadPin(AnalogPin.P2)
    if (鍵盤 < 60) {
        music.stopAllSounds()
    } else if (鍵盤 < 120) {
        music.ringTone(262)
    } else if (鍵盤 < 180) {
        music.ringTone(294)
    } else if (鍵盤 < 240) {
        music.ringTone(330)
    } else if (鍵盤 < 300) {
        music.ringTone(349)
    } else if (鍵盤 < 360) {
        music.ringTone(392)
    } else if (鍵盤 < 420) {
        music.ringTone(440)
    } else if (鍵盤 < 480) {
        music.ringTone(494)
    } else if (鍵盤 < 540) {
        music.ringTone(523)
    } else if (鍵盤 < 600) {
        music.ringTone(587)
    } else if (鍵盤 < 660) {
        music.ringTone(659)
    } else if (鍵盤 < 720) {
        music.ringTone(698)
    } else if (鍵盤 < 780) {
        music.ringTone(784)
    } else if (鍵盤 < 840) {
        music.ringTone(880)
    } else if (鍵盤 < 900) {
        music.ringTone(988)
    } else if (鍵盤 < 960) {
        music.ringTone(1046.50)
    } else {
        music.stopAllSounds()
    }
})
