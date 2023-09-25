const menu = document.getElementById('navMenu');
const toggle = document.getElementById('navToggle');
const close = document.getElementById('navClose');

if(toggle) {
    toggle.addEventListener('click', () => {
        menu.classList.add('show');
        toggle.style.display = "none";
        close.style.display = "block";
    });
}

if(close) {
    close.addEventListener('click', () => {
        menu.classList.remove('show');
        toggle.style.display = "block";
        close.style.display = "none";
    });
}