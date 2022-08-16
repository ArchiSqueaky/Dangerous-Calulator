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
                window.location.href = 'https://holyclient.xyz/';
                break
            case 'About us':
                window.location.href = 'https://holyclient.xyz/About-us';
                break
            default:
                window.location.href = 'https://holyclient.xyz/' + e.target.innerText;
        }
    })
})
