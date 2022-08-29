let hamburgerMenu = document.getElementById('popout');
let hamburgerButton = document.getElementById('hamburger');

hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('show');
    console.log('Hello World');
})
