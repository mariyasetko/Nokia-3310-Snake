document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0 //first div in grid
    let appleIndex = 0
    let currentSnake = [2,1,0] //div in grid being 2 is the HEAD, 0 is the TAIL, all 1s are BODY
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    //start game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        //randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }



    //assign functions to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake') //removing class of snake from squares

        if(e.keyCode === 39) {
            direction = 1 //RIGHT
        } else if (e.keyCode === 38) {
            direction = -width //UP
        } else if (e.keyCode === 37) {
            direction = -1 //LEFT
        } else if (e.keyCode === 40) {
            direction = +width //DOWN
        }   
    }

document.addEventListener('keyup', control)

})