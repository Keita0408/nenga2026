let selectedPart = null;
const gameArea = document.getElementById('game-area');

// パーツをタップして選択
document.querySelectorAll('.part').forEach(part => {
    part.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedPart = part;
    });

    part.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        selectedPart = part;
    }, { passive: false });
});

// ゲームエリアをタップしたら移動
function movePart(x, y) {
    if (!selectedPart) return;

    const rect = gameArea.getBoundingClientRect();

    const posX = x - rect.left - selectedPart.offsetWidth / 2;
    const posY = y - rect.top - selectedPart.offsetHeight / 2;

    selectedPart.style.left = posX + 'px';
    selectedPart.style.top = posY + 'px';

    selectedPart = null;
}

// PC用クリック
gameArea.addEventListener('click', (e) => {
    movePart(e.clientX, e.clientY);
});

// スマホ用タップ
gameArea.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    movePart(touch.clientX, touch.clientY);
}, { passive: false });