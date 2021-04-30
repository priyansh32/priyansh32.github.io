var typehere = document.getElementById('typewrite');
var data = ["Priyansh Patidar", "Web Developer", "Enthusiast Photographer", "killing it!"];

var temptime = 0;
var gap;
function timercount() {
    var time = temptime + gap;
    temptime = time;
    return time;
}

function diplaytext(i, j) {
    setTimeout(() => {
        typehere.innerHTML = typehere.innerHTML.slice(0, -1);
        typehere.innerHTML += data[i][j] + "|";
    }, timercount())
    return;
}
function deletetext(i, j) {
    setTimeout(() => {
        typehere.innerHTML = typehere.innerHTML.slice(0, -2);
        typehere.innerHTML += "|";
        if (i == (data.length - 1) && j == 0) {
            temptime = 0;
            textloop();
        }
    }, timercount())
}
function textloop() {
    for (let i = 0; i < data.length; i++) {
        gap = 200; //time gap for typing text in miliseconds
        for (let j = 0; j < data[i].length; j++) {
            diplaytext(i, j);
        }
        gap = 800; //stopping time after one element is written in miliseconds
        timercount();
        gap = 50; //set time gap for deleting text in miliseconds
        for (let j = data[i].length - 1; j >= 0; j--) {
            deletetext(i, j);
        }
    }
}
textloop();