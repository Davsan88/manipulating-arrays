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
    itemInput.value = ''; // Clear the input field
    displayArray();
} 

// Step 5: Implement a function to remove the last element from the array
function removeLastElement() {
    array.pop();
    displayArray();
}

// Step 6: Implement a function to remove the first element from the array
function removeFirstElement() {
    array.shift();
    displayArray();
}

// Step 7: Implement a function to add an element to the beginning of the array
function addFirstElement() {
    array.unshift(element);
    displayArray();
}

// Step 8: Create a function removeElement(index) that removes an element at a specific index
function removeElement(index) {
    array.splice(index, 1);
    displayArray();
}

// Step 9: Write a function that iterates through the array to display each element in the designated HTML area
function displayArray() {
    itemList.innerHTML = ""; // Clear the list
    array.forEach((element, index) => {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = `Element ${index + 1}: ${element}`; // Set the text content to the element value
        itemList.appendChild(listItem);  // Append the list item to the item list
    })
}

itemButton.addEventListener('click', addElement);