document.querySelectorAll('.part').forEach(part => {
    part.addEventListener('mousedown', startDrag);
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
