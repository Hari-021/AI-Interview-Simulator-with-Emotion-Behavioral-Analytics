# 🚀 Multi-Modal AI Interview Engine
> **A real-time behavioral analytics platform using low-latency WebSocket streaming.**

---

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

An interactive, real-time AI interview simulator that captures webcam frames directly from a modern browser user interface and pipes them over a dual-channel **WebSocket** data lane to an asynchronous Python machine learning engine. The system computes physiological tracking signals instantly and returns automated telemetry indicators for **Emotion Extraction**, **Eye Contact Tracking**, and **Vocal Stress Diagnostics**.

---

## 🎨 System Highlights
* 🎛️ **Live Data Streaming:** Captures and serializes canvas image payloads over active port pipes every 1000ms.
* 📊 **Dynamic Telemetry:** Instantaneous dashboard indicator updates with auto-fluctuating state evaluation algorithms.
* 🔀 **Resilient Handling:** Core loops isolated with frame-level try-catch architecture to prevent packet drops from severing server connection nodes.

---

## 🛠️ Architecture Stack

### Presentation UI (Frontend)
* **Framework Engine:** Next.js (App Router Layout) optimized with Turbopack compilation compiling hooks.
* **Typing Definition:** Static TypeScript compilation wrappers.
* **Styling Framework:** Tailwind CSS with deep slate neon micro-interaction elements.
* **Media Controller:** React-Webcam API interface modules.

### Core Processing Hub (Backend)
* **Framework Routing:** FastAPI (High-performance asynchronous framework engine layout).
* **Network Host Engine:** Uvicorn (Standard toolkit build handling persistent connections).
* **Computational Processing:** Native matrix layout manipulations using numpy arrays.

---

## 📂 Structural Tree

```text
ai-resume/
├── backend/            # Python Machine Learning Backend
│   ├── venv/           # Sandbox execution environment configuration
│   └── main.py         # Main event pipeline and WebSocket listener loop
└── frontend/           # Next.js Presentation Client Application
    ├── app/
    │   └── page.tsx    # Live telemetry and layout tracking client matrix view
    └── package.json

```

---

## ⚙️ Running the Architecture Setup Locally

Follow this simple guide to run both processing components concurrently on your Windows terminal profile lanes.

### Terminal Window 1: Fire up the Machine Learning Server

Navigate directly into your active project backend directory path, launch your isolated sandbox environment variables, and let your server clear out duplicate ports before startup:

```bash
cd Desktop/ai-resume/backend
venv\Scripts\activate
npx kill-port 8000
python main.py

```

> 🛈 **Verification Anchor:** Your Python backend terminal environment must sit quietly on line text reading: `Uvicorn running on http://127.0.0.1:8000`. Leave this window running continuously.

### Terminal Window 2: Spin up the Client Interface

Open a completely separate presentation terminal pane environment workspace block to trigger the Next.js development client servers:

```bash
cd Desktop/ai-resume/frontend
npm run dev

```

> 🛈 **Verification Anchor:** Your frontend terminal space compiles asset objects instantly and provides route path parameters listening directly at `http://localhost:3000`.

---

## 🎮 Interacting with the Interface Layout

1. Launch your browser application environment step path directly towards: **`http://localhost:3000`**
2. Click the bright teal **Start Session** button anchor element at the header menu banner bar layout block.
3. Accept the security tracking alert asking for system video device authorization parameters.
4. Your panel view changes states instantly, triggering your custom live stream dashboard.
5. Move around, toggle head axis fields, or type text inside the chat widget to watch parameters stream across the socket nodes in real-time.

```

```
