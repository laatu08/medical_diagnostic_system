import React, { useState } from "react";
import DiabetesForm from "../components/DiabetesForm";
import "./Diabetes.css"; // Import the CSS file

const Diabetes = () => {
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePrediction = (result) => {
    setPrediction(result);
    setShowModal(true);
  };

  return (
    <div className="diabetes-container">
      <h2>Diabetes Prediction</h2>
      <DiabetesForm setPrediction={handlePrediction} />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Prediction Result:</h3>
            <p>
              {prediction === 1 ? "High Risk of Diabetes" : "Low Risk of Diabetes"}
            </p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diabetes;
