radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setAllMotor(100, 100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 90)
    } else if (receivedNumber == 2) {
        wuKong.setAllMotor(100, 100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 180)
    } else if (receivedNumber == 3) {
        wuKong.setAllMotor(100, 100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 0)
    } else if (receivedNumber == 4) {
        wuKong.setAllMotor(-100, -100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, 90)
    }
})
radio.setGroup(2)
basic.forever(function () {
	
})
