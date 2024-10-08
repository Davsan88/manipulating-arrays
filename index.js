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
    if (elementInput !== "") {
        array.push(elementInput);
        displayArray(); // Update the display after adding the element
        itemInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a valid item.");
    }  
} 

// Step 5: Implement a function to remove the last element from the array
function removeLastElement() {
    array.pop();
    displayArray(); // Update the display after adding the element
}

// Step 6: Implement a function to remove the first element from the array
function removeFirstElement() {
    array.shift();
    displayArray(); // Update the display after adding the element
}

// Step 7: Implement a function to add an element to the beginning of the array
function addFirstElement() {
    const elementInput = itemInput.value.trim();
    if (elementInput !== "") {
        array.unshift(elementInput);
        displayArray(); // Update the display after adding the element
        itemInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a valid item.")
    }
}

// Step 8: Create a function removeElement(index) that removes an element at a specific index
function removeElement(index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
        displayArray(); // Update the display after adding the element
    } else {
        alert("Please enter a valid index.");
    }
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

// Adding event listeners for the buttons
itemButton.addEventListener('click', addElement);
document.getElementById('removeLastButton').addEventListener('click', removeLastElement);
document.getElementById('removeFirstButton').addEventListener('click', removeFirstElement);
document.getElementById('addFirstButton').addEventListener('click', addFirstElement);
document.getElementById('removeIndexButton').addEventListener('click', () => {
    const index = parseInt(document.getElementById('indexInput').value);
    removeElement(index);
});