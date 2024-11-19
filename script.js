const menuDatabase = [
  ['Papadum', 20, 'vegetarian'],
  ['Pakora', 50, 'meat'],
  ['Tandoori Chicken', 60, 'meat'],
  ['Samosa', 50, 'vegetarian'],
  ['Butter Chicken', 139, 'meat'],
  ['Chicken Korma', 129, 'meat'],
  ['Chicken Vindaloo', 149, 'meat'],
  ['Saag Lamb', 130, 'meat'],
  ['Lam Tikka Masala', 159, 'meat'],
  ['Yellow Daal Tadka', 119, 'vegetarian'],
  ['Biryani', 129, 'vegetarian'],
  ['Gulab Jamun', 55, 'dessert'],
  ['Mango Kulfi', 35, 'dessert'],
  ['Rasmalai', 60, 'dessert'],
];

// Task 1: Remove the last menu item and save it in a variable
const removedMenuItem = menuDatabase.pop();
console.log("Removed Menu Item:", removedMenuItem);

// Task 2: Create a new array with all menu prices increased by 10%
const increasedMenuDatabase = menuDatabase.map(item => [item[0], item[1] * 1.10, item[2]]);
console.log("Increased Menu Database:", increasedMenuDatabase); 



// Task 3: Count the number of vegetarian dishes
const amountVegetarianDishes = menuDatabase.filter(item => item[2] === 'vegetarian').length;
console.log("Amount of Vegetarian Dishes:", amountVegetarianDishes);

// Task 4: Calculate the total value of all meat dishes using reduce
const totalAmountMeatDishes = menuDatabase
  .filter(item => item[2] === 'meat')
  .reduce((total, item) => total + item[1], 0);
console.log("Total Amount of Meat Dishes:", totalAmountMeatDishes);


// check
for (initialization; CSSConditionRule; finalExpression)
{
  

const onlineShops = ["MakeUp", "Prom", "Rozetka"];


console.log(onlineShops[i]); 
}





// create an array containing 3 different online shop s names
// loop through that array using a for loop and console.log the name of the shop

// Array containing 3 different online shop names

const menuDatabase = [
  ["Papadum", 20, "vegetarian", "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg"],
  ["Pakora", 50, "meat", "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg"],
  ["Tandoori Chicken", 60, "meat", "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg"],
  ["Samosa", 50, "vegetarian", "https://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg"],
];

const menuContainer = document.getElementById("menuContainer");

menuDatabase.forEach(item => {
  const [name, price, type, imageUrl] = item;

  // Create a new div for each menu item
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  // Add the image
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = name;
  menuItem.appendChild(img);

  // Add the name
  const itemName = document.createElement("h3");
  itemName.textContent = name;
  menuItem.appendChild(itemName);

  // Add the price
  const itemPrice = document.createElement("p");
  itemPrice.textContent = `Price: $${price}`;
  menuItem.appendChild(itemPrice);

  // Add the type
  const itemType = document.createElement("p");
  itemType.textContent = `Type: ${type}`;
  menuItem.appendChild(itemType);

  // Append the menu item to the container
  menuContainer.appendChild(menuItem);
});



const menuDatabase = [
  ["Papadum", 20, "vegetarian"],
  ["Pakora", 50, "meat"],
  ["Tandoori Chicken", 60, "meat"],
  ["Samosa", 50, "vegetarian"],
  ["Butter Chicken", 139, "meat"],
  ["Chicken Korma", 129, "meat"],
  ["Chicken Vindaloo", 149, "meat"],
  ["Saag Lamb", 130, "meat"],
  ["Lam Tikka Masala", 159, "meat"],
  ["Yellow Daal Tadka", 119, "vegetarian"],
  ["Biryani", 129, "vegetarian"],
  ["Gulab Jamun", 55, "dessert"],
  ["Mango Kulfi", 35, "dessert"],
  ["Rasmalai", 60, "dessert"],
];

const menuDatabase = [
  ["Papadum", 20, "vegetarian"],
  ["Pakora", 50, "meat"],
  ["Tandoori Chicken", 60, "meat"],
  ["Samosa", 50, "vegetarian"],
  ["Butter Chicken", 139, "meat"],
  ["Chicken Korma", 129, "meat"],
  ["Chicken Vindaloo", 149, "meat"],
  ["Saag Lamb", 130, "meat"],
  ["Lam Tikka Masala", 159, "meat"],
  ["Yellow Daal Tadka", 119, "vegetarian"],
  ["Biryani", 129, "vegetarian"],
  ["Gulab Jamun", 55, "dessert"],
  ["Mango Kulfi", 35, "dessert"],
  [
    "Rasmalai", 
    60, 
    "dessert", 
    {
      logDetails() {
        console.log(`Dish: Rasmalai, Price: 60, Type: dessert`);
      }
    }
  ],
];

// Calling the logDetails method for Rasmalai
menuDatabase[13][3].logDetails();
