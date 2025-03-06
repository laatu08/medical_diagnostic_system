import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
df = pd.read_csv("C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\ml_model\datasets\survey lung cancer.csv")

# Rename columns (replace spaces)
df.columns = df.columns.str.replace(" ", "_")

# Encode categorical columns
df["GENDER"] = df["GENDER"].map({"M": 0, "F": 1})
df["LUNG_CANCER"] = df["LUNG_CANCER"].map({"YES": 1, "NO": 0})

# Define features and target
X = df.drop(columns=["LUNG_CANCER"])
y = df["LUNG_CANCER"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate model
accuracy = accuracy_score(y_test, model.predict(X_test))
print(f"Lung Cancer Model Accuracy: {accuracy:.2f}")

# Save model
joblib.dump(model, "C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\\backend\models\lung_cancer_model.pkl")
