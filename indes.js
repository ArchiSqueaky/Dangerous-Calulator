let myMenu = document.getElementById('container');
let myHamburger = document.getElementById('ham');

myHamburger.addEventListener('click', () => {
    myMenu.classList.toggle('show');
})

let myArray = Array.from(document.getElementsByClassName('links'));

myArray.map( links => {
    links.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'Home':
                window.location.href = 'index.html';
                break
            case 'About us':
                window.location.href = 'about-us.html';
                break
            default:
                window.location.href = 'http://127.0.0.1:5500/' + e.target.innerText + '.html';
        }
    })
})