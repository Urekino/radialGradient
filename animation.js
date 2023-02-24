
let bor = document.querySelector(".borderClass");
bor.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    bor.style.setProperty('--x', x + 'px');
    bor.style.setProperty('--y', y + 'px');
});
