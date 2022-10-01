document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
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
        randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //all move outcomes of the snake
    function moveOutcomes() {

    

    //snake hitting border or itself
        if (
            (currentSnake[0] + width >= (width * width) && direction === width ) || //snake hits BOTTOM
            (currentSnake[0] % width === width -1 && direction === 1 ) || //snake hits RIGHT wall
            (currentSnake[0] % width === 0 && direction === -1 ) || //snake hits LEFT wall
            (currentSnake[0] - width < 0 && direction === -width ) || //snake hits TOP
            squares[currentSnake[0] + direction].classList.contains('snake') //snake hits ITSELF
        ) {
            return clearInterval(interval) //will clear interval if any of the above cases happen
        }

        const tail = currentSnake.pop() //removes last iteration of array and shows it
        squares[tail].classList.remove('snake') //removes class of snake from TAIL
        currentSnake.unshift(currentSnake[0] + direction) //gives direction to the head

    //snake getting apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        randomApple()
        score++
        scoreDisplay.textContent = score
        clearInterval(interval)
        intervalTime = intervalTime * speed
        interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
    }

    //generates new apple once previous is eaten
    function randomApple() {
        do{
            appleIndex = Math.floor(Math.random() * squares.length)
        } while(squares[appleIndex].classList.contains('snake')) //makes sure apple doesn't pop up where snake is
        squares[appleIndex].classList.add('apple')
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
startBtn.addEventListener('click', startGame)
})