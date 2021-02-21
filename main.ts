let time1 = 0
let delta_t = 0
let time2 = 0
let counter = 0
let pulse_out = 0
let PulseDet = 0
basic.showString("PULS__")
radio.setGroup(20)
basic.forever(function () {
    serial.writeValue("Pulse diagram", PulseDet)
})
basic.forever(function () {
    basic.showNumber(pulse_out)
    basic.showIcon(IconNames.Heart)
    radio.sendNumber(pulse_out)
})
basic.forever(function () {
    if (PulseDet > 800 && counter == 0) {
        time2 = input.runningTime()
        delta_t = time2 - time1
        time1 = time2
        counter = 1
        pulse_out = (60000 - 60000 % delta_t) / delta_t
        basic.pause(1000)
    } else if (PulseDet <= 350 && counter == 1) {
        counter = 0
    }
})
basic.forever(function () {
    PulseDet = pins.analogReadPin(AnalogPin.P2)
})
