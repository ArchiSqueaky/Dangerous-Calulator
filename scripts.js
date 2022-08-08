let myDisplay = document.getElementById('display');

let myButtons = Array.from(document.getElementsByClassName("button") );

myButtons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                myDisplay.innerText = "";
                break
            case '←':
                if (myDisplay.innerText) {
                    myDisplay.innerText = myDisplay.innerText.slice(0, -1);
                }
                break
            case '=':
                try {
                    myDisplay.innerText = eval(myDisplay.innerText);
                } catch {
                    myDisplay.innerHTML = "Error!";
                }
                break
            default:
                if (myDisplay.innerHTML == "Error!") {
                    myDisplay.innerText = e.target.innerText;
                } else {
                    myDisplay.innerText += e.target.innerText;
                }
        }
    })
})

document.body.addEventListener('keyup', (event) => {
    if (event.key === "1") {
        myDisplay.innerText += 1;
    }
    if (event.key === "2") {
        myDisplay.innerText += 2;
    }
    if (event.key === "3") {
        myDisplay.innerText += 3;
    }
    if (event.key === "4") {
        myDisplay.innerText += 4;
    }
    if (event.key === "5") {
        myDisplay.innerText += 5;
    }
    if (event.key === "6") {
        myDisplay.innerText += 6;
    }
    if (event.key === "7") {
        myDisplay.innerText += 7;
    }
    if (event.key === "8") {
        myDisplay.innerText += 8;
    }
    if (event.key === "9") {
        myDisplay.innerText += 9;
    }
    if (event.key === "0") {
        myDisplay.innerText += 0;
    }
    if (event.key === "c") {
        myDisplay.innerText = '';
    }
    if (event.key === "+") {
        myDisplay.innerText += '+';
    }
    if (event.key === "-") {
        myDisplay.innerText += '-';
    }
    if (event.key === ".") {
        myDisplay.innerText += '.';
    }
    if (event.key === "/") {
        myDisplay.innerText += '/';
    }
    if (event.key === "*") {
        myDisplay.innerText += '*';
    }
    if (event.key === "Enter") {
        try {
            myDisplay.innerText = eval(myDisplay.innerText);
        } catch {
            myDisplay.innerHTML = "Error!";
        }
    }
})