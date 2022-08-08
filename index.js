var myCounter = 0;
let myDisplay = document.getElementById('display');
let one = 1;

let myArray = Array.from(document.getElementsByClassName('operation'));

function getOne() {
    myCounter = myCounter + one;
    myDisplay.innerText = myCounter;
}
function deleteOne() {
    myCounter = myCounter - one;
    myDisplay.innerText = myCounter;
}
function myReset() {
    myDisplay.innerText = 0;
    myCounter = 0;
}
function checkNum() {
    if (myDisplay.innerText <= 0) {
        myDisplay.style.color = "red";
    }
    if (myDisplay.innerText >= 0) {
        myDisplay.style.color = "green";
    }
    if (myDisplay.innerText == 0) {
        myDisplay.style.color = "black";
    }
}
myArray.map( operation => {
    operation.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'INCREASE':
                getOne();
                checkNum();
                break
            case 'DECREASE':
                deleteOne();
                checkNum();
                break
            case 'RESET':
                myReset();
                checkNum();
                break
        }
    })
}) 
