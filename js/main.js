const daysInput = document.querySelector('#square-input');
const daysRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');


const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');


const ceilings = document.querySelector('input[name = "ceiling"]');
const walls = document.querySelector('input[name = "walls"]');


const basePrice = 5000;
const totalPriceElement = document.querySelector('#total-price');


daysRange.addEventListener('input', function() {
    daysInput.value = daysRange.value;
})

daysInput.addEventListener('input', function() {
    daysRange.value = daysInput.value;
})


function calculate() {

    let totalPrice = basePrice * parseInt(daysInput.value);

    for (const radio of radioType) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const radio of radioBuilding) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }
        
    if(ceilings.checked) {
        totalPrice = totalPrice * parseFloat(ceilings.value);
    }
    if(walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value);
    }




    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

for (const input of inputs) {
    input.addEventListener('input', function() {
        calculate();
    })
}