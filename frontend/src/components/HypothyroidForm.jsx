import React, { useState } from "react";
import axios from "axios";

const HypothyroidForm = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    on_thyroxine: "",
    TSH: "",
    T3_measured: "",
    T3: "",
    TT4: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/hypothyroid/predict",
        {
          age: parseInt(formData.age),
          sex: parseInt(formData.sex),
          on_thyroxine: parseInt(formData.on_thyroxine),
          TSH: parseFloat(formData.TSH),
          T3_measured: parseInt(formData.T3_measured),
          T3: parseFloat(formData.T3),
          TT4: parseFloat(formData.TT4),
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

      <label>On Thyroxine (1=Yes, 0=No): <input type="number" name="on_thyroxine" value={formData.on_thyroxine} onChange={handleChange} required /></label>

      <label>TSH Level: <input type="number" step="0.1" name="TSH" value={formData.TSH} onChange={handleChange} required /></label>

      <label>T3 Measured (1=Yes, 0=No): <input type="number" name="T3_measured" value={formData.T3_measured} onChange={handleChange} required /></label>

      <label>T3 Level: <input type="number" step="0.1" name="T3" value={formData.T3} onChange={handleChange} required /></label>

      <label>TT4 Level: <input type="number" step="0.1" name="TT4" value={formData.TT4} onChange={handleChange} required /></label>
      
      <button type="submit">Predict</button>
    </form>
  );
};

export default HypothyroidForm;
