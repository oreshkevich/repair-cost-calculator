const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');

const typeReconstructionElement= document.querySelectorAll('input[name="type"]');
const typeBuldingElements = document.querySelectorAll('input[name="building"]');
const roomsElements= document.querySelectorAll('input[name="rooms"]');

const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePricePerMeter = 6000;
const totalPriceElement = document.getElementById('total-price');

const inputs = document.querySelectorAll('input');


squareRange.addEventListener('input', function(){ 
    squareInput.value = squareRange.value;

})
squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value;

})

inputs.forEach(function(item) {
   item.addEventListener('input', calculate);

   });
   calculate();
function calculate() {

const square = parseInt(squareInput.value) ;

let typeReconstructionCost;
typeReconstructionElement.forEach(function(item) {
    if (item.checked) {
        typeReconstructionCost = parseFloat(item.value);

    }
    
})


let typeBuldingCost;
typeBuldingElements.forEach(function(item) {
    if (item.checked) {
        typeBuldingCost = parseFloat(item.value);
    }
})

let roomsCost;
roomsElements.forEach(function(item) {
    if (item.checked) {
        roomsCost = parseFloat(item.value);
    }
})
// const ceilingCost = условие ? выполняем если true :выполняем если false
const ceilingCost = ceilings.checked ? parseFloat(ceiling.value) : 1;
const wallsCost = walls.checked ? parseFloat(walls.value) : 1;
const floorCost = floor.checked ? parseFloat(floor.value) : 1;


const totalPrice = basePricePerMeter * square * typeReconstructionCost * typeBuldingCost * roomsCost * ceilingCost *
wallsCost * floorCost;

const formatter = new Intl.NumberFormat('ru');

totalPriceElement.innerText = formatter.format(totalPrice);
}









