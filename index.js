let hamburgerMenu = document.getElementById('popout');
let hamburgerButton = document.getElementById('hamburger');

hamburgerButton.addEventListener('click', () => {
    if (hamburgerButton.innerHTML === 'menu') {
        hamburgerButton.innerHTML = 'close';
        hamburgerMenu.className = 'show';
    } else {
        hamburgerButton.innerHTML = 'menu';
        hamburgerMenu.className = '';
    }
})