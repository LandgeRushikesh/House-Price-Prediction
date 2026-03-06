import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Load Dataset
data = pd.read_csv('./Dataset/Housing.csv')

# Features(Input)
X = data[['area','bedrooms','bathrooms']]

# target(Output)
Y = data['price']

# Create Model
model = LinearRegression()

# Train Model
model.fit(X,Y)

# Save trained model
joblib.dump(model,'model.pkl')

print("model trained and saved as model.pkl")