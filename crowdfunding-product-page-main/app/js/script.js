const body = document.querySelector('body');
const crowdlogo = document.getElementsByClassName('crowdfundlogo')[0];
const hamburger = document.getElementsByClassName('hamburger')[0];
const overlays = document.getElementsByClassName('overlay');
const gotit = document.getElementsByClassName('gotit')[0];
const bookmark = document.getElementsByClassName('bookmark')[0]
// overlay[0] = mobilemenu
// overlay[1] = thanks for suppport box
//overlay[2]= back project overlay
overlays[0].style.zIndex = '2';
function togglemenu() {
    if (overlays[0].style.visibility == 'hidden') {
        overlays[0].style.visibility = 'visible';
        hamburger.src = ".\\images\\icon-close-menu.svg"
        body.classList.add('noscroll');
    }
    else {
        overlays[0].style.visibility = 'hidden';
        hamburger.src = ".\\images\\icon-hamburger.svg"
        body.classList.remove('noscroll');
    }
}
function togglesupportbox() {
    overlays[1].style.visibility = 'visible';
    body.classList.add('noscroll');
}

function closesupportbox() {
    overlays[1].style.visibility = 'hidden';
    body.classList.remove('noscroll');
}
function togglebackprojectoverlay() {
    overlays[2].style.visibility = 'visible';
}
function closebackprojectoverlay() {
    overlays[2].style.visibility = 'hidden';
}
function togglebookmark() {
    if (bookmark.lastElementChild.innerHTML == "Bookmark") {
        bookmark.lastElementChild.innerHTML = "Bookmarked"
        bookmark.getElementsByTagName('path')[0].style.fill = "#fff"
        bookmark.getElementsByTagName('circle')[0].style.fill = "#147b74"
    }
    else {
        bookmark.lastElementChild.innerHTML = "Bookmark"
        bookmark.getElementsByTagName('path')[0].style.fill = "#B1B1B1"
        bookmark.getElementsByTagName('circle')[0].style.fill = "#2F2F2F"
    }
}