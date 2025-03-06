import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
df = pd.read_csv("C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\ml_model\datasets\parkinson_data.csv")

# Drop the 'name' column since it's not a feature
df = df.drop(columns=["name"])

# Define features and target
X = df.drop(columns=["status"])  # 'status' is the target label (1 = Parkinson's, 0 = Healthy)
y = df["status"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate model
accuracy = accuracy_score(y_test, model.predict(X_test))
print(f"Parkinson's Model Accuracy: {accuracy:.2f}")

# Save model
joblib.dump(model, "C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\\backend\models\\parkinson_model.pkl")
