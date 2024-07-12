function playSound(audio) {
    audio.currentTime = 0
    audio.volume = 1.0;
    audio.play()
}

function stopSound(audio) {
    audio.currentTime = 0
    audio.pause()
}

function createBall() {
    let balls = document.querySelector('#bolinha')
    balls.innerHTML = result
}

function calc(min, max) {
    result = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min)

}

function sortear() {
    let min = ((document.querySelector('#min').value))
    let max = (document.querySelector('#max').value)
    let final = document.querySelector('#resultado')
    let errorSound2 = document.querySelector('#error2')
    let errorSound = document.querySelector('#error')
    let sound = document.querySelector('#sound')

    if (min === "" || max === "") {
        stopSound(errorSound)
        stopSound(sound)
        playSound(errorSound2)
        final.innerHTML = "Nenhum dos campos deve estar vazio"
        balls = document.querySelector('#bolinha').setAttribute('style', 'visibility:hidden')
        erro = document.querySelector('#erro').setAttribute('style', 'visibility:hidden')
    } else if (min === max && min != "") {
        stopSound(errorSound)
        stopSound(sound)
        final.innerHTML = "Os dois valores não podem ser iguais "
        playSound(errorSound2)
        balls = document.querySelector('#bolinha').setAttribute('style', 'visibility:hidden')
        erro = document.querySelector('#erro').setAttribute('style', 'visibility:hidden')
    } else if (min * 10 > max * 10) {
        stopSound(errorSound2)
        stopSound(sound)
        final.innerHTML = "O valor mínimo não pode ser maior que o valor máximo..."
        playSound(errorSound)
        balls = document.querySelector('#bolinha').setAttribute('style', 'visibility:hidden')
        erro = document.querySelector('#erro').setAttribute('style', 'visibility:visible')
    } else {
        stopSound(errorSound)
        erro = document.querySelector('#erro').setAttribute('style', 'visibility:hidden')
        calc(min, max)
        playSound(sound)
        createBall()
        final.innerHTML = "O número sorteado foi: "
        balls = document.querySelector('#bolinha').setAttribute('style', 'visibility:visible')
    }

}