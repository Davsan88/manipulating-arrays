// Step 1: Get references to the input field, button, and item list
const itemInput = document.getElementById('itemInput');
const itemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

// Step 2: Initialize the Array
let array = []; // This array will store elements to be manipulated

// Step 3: Implementing Array Methods
// Step 4: Retrieve an element from an input field and add it to the end of the array
function addElement() {
    const elementInput = itemInput.value.trim();
    array.push(elementInput);
} 


