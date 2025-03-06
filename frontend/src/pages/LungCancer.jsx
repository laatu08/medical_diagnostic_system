import React, { useState } from "react";
import LungCancerForm from "../components/LungCancerForm";
import "./LungCancer.css"; // Import the CSS file

const LungCancer = () => {
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePrediction = (result) => {
    setPrediction(result);
    setShowModal(true);
  };

  return (
    <div className="lung-cancer-container">
      <h2>Lung Cancer Prediction</h2>
      <LungCancerForm setPrediction={handlePrediction} />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Prediction Result:</h3>
            <p>
              {prediction === 1
                ? "High Risk of Lung Cancer"
                : "Low Risk of Lung Cancer"}
            </p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LungCancer;
