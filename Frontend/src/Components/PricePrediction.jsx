import { useState } from "react";
import "./PricePrediction.css";

export default function PricePrediction() {
  const [formData, setFormData] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    // Validate inputs
    if (!formData.area || !formData.bedrooms || !formData.bathrooms) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          area: parseFloat(formData.area),
          bedrooms: parseInt(formData.bedrooms),
          bathrooms: parseInt(formData.bathrooms),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get prediction");
      }

      const data = await response.json();
      setPrediction(data["Predicted price"]);
    } catch (err) {
      setError(
        err.message || "An error occurred while fetching the prediction",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ area: "", bedrooms: "", bathrooms: "" });
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="price-prediction-container">
      <div className="prediction-card">
        <h1 className="title">🏠 House Price Predictor</h1>
        <p className="subtitle">
          Enter your property details to get an estimated price
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="area">Area (sq ft)</label>
            <input
              type="number"
              id="area"
              name="area"
              placeholder="Enter area in square feet"
              value={formData.area}
              onChange={handleInputChange}
              className="input"
              step="0.01"
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bedrooms">Bedrooms</label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              placeholder="Enter number of bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              className="input"
              min="0"
              max="20"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bathrooms">Bathrooms</label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              placeholder="Enter number of bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              className="input"
              step="0.5"
              min="0"
              max="20"
            />
          </div>

          <div className="button-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Predicting..." : "Predict Price"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
        </form>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {prediction && (
          <div className="success-message">
            <div className="prediction-result">
              <p className="result-label">Estimated Price:</p>
              <p className="result-value">
                &#8377;
                {prediction.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
