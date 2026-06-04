"use client";

import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";

export default function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [aiMetrics, setAiMetrics] = useState({ emotion: "--", eye_contact: "--", vocal_stress: "--" });
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! Please upload your resume to begin the session, or simply introduce yourself." }
  ]);

  const webcamRef = useRef<Webcam>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const streamIntervalRef = useRef<any>(null);

  useEffect(() => {
    if (isRecording) {
      // Establish direct connection to local host IP
      wsRef.current = new WebSocket("ws://127.0.0.1:8000/ws/video");

      wsRef.current.onopen = () => {
        console.log("Connected to AI Engine successfully.");
        
        // Stream frame data drops to the server every 1 second
        streamIntervalRef.current = setInterval(() => {
          if (webcamRef.current && wsRef.current?.readyState === WebSocket.OPEN) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
              fetch(imageSrc)
                .then(res => res.blob())
                .then(blob => wsRef.current?.send(blob))
                .catch(err => console.log("Stream sync tick:", err));
            }
          }
        }, 1000);
      };

      wsRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setAiMetrics(data);
      };

      wsRef.current.onerror = (err) => {
        console.error("WebSocket connection encountered an error context.", err);
      };
    } else {
      if (wsRef.current) wsRef.current.close();
      if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
      setAiMetrics({ emotion: "--", eye_contact: "--", vocal_stress: "--" });
    }

    return () => {
      if (wsRef.current) wsRef.current.close();
      if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
    };
  }, [isRecording]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { sender: "user", text: inputText }]);
    setInputText("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: "That is interesting! Can you elaborate on the technical challenges you faced?" }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <header className="mb-8 border-b border-slate-800 pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">AI Interview Engine</h1>
          <p className="text-sm text-slate-400 mt-1">Multi-Modal Analytics Dashboard</p>
        </div>
        <button 
          onClick={() => setIsRecording(!isRecording)}
          className={`px-6 py-2.5 rounded-lg font-bold transition ${isRecording ? 'bg-red-500/10 text-red-500 border border-red-500/50' : 'bg-teal-500 text-slate-950'}`}
        >
          {isRecording ? "End Interview" : "Start Session"}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="aspect-video bg-black rounded-lg border border-slate-800 flex items-center justify-center relative overflow-hidden">
              {isRecording ? (
                <>
                  <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 px-2 py-1 rounded border border-slate-800">
                    <span className="animate-pulse w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="text-xs font-bold text-red-500 tracking-widest">LIVE DATA STREAM</span>
                  </div>
                </>
              ) : (
                <p className="text-slate-600 font-medium">Camera offline. Click "Start Session".</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-500 font-mono block mb-1">EMOTION</span>
              <span className="text-xl font-bold text-teal-400">{aiMetrics.emotion}</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-500 font-mono block mb-1">EYE CONTACT</span>
              <span className="text-xl font-bold text-blue-400">{aiMetrics.eye_contact}</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-500 font-mono block mb-1">VOCAL STRESS</span>
              <span className="text-xl font-bold text-emerald-400">{aiMetrics.vocal_stress}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col h-[600px]">
          <h2 className="text-lg font-bold text-slate-200 mb-4 border-b border-slate-800 pb-2">Interview Transcript</h2>
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
             {messages.map((msg, index) => (
               <div key={index} className={`p-4 rounded-lg border ${msg.sender === 'ai' ? 'bg-slate-800/50 border-slate-700/50' : 'bg-teal-900/20 border-teal-800/30 ml-8'}`}>
                 <span className={`text-xs font-bold block mb-1 ${msg.sender === 'ai' ? 'text-teal-400' : 'text-blue-400'}`}>{msg.sender === 'ai' ? 'AI Recruiter' : 'You'}</span>
                 <p className="text-sm text-slate-300">{msg.text}</p>
               </div>
             ))}
          </div>
          <div className="mt-auto">
             <textarea 
               value={inputText}
               onChange={(e) => setInputText(e.target.value)}
               onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
               placeholder="Type your response here..."
               className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm focus:outline-none focus:border-teal-500 text-slate-200 resize-none h-24"
             />
             <button onClick={handleSendMessage} disabled={!inputText.trim()} className="w-full mt-2 bg-teal-600 hover:bg-teal-500 disabled:bg-slate-800 disabled:text-slate-500 text-white py-2 rounded-lg text-sm font-semibold transition">Submit Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
}