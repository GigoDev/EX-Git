'use strict'


let gDiameter = 100


function onBallClick() {
    let elBall = document.querySelector('.ball')
    if (gDiameter>400) gDiameter =100 

    gDiameter += getRandomInt(20,61)
    elBall.style.height = `${gDiameter}px`
    elBall.style.width = `${gDiameter}px`
    elBall.style.backgroundColor = `${getRandomColor()}`
}