from flask import Flask,request,jsonify
import pandas as pd
import joblib

# Create Flask app
app = Flask(__name__)

# Load model
print("Loading training model...")
model = joblib.load("model.pkl")
print("model Loaded Successfully...")

# Api route for prediction
@app.route('/predict',methods=["POST"])
def predict():
    # Get JSON data from request
    data = request.json

    area = float(data['area'])
    bedrooms = int(data['bedrooms'])
    bathrooms = int(data['bathrooms'])

    # Convert input to dataframe
    ip_data = pd.DataFrame([[area,bedrooms,bathrooms]],columns=["area","bedrooms","bathrooms"])

    # make Prediction
    prediction = model.predict(ip_data)

    return jsonify({
        "Predicted price":prediction[0]
    })


if __name__ == '__main__':
    app.run(debug=True,port=3000)
