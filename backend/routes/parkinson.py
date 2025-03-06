from fastapi import APIRouter
import pandas as pd
import joblib
from pydantic import BaseModel

router = APIRouter(prefix="/parkinson", tags=["Parkinson's Prediction"])

# Load the trained model
model = joblib.load("C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\\backend\models\parkinson_model.pkl")

# Define the request body model
class ParkinsonInput(BaseModel):
    MDVP_Fo: float
    MDVP_Fhi: float
    MDVP_Flo: float
    MDVP_Jitter: float
    MDVP_Jitter_Abs: float
    MDVP_RAP: float
    MDVP_PPQ: float
    Jitter_DDP: float
    MDVP_Shimmer: float
    MDVP_Shimmer_dB: float
    Shimmer_APQ3: float
    Shimmer_APQ5: float
    MDVP_APQ: float
    Shimmer_DDA: float
    NHR: float
    HNR: float
    RPDE: float
    DFA: float
    spread1: float
    spread2: float
    D2: float
    PPE: float

@router.post("/predict")
def predict_parkinson(data: ParkinsonInput):
    input_df = pd.DataFrame([data.dict()])
    prediction = model.predict(input_df)
    return {"prediction": int(prediction[0])}
