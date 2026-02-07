const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const squareSize = 20;
const heart = "❤️";

let heartCount = 0;
const compteurDiv = document.querySelector(".compteur");


const points = [
    { x: 130, y: 250 },   // point 1
    { x: 240, y: 100 }    // point 2
];

const pointImg1 = new Image();
pointImg1.src = "./moi.png";

const pointImg2 = new Image();
pointImg2.src = "./elsa.png";

const background = new Image();
background.src = "./background.webp";

// Liste des cœurs en animation
let hearts = [];

// Dessin complet
function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(pointImg1, points[0].x - 15, points[0].y - 15, 30, 30);
    ctx.drawImage(pointImg2, points[1].x - 15, points[1].y - 15, 30, 30);
}

// Animation en boucle
function animateAllHearts(timestamp) {
    drawCanvas();

    // Dessine tous les cœurs actifs
    hearts = hearts.filter(heart => {
        const elapsed = timestamp - heart.startTime;
        const t = Math.min(elapsed / heart.duration, 1);

        const x = heart.start.x + (heart.end.x - heart.start.x) * t;
        const y = heart.start.y + (heart.end.y - heart.start.y) * t;

        ctx.font = "24px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(heart.char, x, y);

        return t < 1; // garde le cœur s’il n’est pas encore arrivé
    });

    requestAnimationFrame(animateAllHearts);
}

// Démarre un nouveau cœur
function startAnimation() {
    hearts.push({
        start: points[0],
        end: points[1],
        startTime: performance.now(),
        duration: 1000,
        char: heart
    });

    heartCount++;
    compteurDiv.textContent = heartCount;
}

// Quand tout est chargé, on démarre l’animation
let assetsLoaded = 0;
function onAssetLoad() {
    assetsLoaded++;
    if (assetsLoaded === 3) {
        drawCanvas();
        requestAnimationFrame(animateAllHearts);
    }
}

background.onload = onAssetLoad;
pointImg1.onload = onAssetLoad;
pointImg2.onload = onAssetLoad;
