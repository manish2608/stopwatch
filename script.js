const resetButton = document.getElementById('reset');
const playButton = document.getElementById('play');
const lapButton = document.getElementById('lap');
const clearButton = document.getElementById('lap_clear_btn');
const minute = document.getElementById('minute');
const second = document.getElementById('sec');
const centisecond = document.getElementById('msec');
const laps = document.getElementById('laps');

let isPlay = false;
let secCounter = 0;
let sec;
let centiCounter = 0;
let centi;
let minCounter = 0;
let min;
const toggleButton = () => {
    lapButton.classList.remove('hidden');
    resetButton.classList.remove('hidden');
}
const play = () => {

    if (!isPlay) {
        playButton.innerHTML = 'Pause';
        min = setInterval(() => {

            minute.innerText = ++minCounter + ":";
        }, 60 * 1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerText = ++secCounter + ":";
        }, 1000);

        centi = setInterval(() => {
            if (centiCounter === 100) {
                centiCounter = 0;
            }
            centisecond.innerText = centiCounter++;
        }, 10);
        isPlay = true;
    } else {
        playButton.innerHTML = 'Play';
        clearInterval(sec);
        clearInterval(centi);
        clearInterval(min);

        isPlay = false;
    }
    toggleButton();
}
const reset = () => {
    play();
    lapButton.classList.add('hidden');
    resetButton.classList.add('hidden');
    second.innerHTML = "00 :"
    centisecond.innerHTML = "00";
    minCounter.innerHTML = "00 :";
}

const lap = () => {
    const li = document.createElement('li');
    const number = document.createElement('span');
    const time_stamp = document.createElement('span');
    li.setAttribute("class", "lap_item");
    number.setAttribute("class", "number");
    time_stamp.setAttribute("class", "time_stamp");
    time_stamp.innerHTML = minCounter + ":" + secCounter + ":" + centiCounter;
    li.append(number, time_stamp);
    laps.append(li);



}
const clear = () => {
    laps.innerHTML = "";
    laps.append(clearButton);
}
playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);
clearButton.addEventListener('click', clear);