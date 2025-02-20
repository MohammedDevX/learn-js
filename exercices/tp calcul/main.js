function Somme() {
    let a = parseInt(document.querySelector('.a').value);
    let b = parseInt(document.querySelector('.b').value);
    let operation = document.querySelector('.operation').value;
    let display = document.querySelector('.display');
    
    console.log(a, b, operation, display);

    if (!isFinite(a) || !isFinite(b)) {
        alert("S'il vous plais entrer des nombres");
        return;
    }

    switch (operation) {
        case '+' : {display.innerHTML = a + b};
        case '-' : {display.innerHTML = a - b};
        case '*' : {display.innerHTML = a * b};
        case '/' : {display.innerHTML = a / b};
    }
}