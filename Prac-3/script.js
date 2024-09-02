function showDetails(foodItem) {
    const detailsDiv = document.getElementById('foodDetails');

    let foodDetails = '';

    switch (foodItem) {
        case 'pizza':
            foodDetails = `
            <h3>Pizza</h3>
            <p>Delicious cheese pizza with a crispy crust and fresh toppings.</p>
            <button onclick="orderFood('Pizza', 12.99)" class="order-btn">Add to Cart - $12.99</button>
        `;
        break;
    case 'burger':
        foodDetails = `
            <h3>Burger</h3>
            <p>Juicy beef burger with lettuce, tomato, and our special sauce.</p>
            <button onclick="orderFood('Burger', 8.99)" class="order-btn">Add to Cart - $8.99</button>
        `;
        break;
    case 'sushi':
        foodDetails = `
            <h3>Sushi</h3>
            <p>Fresh sushi rolls with salmon, avocado, and a hint of wasabi.</p>
            <button onclick="orderFood('Sushi', 15.99)" class="order-btn">Add to Cart - $15.99</button>
        `;
        break;
    default:
        foodDetails = `<p>Please select a food item.</p>`;
}

detailsDiv.innerHTML = foodDetails;
detailsDiv.style.display = 'block'; // Show the details section
}

// Function to handle adding food to cart
let cart = [];
let totalCost = 0;

function orderFood(food, price) {
cart.push({ food, price });
totalCost += price;

// Display cart information
alert(`${food} added to your cart. Total Cost: $${totalCost.toFixed(2)}`);
}
