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
if


// Task 3: Count the number of vegetarian dishes
const amountVegetarianDishes = menuDatabase.filter(item => item[2] === 'vegetarian').length;
console.log("Amount of Vegetarian Dishes:", amountVegetarianDishes);

// Task 4: Calculate the total value of all meat dishes using reduce
const totalAmountMeatDishes = menuDatabase
  .filter(item => item[2] === 'meat')
  .reduce((total, item) => total + item[1], 0);
console.log("Total Amount of Meat Dishes:", totalAmountMeatDishes);


// check