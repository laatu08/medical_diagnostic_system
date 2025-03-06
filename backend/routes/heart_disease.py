from fastapi import APIRouter
import pandas as pd
import joblib
from pydantic import BaseModel


router=APIRouter(prefix="/heart-disease",tags=["Heart Disease Prediction"])

# Load train model
model=joblib.load("C:\\Code\\Web Development\\Medical Diagnostic App\\medical_diagnostic_system\\backend\\models\\heart_disease_model.pkl")


class HeartDiseaseInput(BaseModel):
    age:int
    sex:int
    cp:int
    trestbps: int
    chol: int
    fbs: int
    restecg: int
    thalach: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int


@router.post("/predict")
def predict_heart_disease(data:HeartDiseaseInput):
    input_df=pd.DataFrame([data.dict()])

    prediction=model.predict(input_df)

    return {"prediction":int(prediction[0])}