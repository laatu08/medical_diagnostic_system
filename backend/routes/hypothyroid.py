from fastapi import APIRouter
import pandas as pd
import joblib
from pydantic import BaseModel

router = APIRouter(prefix="/hypothyroid", tags=["Hypothyroid Prediction"])

# Load trained model
model = joblib.load("C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\\backend\models\hyperthyroid_model.pkl")

# Define request body model
class HypothyroidInput(BaseModel):
    age: int
    sex: int
    on_thyroxine: int
    TSH: float
    T3_measured: int
    T3: float
    TT4: float

@router.post("/predict")
def predict_hypothyroid(data: HypothyroidInput):
    input_df = pd.DataFrame([data.dict()])
    prediction = model.predict(input_df)
    return {"prediction": int(prediction[0])}
