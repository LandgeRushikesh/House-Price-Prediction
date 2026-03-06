# 🏠 House Price Prediction System

A **full-stack machine learning application** that predicts house prices based on property features such as **area, bedrooms, and bathrooms**.

This project demonstrates how a **machine learning model can be deployed as an API and integrated into a full-stack web application** using **React, Express, and Flask**.

---

## 🚀 Features

- Predict house prices using **Linear Regression**
- Machine Learning model served via **Flask API**
- **Express.js backend** for API communication
- **React frontend** for user interaction
- Real-time prediction results
- Clean **microservice architecture**

---

## 🧠 Machine Learning Model

The model uses **Linear Regression** from **scikit-learn**.

### Input Features

| Feature | Description |
|---------|-------------|
| Area | Size of the house (sq ft) |
| Bedrooms | Number of bedrooms |
| Bathrooms | Number of bathrooms |

### Output

Predicted house price.

### Example:

**Input**

Area: 1200

Bedrooms: 3

Bathrooms: 2

**Output**

Predicted Price: ₹58,00,000

## 🏗️ System Architecture
```

React Frontend
│
▼
Express Backend
│
▼
Flask ML API
│
▼
Linear Regression Model

```
### Request Flow

1. User enters house details in the React UI
2. React sends request to Express API
3. Express forwards request to Flask ML API
4. Flask runs `model.predict()`
5. Prediction is returned to the frontend

---

## 📂 Project Structure
```
House-Price-Prediction
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ └── PricePredictor.jsx
│ │ └── App.jsx
│
├── backend
│ ├── Controllers
│ │ └── PredictionController.js
│ ├── Routes
│ │ └── PredictionRoutes.js
│ ├── Middleware
│ │ └── ErrorMiddleware.js
│ └── server.js
│
├── ML
│ ├── Dataset
│ │ └── Housing.csv
│ ├── train_model.py
│ ├── ml_api.py
│ └── model.pkl
│
└── README.md

```

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- Fetch API

### Machine Learning
- Python
- Flask
- Scikit-learn
- Pandas
- Joblib

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/house-price-prediction.git
cd house-price-prediction
```

### 2️⃣ Setup Machine Learning API

Navigate to ML folder
```bash
cd ML
```

**Create virtual environment**
```bash
python -m venv venv
```
**Activate environment**
```bash
venv\Scripts\activate
```

**Install dependencies**
```bash
pip install flask pandas scikit-learn joblib
```
**Run ML API**
```bash
python ml_api.py
```

**Server runs on:**

```bash
http://127.0.0.1:3000
```
### 3️⃣ Setup Backend

**Navigate to backend**
```bash
cd backend
```
**Install dependencies**
```bash
npm install
```
**Run server**
```bash
npm run server
```
**Server runs on:**
```bash
http://localhost:5000
```
### 4️⃣ Setup Frontend

**Navigate to frontend**
```bash
cd frontend
```

**Install dependencies**
```bash
npm install
```
**Run development server**
```bash
npm run dev
```
**Frontend runs on:**
```bash
http://localhost:5173
```
**📡 API Endpoint**
**Predict House Price**
```
POST /api/predict
```
**Request**
```
{
  "area": 1200,
  "bedrooms": 3,
  "bathrooms": 2
}
```
**Response**
```
{
  "predicted_price": 5800000
}
```

### 📊 Example Output
```
Predicted Price: ₹58,00,000
```
**Displayed using:**
```
prediction.toLocaleString("en-IN")
```
### 📌 Learning Outcomes

**This project demonstrates:**

**ML model deployment**

- Backend ↔ ML API communication

- API integration with frontend

- Full-stack ML architecture

- Microservice-based design

### 🔮 Future Improvements

- Add more features (location, parking, house age)

- Use advanced models (Random Forest / XGBoost)

- Deploy ML API using Docker

- Add database for prediction history

### 👨‍💻 Author

**Rushikesh Landge**

*Computer Science Engineering Student*
