const duck = document.getElementById('duck');
const heartsContainer = document.getElementById('hearts-container');

let duckPosition = 50; // Posizione iniziale della papera (in percentuale)

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && duckPosition > 0) {
        duckPosition -= 5;
    } else if (event.key === 'ArrowRight' && duckPosition < 100) {
        duckPosition += 5;
    }
    duck.style.left = `${duckPosition}%`;
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Rimuove il cuore dopo 5 secondi

    // Controlla se la papera ha beccato il cuore
    const interval = setInterval(() => {
        const duckRect = duck.getBoundingClientRect();
        const heartRect = heart.getBoundingClientRect();

        if (
            heartRect.left < duckRect.right &&
            heartRect.right > duckRect.left &&
            heartRect.bottom > duckRect.top &&
            heartRect.top < duckRect.bottom
        ) {
            heart.remove();
            clearInterval(interval);
            alert('Hai beccato un cuore!');
        }
    }, 100);
}

setInterval(createHeart, 1000); // Crea un nuovo cuore ogni secondo
