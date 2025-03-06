import React, { useState } from "react";
import ParkinsonForm from "../components/ParkinsonForm";
import "./Parkinson.css"; // Import the CSS file

const Parkinson = () => {
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePrediction = (result) => {
    setPrediction(result);
    setShowModal(true);
  };

  return (
    <div className="parkinson-container">
      <h2>Parkinson's Disease Prediction</h2>
      <ParkinsonForm setPrediction={handlePrediction} />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Prediction Result:</h3>
            <p>
              {prediction === 1
                ? "High Risk of Parkinson's Disease"
                : "Low Risk of Parkinson's Disease"}
            </p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parkinson;
