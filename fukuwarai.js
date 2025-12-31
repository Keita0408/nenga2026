document.querySelectorAll('.part').forEach(part => {
    part.addEventListener('mousedown', startDrag);
    part.addEventListener('touchstart', startDragTouch);
});

function startDrag(e) {
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

function startDragTouch(e) {
    e.preventDefault();

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

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
}