import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
df = pd.read_csv("C:\Code\Web Development\Medical Diagnostic App\medical_diagnostic_system\ml_model\datasets\prepocessed_hypothyroid.csv")

# Define features and target
X = df.drop(columns=["binaryClass"])  # Target column
y = df["binaryClass"]

# Handle categorical data (sex, on thyroxine)
X = pd.get_dummies(X, columns=["sex", "on thyroxine"], drop_first=True)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate model
accuracy = accuracy_score(y_test, model.predict(X_test))
print(f"Hypothyroid Model Accuracy: {accuracy:.2f}")

# Save model
joblib.dump(model, "C:\\Code\\Web Development\\Medical Diagnostic App\\medical_diagnostic_system\\backend\\models\\hyperthyroid_model.pkl")
