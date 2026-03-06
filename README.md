🏠 House Price Prediction System

A full-stack machine learning project that predicts house prices based on property features such as area, number of bedrooms, and number of bathrooms.

The system integrates Machine Learning (Python) with a Node.js backend and a React frontend, demonstrating how ML models can be deployed as APIs and consumed by web applications.

🚀 Features

Predict house price using Linear Regression

Machine Learning model served using Flask API

Express.js backend to handle API communication

React frontend for user interaction

Real-time price prediction

Clean microservice architecture

🧠 Machine Learning Model

The project uses Linear Regression from scikit-learn.

Input Features

Area (square feet)

Bedrooms

Bathrooms

Output

Predicted house price

Example Input:

Area: 1200
Bedrooms: 3
Bathrooms: 2

Example Output:

Predicted Price: ₹58,00,000

🏗️ Project Architecture

React Frontend
      ↓
Express Backend API
      ↓
Flask ML API
      ↓
Linear Regression Model

📂 Project Structure

House-Price-Prediction
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── PricePredictor.jsx
│   │   └── App.jsx
│
├── backend
│   ├── Controllers
│   │   └── PredictionController.js
│   ├── Routes
│   │   └── PredictionRoutes.js
│   ├── Middleware
│   │   └── ErrorMiddleware.js
│   └── server.js
│
├── ML
│   ├── Dataset
│   │   └── Housing.csv
│   ├── train_model.py
│   ├── ml_api.py
│   └── model.pkl
│
└── README.md

🛠️ Tech Stack
Frontend

React

JavaScript

CSS

Backend

Node.js

Express.js

Fetch API

Machine Learning

Python

Flask

Scikit-learn

Pandas

Joblib

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/house-price-prediction.git
cd house-price-prediction
2️⃣ Setup Machine Learning API

Navigate to ML folder:

cd ML

Create virtual environment:

python -m venv venv

Activate environment:

venv\Scripts\activate

Install dependencies:

pip install flask pandas scikit-learn joblib

Run ML API:

python ml_api.py

Server runs at:

http://127.0.0.1:3000
3️⃣ Setup Backend (Express)

Navigate to backend folder:

cd backend

Install dependencies:

npm install

Run server:

npm run server

Server runs at:

http://localhost:8000
4️⃣ Setup Frontend

Navigate to frontend:

cd frontend

Install dependencies:

npm install

Run development server:

npm run dev

Frontend runs at:

http://localhost:5173
📡 API Endpoint
Predict House Price
POST /api/predict

Request Body:

{
 "area": 1200,
 "bedrooms": 3,
 "bathrooms": 2
}

Response:

{
 "predicted_price": 5800000
}
📊 Example Output
Predicted Price: ₹58,00,000

Displayed in Indian currency format using:

prediction.toLocaleString("en-IN")
📌 Learning Outcomes

This project demonstrates:

ML model deployment

Backend–ML communication

API integration

Full stack ML architecture

Microservice design

🔮 Future Improvements

Add more features (location, parking, house age)

Use advanced models (Random Forest / XGBoost)

Deploy ML API using Docker

Add database for storing predictions

👨‍💻 Author

Rushikesh Landge
Computer Science Engineering Student
