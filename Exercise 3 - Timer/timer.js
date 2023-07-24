
function add() {
    let A = document.getElementById("timer").innerHTML
    console.log(A)
    document.getElementById("timer").innerHTML = parseInt(A) + 1;
}
function minus() {
    let B = document.getElementById("timer").innerHTML
    document.getElementById("timer").innerHTML = parseInt(B) - 1
}
function reset() {
    document.getElementById("timer").innerHTML = 0
}
function countDown() {
    const count = document.querySelector('#timer')
    const Start = document.querySelector('#start')
    const interval = setInterval(() => {
        if (count.textContent === '0') {
            clearInterval(interval)
           document.getElementById("start").innerHTML= "Stop"
        } else {
            count.textContent = parseInt(count.textContent) - 1
          
        }
    }, 1000)
    return interval
}

