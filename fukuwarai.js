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
});

// パーツを置く
function placePart(localX, localY) {
    if (!selectedPart) return;

    selectedPart.style.position = "absolute";

    const w = selectedPart.getBoundingClientRect().width;
    const h = selectedPart.getBoundingClientRect().height;

    selectedPart.style.left = (localX - w / 2) + "px";
    selectedPart.style.top  = (localY - h / 2) + "px";

    selectedPart.style.opacity = 0;
    selectedPart.style.pointerEvents = "none";

    placedCount++;
    if (placedCount === totalParts) revealAll();

    selectedPart = null;
}




// クリックで置く
document.getElementById("hit-area").addEventListener("click", (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // ← hit-area の rect を使う
    const x = e.clientX;
    const y = e.clientY;
    placePart(x, y);
});




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
        p.style.position = "relative"; // ← 置き場に戻す
        p.style.left = "";
        p.style.top = "";
    });
}

window.addEventListener("load", () => {
    parts.forEach(p => {
        p.style.position = "relative";  // ← これが決定打
        p.style.left = "";
        p.style.top = "";
        p.style.opacity = 1;
        p.style.pointerEvents = "auto";
    });
});