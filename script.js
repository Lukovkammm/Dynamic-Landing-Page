const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const yourName = document.querySelector('.name');
const focus = document.querySelector('.enter_focus');

window.onload = () => {
    setInterval(showTime, 500);
    getName();
    getFocus();
}

function showTime() {
    const date = new Date();
    let hours = date.getHours();
    changeBackground(hours);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    time.innerHTML = `${hours}:${addZero(minutes)}:${addZero(seconds)} ${amPm}`;
}

function addZero(i) {
    return i < 10 ? "0" + i : i;
}

function changeBackground(hours) {
    if (hours < 12) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1420136390439-1482fc2ce4b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')";
        greeting.innerHTML = 'Good Morning, ';
    } else if (hours < 18) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1520220543854-138736ffc914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')";
        greeting.innerHTML = 'Good Afternoon, ';
    } else if (hours < 22) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1527261655500-59c476c630c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')";
        document.body.style.color = 'white';
        greeting.innerHTML = 'Good Evening, ';
    } else {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475198751283-d3f5d231c7f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')";
        document.body.style.color = 'white';
        greeting.innerHTML = 'Good Night, ';
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        yourName.textContent = '[Enter name]';
        yourName.focus();
    } else {
        yourName.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            yourName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

yourName.addEventListener('keypress', setName);
yourName.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);