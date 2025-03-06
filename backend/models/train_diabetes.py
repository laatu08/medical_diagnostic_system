import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# load datasee
df=pd.read_csv("C:\\Code\\Web Development\\Medical Diagnostic App\\medical_diagnostic_system\\ml_model\\datasets\\diabetes_data.csv")

# Define features and target
X = df.drop(columns=["Outcome"])
y = df["Outcome"]

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate model
accuracy = accuracy_score(y_test, model.predict(X_test))
print(f"Model Accuracy: {accuracy:.2f}")

# Save model
joblib.dump(model, "C:\\Code\\Web Development\\Medical Diagnostic App\\medical_diagnostic_system\\backend\\models\\diabetes_model.pkl")
