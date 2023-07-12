const count = document.getElementById('count')
const btnPlus = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
const btnReset = document.getElementById('reset')

function updateCount () {
    // function to update the browser to show the last value
    const storedNum = localStorage.getItem('current')
    if (storedNum) {
        count.innerText = storedNum
    }
}

function increaseCount () {
    // function to increase the counter
    let currentNum = parseInt(count.innerText)
    currentNum++
    count.innerText = currentNum
    localStorage.setItem('current', currentNum)
    // // condition to set maximum count to, 10, for instance
    // if (currentNum > 10) {
    //     count.innerText = 0
    // }
}

function decreaseCount () {
    // function to decrease the counter
    let currentNum = parseInt(count.innerText)
    currentNum--
    count.innerText = currentNum
    localStorage.setItem('current', currentNum)
    // condition to set minimum count to 0
    if (currentNum < 0) {
        count.innerText = 0
    }
}

function resetCount () {
    // function to reset the counter to 0
    count.innerText = 0
}


btnPlus.addEventListener('click', increaseCount)
btnMinus.addEventListener('click', decreaseCount)
btnReset.addEventListener('click', resetCount)
window.addEventListener('load', updateCount)