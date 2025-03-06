from fastapi import FastAPI
from backend.routes import heart_disease,diabetes,hypothyroid,lung_cancer,parkinson

app= FastAPI(title="Medical Diagnostic System", version="1.0")

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all domains
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# add route
app.include_router(heart_disease.router)
app.include_router(diabetes.router)
app.include_router(hypothyroid.router)
app.include_router(lung_cancer.router)
app.include_router(parkinson.router)

@app.get("/")
def home():
    return {"message":"Welcome to the Medical Diagnostic API"}

if __name__=="__main__":
    import uvicorn
    uvicorn.run(app,host="0.0.0.0" ,port=8000)


