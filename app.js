document.getElementById('phone-plus').addEventListener('click', function () {
    inputCounter('phone', 1219, true);
});


document.getElementById('phone-minus').addEventListener('click', function () {
    inputCounter('phone', 1219, false);
});


document.getElementById('case-plus').addEventListener('click', function () {
    inputCounter('case', 59, true);
});


document.getElementById('case-minus').addEventListener('click', function () {
    inputCounter('case', 59, false);
});

function inputCounter(product, price, isPlus) {
    const inputElement = document.getElementById(product + '-counter');
    if (isPlus == true) {
        const newInput = parseInt(inputElement.value) + 1;
        inputElement.value = newInput;
    }
    else if (isPlus == false) {
        if (inputElement.value > 0) {
            const newInput = parseInt(inputElement.value) - 1;
            inputElement.value = newInput;
        }
    }
    const priceElement = document.getElementById(product + '-price');
    priceElement.innerText = inputElement.value * price;
    totalCalculation();
}

function getInputNumber(product) {
    const productElement = document.getElementById(product + '-counter');
    const productCount = parseInt(productElement.value);
    return productCount;
}

function totalCalculation() {
    const phone = getInputNumber('phone');
    const caseCount = getInputNumber('case');
    const phonePrice = phone * 1219;
    const casePrice = caseCount * 59;
    const subTotal = phonePrice + casePrice;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = subTotal;
    const tax = document.getElementById('tax').innerText = subTotal / 10;
    document.getElementById('total').innerText = subTotal + tax;
}