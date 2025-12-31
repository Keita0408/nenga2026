let selectedPart = null;
const gameArea = document.getElementById('game-area');

document.querySelectorAll('.part').forEach(part => {
    part.addEventListener('click', (e) => {
        e.stopPropagation(); // これで画面タップと区別できる
        selectedPart = part;
    });
});

gameArea.addEventListener('click', (e) => {
    if (!selectedPart) return;

    // game-area の位置を取得
    const rect = gameArea.getBoundingClientRect();

    // game-area 内の座標に変換
    const x = e.clientX - rect.left - selectedPart.offsetWidth / 2;
    const y = e.clientY - rect.top - selectedPart.offsetHeight / 2;

    // パーツを移動
    selectedPart.style.left = x + 'px';
    selectedPart.style.top = y + 'px';

    selectedPart = null;
});