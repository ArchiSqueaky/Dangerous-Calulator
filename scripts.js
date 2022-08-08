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
