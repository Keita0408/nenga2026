let selectedPart = null;
const gameArea = document.getElementById('game-area');
const parts = document.querySelectorAll('.part');
let placedCount = 0;
const totalParts = parts.length;

// パーツ選択
parts.forEach(part => {
    part.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedPart = part;
    });

    part.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        selectedPart = part;
    }, { passive: false });
});

// パーツを置く
function placePart(x, y) {
    if (!selectedPart) return;

    const rect = gameArea.getBoundingClientRect();

    const posX = x - rect.left - selectedPart.offsetWidth / 2;
    const posY = y - rect.top - selectedPart.offsetHeight / 2;

    selectedPart.style.left = posX + 'px';
    selectedPart.style.top = posY + 'px';

    // ゆっくり消える（透明＋当たり判定オフ）
    selectedPart.style.opacity = 0;
    selectedPart.style.pointerEvents = "none";

    placedCount++;

    if (placedCount === totalParts) {
        revealAll();
    }

    selectedPart = null;
}

// PC
gameArea.addEventListener('click', (e) => {
    placePart(e.clientX, e.clientY);
});

// スマホ
gameArea.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    placePart(t.clientX, t.clientY);
}, { passive: false });

// 全部見える
function revealAll() {
    parts.forEach(p => {
        p.style.opacity = 1;
        p.style.pointerEvents = "auto";
    });
}

// リセット
function resetGame() {
    placedCount = 0;

    parts.forEach(p => {
        p.style.opacity = 1;
        p.style.pointerEvents = "auto";
        p.style.left = p.dataset.x + "px";
        p.style.top = p.dataset.y + "px";
    });
}

window.addEventListener("load", () => {
    parts.forEach(p => {
        p.style.left = p.dataset.x + "px";
        p.style.top = p.dataset.y + "px";
    });
});
