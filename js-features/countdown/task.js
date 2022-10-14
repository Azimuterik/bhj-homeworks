let time1 = document.getElementById("timer");
let diff = 58;
console.log(diff);

function countDown() {
    time1.textContent = `${diff}`;
    diff -= 1;

    if (diff <= 0) {
        clearInterval(timerId);
        alert("Выигрыш");
    }

}

timerId = setInterval(countDown, 1000);


