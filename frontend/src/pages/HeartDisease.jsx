import React, { useState } from "react";
import HeartDiseaseForm from "../components/HeartDiseaseForm";
import "./HeartDisease.css";

const HeartDisease = () => {
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePrediction = (result) => {
    setPrediction(result);
    setShowModal(true);
  };

  return (
    <div className="heart-disease-container">
      <h2>Heart Disease Prediction</h2>
      <HeartDiseaseForm setPrediction={handlePrediction} />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Prediction Result:</h3>
            <p>{prediction === 1 ? "High Risk of Heart Disease" : "Low Risk of Heart Disease"}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeartDisease;
