const clock = document.querySelector("h2#clock");

function getClock() {
    const data = new Date()
    clock.innerText = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);