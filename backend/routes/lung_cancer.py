from fastapi import APIRouter
import pandas as pd
import joblib
from pydantic import BaseModel

router = APIRouter(prefix="/lung-cancer", tags=["Lung Cancer Prediction"])

# Load the trained model
model = joblib.load("C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\\backend\models\lung_cancer_model.pkl")

# Define the request body model
class LungCancerInput(BaseModel):
    GENDER: str  # "M" or "F"
    AGE: int
    SMOKING: int
    YELLOW_FINGERS: int
    ANXIETY: int
    PEER_PRESSURE: int
    CHRONIC_DISEASE: int
    FATIGUE_: int
    ALLERGY_: int
    WHEEZING: int
    ALCOHOL_CONSUMING: int
    COUGHING: int
    SHORTNESS_OF_BREATH: int
    SWALLOWING_DIFFICULTY: int
    CHEST_PAIN: int

@router.post("/predict")
def predict_lung_cancer(data: LungCancerInput):
    input_df = pd.DataFrame([data.dict()])

    # Convert categorical variables
    input_df["GENDER"] = input_df["GENDER"].map({"M": 0, "F": 1})

    # Make prediction
    prediction = model.predict(input_df)[0]
    probability = model.predict_proba(input_df)[0].tolist()

    return {
        "prediction": "YES" if prediction == 1 else "NO",
        "probability": {
            "NO": probability[0],
            "YES": probability[1]
        }
    }
