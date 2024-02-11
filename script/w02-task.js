/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */



/* Step 2 - Variables */
const fullName= 'SIAHE GUELABLE CURTIS';

let currentYear='2024';

let ProfilePicture='images/pi2c.jpg';




/* Step 3 - Element Variables */
let nameElement=document.getElementById('name');
let foodElement=document.getElementById('food');
let yearElement=document.querySelector('#year');
var imageElement = document.getElementById("image");









/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', ProfilePicture); // Corrected 'scr' to 'src'
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
var favoriteFoods = ["Pizza", "Ice Cream", "Sushi", "Chocolate", "Burger"];
foodElement.textContent = favoriteFoods.join(', ');

// Declare and instantiate a variable for a new favorite food
var newFavoriteFood = "Pasta";

// Add the new favorite food to the array
favoriteFoods.push(newFavoriteFood);

// Append the updated array values with a line break
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

// Remove the first element in the array
favoriteFoods.shift();