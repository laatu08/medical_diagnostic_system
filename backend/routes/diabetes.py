from fastapi import APIRouter
import pandas as pd
import joblib
from pydantic import BaseModel

router = APIRouter(prefix="/diabetes", tags=["Diabetes Prediction"])

# Load the trained model
model = joblib.load("C:\\Code\\Web Development\\Medical Diagnostic App\\medical_diagnostic_system\\backend\\models\\diabetes_model.pkl")

# Define the request body model
class DiabetesInput(BaseModel):
    Pregnancies: int
    Glucose: int
    BloodPressure: int
    SkinThickness: int
    Insulin: int
    BMI: float
    DiabetesPedigreeFunction: float
    Age: int

@router.post("/predict")
def predict_diabetes(data: DiabetesInput):
    input_df = pd.DataFrame([data.dict()])
    prediction = model.predict(input_df)
    return {"prediction": int(prediction[0])}
