function convertDhToDollar() {
    let dh = parseFloat(document.querySelector('.dh').value);
    let dollar = document.querySelector('.dollar');

    if (isNaN(dh)) {
        dollar.value = '';
    } else {
        dollar.value = dh / 10;
    }
}

function convertDollarToDh() {
    let dh = document.querySelector('.dh');
    let dollar = parseFloat(document.querySelector('.dollar').value);

    if (isNaN(dollar)) {
        dh.value = '';
    } else {
        dh.value = dollar * 10;
    }
}