CREATE TABLE dishes(
    id INT PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price FLOAT NOT NULL
)

INSERT INTO dishes (name, type, price) VALUES 
('Pasta', 'Veg', 200.0),
('Chicken Curry', 'Non-Veg', 300.0),
('Paneer Butter Masala', 'Veg', 250.0),
('Fish Fry', 'Non-Veg', 350.0),
('Veg Biryani', 'Veg', 180.0);