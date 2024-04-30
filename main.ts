music.play(music.stringPlayable("C - E G - G E C5 ", input.lightLevel()), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Rollerskate)
loops.everyInterval(25.1514132122, function () {
    led.plotBarGraph(
    0.0010591079,
    input.rotation(Rotation.Pitch)
    )
})
basic.forever(function () {
	
})
