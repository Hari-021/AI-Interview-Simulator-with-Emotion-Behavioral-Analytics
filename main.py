from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import random
import asyncio

app = FastAPI(title="AI Interview Core Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "Online"}

@app.websocket("/ws/video")
async def video_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("🚀 LIVE TRACKING ACTIVE: Connected to Frontend Dashboard!")
    try:
        while True:
            # Receive incoming video frame data bytes
            frame_bytes = await websocket.receive_bytes()
            
            # Generate real-time fluctuating behavioral metrics
            # This proves the WebSocket pipe is working perfectly!
            mock_emotions = ["Focused", "Engaged", "Thinking", "Confident"]
            mock_stress = ["Normal", "Low", "Normal", "Slight Hesitation"]
            
            payload = {
                "emotion": random.choice(mock_emotions),
                "eye_contact": f"{random.randint(88, 98)}%",
                "vocal_stress": random.choice(mock_stress)
            }
            
            # Stream the dynamic data directly back to the screen
            await websocket.send_json(payload)
            
    except WebSocketDisconnect:
        print("🛑 Session ended by user.")
    except Exception as e:
        print(f"⚠️ Network stream note: {e}")

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)