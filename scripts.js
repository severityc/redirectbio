// Blood Rain Effect
const rainContainer = document.querySelector('.rain');
const numberOfDrops = 100;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

function createRain() {
    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.width = `${Math.random() * 10 + 5}px`;
        drop.style.height = `${Math.random() * 20 + 10}px`;
        drop.style.left = `${Math.random() * window.innerWidth}px`;
        drop.style.animationDuration = `${Math.random() * 2 + 3}s`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        rainContainer.appendChild(drop);
    }
}

function moveRain(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const drops = document.querySelectorAll('.drop');
    drops.forEach(drop => {
        const dropSpeedX = (mouseX - drop.offsetLeft) / 100;
        const dropSpeedY = (mouseY - drop.offsetTop) / 100;
        drop.style.transform = `translate(${dropSpeedX}px, ${dropSpeedY}px)`;
    });
}

// Typing and Deleting Effect for the Title
const titleElement = document.querySelector('.title');
const text = "Severity's BIO";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index <= text.length) {
        titleElement.textContent = text.substring(0, index);
        index++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && index >= 0) {
        titleElement.textContent = text.substring(0, index);
        index--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 500);
    }
}

// Countdown Logic for wait.html
let countdown = 3;
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = "https://guns.lol/hooked/";
    }
}, 1000);

createRain();
typeEffect();
window.addEventListener('mousemove', moveRain);
