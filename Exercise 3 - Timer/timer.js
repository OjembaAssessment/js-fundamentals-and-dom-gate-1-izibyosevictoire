
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
    let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');
    start.addEventListener('click', function() {
        let timerId = setInterval(function() {
            console.log('!')
        }, 1000);
    });














    // const interval = setInterval(() => {
    //     if (count.textContent === '0') {
    //         clearInterval(interval)
    //         document.querySelector('.start').classList.add('hidden')
    //     } else {
    //         count.textContent = parseInt(count.textContent) - 1
    //     }
    // }, 1000)
    // return interval
}