document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll('.grid div')
    cosnt scoreDisplay = document.querySelector('span')
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

    //assign functions to keycodes
})