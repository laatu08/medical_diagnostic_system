import React, { useState } from "react";
import axios from "axios";
import "./HeartDiseaseForm.css"

const HeartDiseaseForm = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/heart-disease/predict",
        {
          age: parseInt(formData.age),
          sex: parseInt(formData.sex),
          cp: parseInt(formData.cp),
          trestbps: parseInt(formData.trestbps),
          chol: parseInt(formData.chol),
          fbs: parseInt(formData.fbs),
          restecg: parseInt(formData.restecg),
          thalach: parseInt(formData.thalach),
          exang: parseInt(formData.exang),
          oldpeak: parseFloat(formData.oldpeak),
          slope: parseInt(formData.slope),
          ca: parseInt(formData.ca),
          thal: parseInt(formData.thal),
        },
        { headers: { "Content-Type": "application/json" } }
      );

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Age: <input type="number" name="age" value={formData.age} onChange={handleChange} required /></label>

      <label>Sex (1=Male, 0=Female): <input type="number" name="sex" value={formData.sex} onChange={handleChange} required /></label>

      <label>Chest Pain Type (cp): <input type="number" name="cp" value={formData.cp} onChange={handleChange} required /></label>

      <label>Resting Blood Pressure (trestbps): <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} required /></label>

      <label>Cholesterol (chol): <input type="number" name="chol" value={formData.chol} onChange={handleChange} required /></label>

      <label>Fasting Blood Sugar 120 mg/dl (fbs): <input type="number" name="fbs" value={formData.fbs} onChange={handleChange} required /></label>

      <label>Resting ECG Results (restecg): <input type="number" name="restecg" value={formData.restecg} onChange={handleChange} required /></label>

      <label>Max Heart Rate Achieved (thalach): <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} required /></label>

      <label>Exercise-Induced Angina (exang): <input type="number" name="exang" value={formData.exang} onChange={handleChange} required /></label>

      <label>ST Depression (oldpeak): <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required /></label>

      <label>Slope of ST Segment (slope): <input type="number" name="slope" value={formData.slope} onChange={handleChange} required /></label>

      <label>Number of Major Vessels (ca): <input type="number" name="ca" value={formData.ca} onChange={handleChange} required /></label>

      <label>Thalassemia Type (thal): <input type="number" name="thal" value={formData.thal} onChange={handleChange} required /></label>
      
      <button type="submit">Predict</button>
    </form>
  );
};

export default HeartDiseaseForm;
