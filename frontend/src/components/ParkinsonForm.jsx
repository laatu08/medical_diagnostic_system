import React, { useState } from "react";
import axios from "axios";

const ParkinsonForm = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    MDVP_Fo: "",
    MDVP_Fhi: "",
    MDVP_Flo: "",
    MDVP_Jitter: "",
    MDVP_Jitter_Abs: "",
    MDVP_RAP: "",
    MDVP_PPQ: "",
    Jitter_DDP: "",
    MDVP_Shimmer: "",
    MDVP_Shimmer_dB: "",
    Shimmer_APQ3: "",
    Shimmer_APQ5: "",
    MDVP_APQ: "",
    Shimmer_DDA: "",
    NHR: "",
    HNR: "",
    RPDE: "",
    DFA: "",
    spread1: "",
    spread2: "",
    D2: "",
    PPE: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/parkinson/predict",
        {
          MDVP_Fo: parseFloat(formData.MDVP_Fo),
          MDVP_Fhi: parseFloat(formData.MDVP_Fhi),
          MDVP_Flo: parseFloat(formData.MDVP_Flo),
          MDVP_Jitter: parseFloat(formData.MDVP_Jitter),
          MDVP_Jitter_Abs: parseFloat(formData.MDVP_Jitter_Abs),
          MDVP_RAP: parseFloat(formData.MDVP_RAP),
          MDVP_PPQ: parseFloat(formData.MDVP_PPQ),
          Jitter_DDP: parseFloat(formData.Jitter_DDP),
          MDVP_Shimmer: parseFloat(formData.MDVP_Shimmer),
          MDVP_Shimmer_dB: parseFloat(formData.MDVP_Shimmer_dB),
          Shimmer_APQ3: parseFloat(formData.Shimmer_APQ3),
          Shimmer_APQ5: parseFloat(formData.Shimmer_APQ5),
          MDVP_APQ: parseFloat(formData.MDVP_APQ),
          Shimmer_DDA: parseFloat(formData.Shimmer_DDA),
          NHR: parseFloat(formData.NHR),
          HNR: parseFloat(formData.HNR),
          RPDE: parseFloat(formData.RPDE),
          DFA: parseFloat(formData.DFA),
          spread1: parseFloat(formData.spread1),
          spread2: parseFloat(formData.spread2),
          D2: parseFloat(formData.D2),
          PPE: parseFloat(formData.PPE),
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
      <label>MDVP_Fo (Hz): <input type="number" step="0.01" name="MDVP_Fo" value={formData.MDVP_Fo} onChange={handleChange} required /></label>

      <label>MDVP_Fhi (Hz): <input type="number" step="0.01" name="MDVP_Fhi" value={formData.MDVP_Fhi} onChange={handleChange} required /></label>

      <label>MDVP_Flo (Hz): <input type="number" step="0.01" name="MDVP_Flo" value={formData.MDVP_Flo} onChange={handleChange} required /></label>

      <label>MDVP_Jitter (%): <input type="number" step="0.0001" name="MDVP_Jitter" value={formData.MDVP_Jitter} onChange={handleChange} required /></label>

      <label>MDVP_Jitter_Abs: <input type="number" step="0.0001" name="MDVP_Jitter_Abs" value={formData.MDVP_Jitter_Abs} onChange={handleChange} required /></label>

      <label>MDVP_RAP: <input type="number" step="0.0001" name="MDVP_RAP" value={formData.MDVP_RAP} onChange={handleChange} required /></label>

      <label>MDVP_PPQ: <input type="number" step="0.0001" name="MDVP_PPQ" value={formData.MDVP_PPQ} onChange={handleChange} required /></label>

      <label>Jitter_DDP: <input type="number" step="0.0001" name="Jitter_DDP" value={formData.Jitter_DDP} onChange={handleChange} required /></label>

      <label>MDVP_Shimmer: <input type="number" step="0.0001" name="MDVP_Shimmer" value={formData.MDVP_Shimmer} onChange={handleChange} required /></label>

      <label>MDVP_Shimmer_dB: <input type="number" step="0.01" name="MDVP_Shimmer_dB" value={formData.MDVP_Shimmer_dB} onChange={handleChange} required /></label>

      <label>Shimmer_APQ3: <input type="number" step="0.01" name="Shimmer_APQ3" value={formData.Shimmer_APQ3} onChange={handleChange} required /></label>

      <label>Shimmer_APQ5: <input type="number" step="0.01" name="Shimmer_APQ5" value={formData.Shimmer_APQ5} onChange={handleChange} required /></label>

      <label>MDVP_APQ: <input type="number" step="0.01" name="MDVP_APQ" value={formData.MDVP_APQ} onChange={handleChange} required /></label>

      <label>Shimmer_DDA: <input type="number" step="0.01" name="Shimmer_DDA" value={formData.Shimmer_DDA} onChange={handleChange} required /></label>

      <label>NHR: <input type="number" step="0.01" name="NHR" value={formData.NHR} onChange={handleChange} required /></label>

      <label>HNR: <input type="number" step="0.01" name="HNR" value={formData.HNR} onChange={handleChange} required /></label>

      <label>RPDE: <input type="number" step="0.01" name="RPDE" value={formData.RPDE} onChange={handleChange} required /></label>

      
      <label>DFA: <input type="number" step="0.0001" name="DFA" value={formData.DFA} onChange={handleChange} required /></label>

      
      <label>Spread1: <input type="number" step="0.0001" name="spread1" value={formData.spread1} onChange={handleChange} required /></label>

      <label>Spread2: <input type="number" step="0.0001" name="spread2" value={formData.spread2} onChange={handleChange} required /></label>

      <label>D2:<br></br> <input type="number" step="0.0001" name="D2" value={formData.D2} onChange={handleChange} required /></label>
      
      <label>PPE: <input type="number" step="0.0001" name="PPE" value={formData.PPE} onChange={handleChange} required /></label>

      <button type="submit">Predict</button>
    </form>
  );
};

export default ParkinsonForm;
