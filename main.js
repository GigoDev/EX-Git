'use strict'


let gDiameter = 100


function onBallClick() {
    let elBall = document.querySelector('.ball')

    gDiameter += 50
    elBall.style.height = `${gDiameter}px`
    elBall.style.width = `${gDiameter}px`
}