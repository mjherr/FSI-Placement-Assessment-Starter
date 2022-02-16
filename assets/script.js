// HINT: You can delete this console.log after you no longer need it!

// First, tell us your name
let yourName = "Maria Rios Delgado" // HINT: Replace this with your own name!
// We'll use these variables to track the counts of each cookie type

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const gbPlusBtn = document.querySelector('#add-gb')
const gbQuantity = document.querySelector('#qty-gb')
gbPlusBtn.addEventListener('click', function(e){
    gb = gb + 1
    gbQuantity.textContent = gb;
});

const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(e){
    gb = gb - 1
    gbQuantity.textContent = gb;
});

const ccPlusBtn = document.querySelector('#add-cc')
const ccQuantity = document.querySelector('#qty-cc')
ccPlusBtn.addEventListener('click', function(e){
    cc = cc + 1
    ccQuantity.textContent = cc;
});

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(e){
    cc = cc - 1
    ccQuantity.textContent = cc;
});

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarQuantity = document.querySelector('#qty-sugar')
sugarPlusBtn.addEventListener('click', function(e){
    sugar = sugar + 1
    sugarQuantity.textContent = sugar;
});

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(e){
    sugar = sugar - 1
    sugarQuantity.textContent = sugar;
});
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
//const gbPlusBtn = document.querySelector('#add-gb')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies

// HINT: You can delete this console.log after you no longer need it!
//console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons
