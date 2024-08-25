# app.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

environment = os.getenv("ENVIRONMENT")
if environment == "production":
    load_dotenv(dotenv_path=".env.production") 
else:
    load_dotenv(dotenv_path=".env.development") 

allowed_origins = os.getenv("ALLOWED_ORIGINS")
if allowed_origins:
    allowed_origins = allowed_origins.split(",")
else:
    allowed_origins = []

# , initialize_chroma_vector_store
# Create an instance of the FastAPI class
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)



# Define a route with a GET method
@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}