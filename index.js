document.getElementById('menu').addEventListener('click', () => {
    if (document.getElementById('menu').innerHTML === 'menu') {
        document.getElementById('menu').innerHTML = 'close';
        document.getElementById('mobiledisplay').style.display = 'flex';
    } else {
        document.getElementById('menu').innerHTML = 'menu';
        document.getElementById('mobiledisplay').style.display = 'none';
    }
})