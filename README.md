# 🤖 AI Interview Simulator with Emotion & Behavioral Analytics

> An intelligent, full-stack mock interview platform designed to evaluate and improve real-time candidate behavior. This application leverages a high-performance **Next.js** presentation layer and an asynchronous **FastAPI** computing engine connected over a low-latency **WebSocket** data pipeline.

---

### 🚀 Technology Stack & Badges

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)

---

## 💡 Key Features

* **Real-Time Telemetry Streaming:** Captures and serializes webcam frames every **1000ms** to minimize browser overhead and prevent network congestion.
* **Dynamic Behavioral Metrics:** Calculates and streams immediate feedback on **Emotion Consistency**, **Eye Contact Percentage**, and **Vocal Stress Markers**.
* **Fault-Tolerant Processing Loop:** Uses frame-level isolation to prevent blurred images or dropped packets from terminating the active server connection.
* **Interactive Transcript Timeline:** Features a conversational chat UI with instant state management to track interview questions and answers seamlessly.

---

## 🛠️ System Architecture

```mermaid
graph LR
    A[React Client Web UI] -- 1. Capture Frame --> B(WebSocket Connection)
    B -- 2. Byte Stream Data --> C[FastAPI Processing Hub]
    C -- 3. OpenCV Metric Analysis --> B
    B -- 4. Live Telemetry Updates --> A

```

* **Frontend Environment:** Built with **Next.js (App Router)** and **TypeScript** for robust type-safety. Tailored with a custom cinematic dark theme using **Tailwind CSS**.
* **Backend Processing Environment:** Powered by **FastAPI** and an asynchronous event loop running **Uvicorn** to support high-concurrency client connections.

---

## 📂 Project Directory Structure

```text
ai-resume/
├── backend/            # Python Machine Learning Backend
│   ├── venv/           # Isolated environment files
│   └── main.py         # WebSocket server & computation logic
└── frontend/           # Next.js Presentation Application
    ├── app/
    │   └── page.tsx    # Live telemetry & interview chat interface
    └── package.json    # Manifest file & script definitions

```

---

## ⚙️ Local Installation & Execution

Follow this clear execution order to launch the application components simultaneously using the Windows Command Prompt.

### 🧵 Step 1: Start the Machine Learning Backend

Open a terminal window, navigate to your backend repository directory, activate your isolated environment sandbox, and start your computation server:

```bash
cd Desktop/ai-resume/backend
venv\Scripts\activate
npx kill-port 8000
python main.py

```

> **Expected output anchor:** Verify that your console outputs: `Uvicorn running on http://127.0.0.1:8000`. Keep this window open.

### 🧵 Step 2: Spin Up the Interface Client

Open a **completely separate terminal window**. Change your target directory path to initialize your development workspace server:

```bash
cd Desktop/ai-resume/frontend
npm run dev

```

> **Expected output anchor:** Next.js will compile the dashboard assets and listen directly on port 3000: `http://localhost:3000`.

---

## 🎮 Running a Testing Session

1. Open your web browser and navigate directly to **`http://localhost:3000`**.
2. Click the teal **Start Session** button located in the upper right-hand corner of the page.
3. Accept the browser security prompt to authorize local video device access.
4. Your camera feed will switch to an active **LIVE DATA STREAM**.
5. Move your head, change your gaze angle, or look away from the screen to watch your dashboard metrics react dynamically in real-time.

---

## 📝 License

This project is open-source and licensed under the terms of the **MIT License**. Feel free to clone, modify, and distribute it as needed.

```

```
