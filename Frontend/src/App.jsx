import "./App.css";
import PricePrediction from "./Components/PricePrediction";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">🏡 House Price Predictor</h1>
          <p className="app-tagline">AI-Powered Real Estate Valuation</p>
        </div>
      </header>

      <main className="app-main">
        <section className="intro-section">
          <h2>Get Accurate Price Predictions</h2>
          <p>
            Use our advanced machine learning model to predict house prices
            based on key factors like area, number of bedrooms, and bathrooms.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Accurate Predictions</h3>
              <p>ML-based predictions trained on real market data</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Instant Results</h3>
              <p>Get predictions in seconds</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h3>Simple to Use</h3>
              <p>Enter basic property details and get started</p>
            </div>
          </div>
        </section>

        <section className="predictor-section">
          <PricePrediction />
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 House Price Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
