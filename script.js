const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const yourName = document.querySelector('.name');
const focus = document.querySelector('.focus');

let localStorageKey = '';

window.onload = () => {
    setInterval(showTime, 1000);
    getItem();
}

function showTime() {
    const date = new Date();
    let hours = date.getHours();
    changeBackground(hours);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    time.textContent = `${hours}:${addZero(minutes)}:${addZero(seconds)} ${amPm}`;
}

function addZero(i) {
    return i < 10 ? "0" + i : i;
}

const content = {
    morning: {
        greeting: 'Good Morning, ',
        image: "url('https://images.unsplash.com/photo-1420136390439-1482fc2ce4b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')",
        color: null,
    },
    afternoon: {
        greeting: 'Good Afternoon, ',
        image: "url('https://images.unsplash.com/photo-1520220543854-138736ffc914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')",
        color: null,
    },
    evening: {
        greeting: 'Good Evening, ',
        image: "url('https://images.unsplash.com/photo-1527261655500-59c476c630c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')",
        color: '#fff',
    },
    night: {
        greeting: 'Good Night, ',
        image: "url('https://images.unsplash.com/photo-1475198751283-d3f5d231c7f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        color: '#fff',
    }
};

function changeBackground(hours) {
    let timeOfDay;
    hours < 12 ? timeOfDay = 'morning' : hours < 18 ? timeOfDay = 'afternoon' : hours < 22 ? timeOfDay = 'evening' : timeOfDay = 'night';
    document.body.style.backgroundImage = content[`${timeOfDay}`]['image'];
    document.body.style.color = content[`${timeOfDay}`]['color'];
    greeting.textContent = content[`${timeOfDay}`]['greeting'];
}

function setItem(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem(`${localStorageKey}`, e.target.value);
            e.target.blur();
        }
    }
}

function getItem() {
    if (localStorage.getItem('name') === null || localStorage.getItem('focus') === null) {
        setItem(localStorageKey);
    } else {
        yourName.value = localStorage.getItem('name');
        focus.value = localStorage.getItem('focus');
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        localStorageKey = e.target.classList.value;
        e.target.addEventListener('keypress', setItem)
        e.target.addEventListener('blur', setItem)
    }
})