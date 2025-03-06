import React, { useState } from "react";
import axios from "axios";

const LungCancerForm = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    GENDER: "M",
    AGE: "",
    SMOKING: 0,
    YELLOW_FINGERS: 0,
    ANXIETY: 0,
    PEER_PRESSURE: 0,
    CHRONIC_DISEASE: 0,
    FATIGUE_: 0,
    ALLERGY_: 0,
    WHEEZING: 0,
    ALCOHOL_CONSUMING: 0,
    COUGHING: 0,
    SHORTNESS_OF_BREATH: 0,
    SWALLOWING_DIFFICULTY: 0,
    CHEST_PAIN: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "AGE" ? parseInt(value) || "" : parseInt(value), // Convert numbers
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/lung-cancer/predict",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Gender:</label>
      <select name="GENDER" value={formData.GENDER} onChange={handleChange}>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>

      <label>Age:</label>
      <input type="number" name="AGE" value={formData.AGE} onChange={handleChange} required />

      {[
        "SMOKING",
        "YELLOW_FINGERS",
        "ANXIETY",
        "PEER_PRESSURE",
        "CHRONIC_DISEASE",
        "FATIGUE_",
        "ALLERGY_",
        "WHEEZING",
        "ALCOHOL_CONSUMING",
        "COUGHING",
        "SHORTNESS_OF_BREATH",
        "SWALLOWING_DIFFICULTY",
        "CHEST_PAIN",
      ].map((field) => (
        <div key={field}>
          <label>{field.replace("_", " ")}:</label>
          <select name={field} value={formData[field]} onChange={handleChange}>
            <option value="1">No</option>
            <option value="2">Yes</option>
          </select>
        </div>
      ))}

      <button type="submit">Predict</button>
    </form>
  );
};



export default LungCancerForm;
