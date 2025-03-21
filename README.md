# 🏥 Medical Diagnostic System  

## 📌 Project Overview  
The **Medical Diagnostic System** is an AI-powered platform designed to assist in diagnosing various diseases using **machine learning models**. The system analyzes patient data and provides a probability-based diagnosis for diseases such as **heart disease, diabetes, hypothyroidism, Parkinson’s disease, and lung cancer**.  

### 🚀 Built With  
- **Backend:** Python 
- **Frontend:** React 
- **Database:** PostgreSQL/MongoDB  
- **Machine Learning Models:** Scikit-learn, TensorFlow, Pandas, NumPy  
- **Deployment:** Render, Railway, AWS  

---

## 📂 Project Structure  

┣ 📁 backend/ # Backend API (Flask/FastAPI)
┃ ┣ 📁 models/ # ML models stored here
┃ ┣ 📁 routes/ # API routes
┃ ┣ 📄 main.py # Main backend entry file
┃ ┣ 📄 requirements.txt # Python dependencies
┣ 📁 frontend/ # React frontend 
┣ 📁 ml_model/datasets/ # Medical datasets
┗ 📄 .gitignore # Git ignored files



---

## 💻 Installation & Setup  

### 🔹 1️⃣ Clone the Repository  
```sh
git clone https://github.com/laatu08/medical_diagnostic_system.git
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ..
uvicorn backend.main:app --reload


// For Frontend
cd frontend
npm install
npm run dev
