const parts = document.querySelectorAll('.part');

parts.forEach(part => {
    // マウス用
    part.addEventListener('mousedown', startMouseDrag);

    // タッチ用
    part.addEventListener('touchstart', startTouchDrag, { passive: false });
});

function startMouseDrag(e) {
    const part = e.target;
    let offsetX = e.clientX - part.offsetLeft;
    let offsetY = e.clientY - part.offsetTop;

    function onMouseMove(e) {
        part.style.left = (e.clientX - offsetX) + 'px';
        part.style.top = (e.clientY - offsetY) + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function startTouchDrag(e) {
    e.preventDefault(); // スクロール防止

    const part = e.target;
    const touch = e.touches[0];

    let offsetX = touch.clientX - part.offsetLeft;
    let offsetY = touch.clientY - part.offsetTop;

    function onTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        part.style.left = (touch.clientX - offsetX) + 'px';
        part.style.top = (touch.clientY - offsetY) + 'px';
    }

    function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    }

    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
}