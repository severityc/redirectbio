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
        // Calculate the movement of each raindrop based on the mouse X position
        const direction = (mouseX - drop.offsetLeft) / 100; // Left or right movement
        const dropSpeedY = (mouseY - drop.offsetTop) / 100; // Falling speed (vertical)

        // Apply the calculated movement
        drop.style.transform = `translate(${direction}px, ${dropSpeedY}px)`;
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

// Ensure rain continues to fall even after it's initially created
function animateRain() {
    const drops = document.querySelectorAll('.drop');
    drops.forEach(drop => {
        const speed = parseFloat(drop.style.animationDuration);
        let currentPos = drop.getBoundingClientRect();
        
        // Adjust the drop position continuously to simulate falling and interaction
        if (currentPos.top > window.innerHeight) {
            drop.style.top = '-20px'; // Reset drop to the top once it falls off-screen
            drop.style.left = `${Math.random() * window.innerWidth}px`; // Randomize horizontal position
        } else {
            drop.style.top = `${currentPos.top + speed * 2}px`; // Update vertical position for falling
        }
    });

    requestAnimationFrame(animateRain); // Keep animating the rain
}

animateRain(); // Start the rain animation
