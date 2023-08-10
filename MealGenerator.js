// Define food categories and their respective meal lists
const foodCategories = {
  breakfast: ["Oatmeal with Berries", "Greek Yogurt Parfait", "Scrambled Eggs with Toast", "Fruit Smoothie", "Avocado Toast"],
  lunch: ["Grilled Chicken Salad", "Turkey and Cheese Wrap", "Vegetable Stir-Fry", "Quinoa Bowl", "Caprese Sandwich"],
  dinner: ["Spaghetti Bolognese", "Baked Salmon with Asparagus", "Chicken and Broccoli Alfredo", "Vegetable Curry", "Beef Tacos"],
  snacks: ["Apple with Peanut Butter", "Mixed Nuts", "Carrot Sticks with Hummus", "Greek Yogurt with Honey", "Cheese and Whole Wheat Crackers"]
};

// Function to generate a random meal from a category
function generateRandomMeal(category) {
  const meals = foodCategories[category];
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

// Function to generate 5 days of meals
function generate5DaysOfMeals() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const mealPlan = {};

  for (const day of daysOfWeek) {
    mealPlan[day] = {
      breakfast: generateRandomMeal("breakfast"),
      lunch: generateRandomMeal("lunch"),
      dinner: generateRandomMeal("dinner"),
      snacks: generateRandomMeal("snacks")
    };
  }

  return mealPlan;
}

// Example usage
const singleRandomMeal = generateRandomMeal("dinner");
const fiveDayMealPlan = generate5DaysOfMeals();

console.log("Random Single Meal:", singleRandomMeal);
console.log("Five-Day Meal Plan:", fiveDayMealPlan);
