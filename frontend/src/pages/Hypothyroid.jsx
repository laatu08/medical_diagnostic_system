import React, { useState } from "react";
import HypothyroidForm from "../components/HypothyroidForm";
import "./Hypothyroid.css"; // Import the CSS file

const Hypothyroid = () => {
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePrediction = (result) => {
    setPrediction(result);
    setShowModal(true);
  };

  return (
    <div className="hypothyroid-container">
      <h2>Hypothyroid Prediction</h2>
      <HypothyroidForm setPrediction={handlePrediction} />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Prediction Result:</h3>
            <p>
              {prediction === 1
                ? "High Risk of Hypothyroidism"
                : "Low Risk of Hypothyroidism"}
            </p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hypothyroid;
