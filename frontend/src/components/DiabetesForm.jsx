import React, { useState } from "react";
import axios from "axios";

const DiabetesForm = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/diabetes/predict",
        {
          Pregnancies: parseInt(formData.Pregnancies),
          Glucose: parseInt(formData.Glucose),
          BloodPressure: parseInt(formData.BloodPressure),
          SkinThickness: parseInt(formData.SkinThickness),
          Insulin: parseInt(formData.Insulin),
          BMI: parseFloat(formData.BMI),
          DiabetesPedigreeFunction: parseFloat(formData.DiabetesPedigreeFunction),
          Age: parseInt(formData.Age),
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
      <label>Pregnancies: <input type="number" name="Pregnancies" value={formData.Pregnancies} onChange={handleChange} required /></label>

      <label>Glucose: <input type="number" name="Glucose" value={formData.Glucose} onChange={handleChange} required /></label>

      <label>Blood Pressure: <input type="number" name="BloodPressure" value={formData.BloodPressure} onChange={handleChange} required /></label>

      <label>Skin Thickness: <input type="number" name="SkinThickness" value={formData.SkinThickness} onChange={handleChange} required /></label>

      <label>Insulin: <input type="number" name="Insulin" value={formData.Insulin} onChange={handleChange} required /></label>

      <label>BMI: <input type="number" step="0.1" name="BMI" value={formData.BMI} onChange={handleChange} required /></label>

      <label>Diabetes Pedigree Function: <input type="number" step="0.001" name="DiabetesPedigreeFunction" value={formData.DiabetesPedigreeFunction} onChange={handleChange} required /></label>

      <label>Age: <input type="number" name="Age" value={formData.Age} onChange={handleChange} required /></label>
      
      <button type="submit">Predict</button>
    </form>
  );
};

export default DiabetesForm;
