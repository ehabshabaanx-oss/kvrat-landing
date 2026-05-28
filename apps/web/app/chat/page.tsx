"use client";

import { useState } from "react";
import Kavroto from "@/components/kavroto/Kavroto";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border">

        {/* Header */}
        <div className="bg-slate-900 text-white p-6 text-center">
          <h1 className="text-xl font-bold">KVRAT Chat</h1>
        </div>

        {/* Bot */}
        <div className="flex justify-center py-6">
          <Kavroto state="welcome" />
        </div>

        {/* Messages */}
        <div className="p-6 min-h-[200px] space-y-2">
          {messages.length === 0 ? (
            <p className="text-slate-400 text-center">
              لا توجد رسائل بعد
            </p>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className="bg-slate-100 p-3 rounded-xl text-right"
              >
                {msg}
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="p-4 flex gap-2 border-t">
          <input
            className="flex-1 border rounded-xl px-4 py-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب رسالتك..."
          />

          <button
            onClick={sendMessage}
            className="bg-slate-900 text-white px-6 rounded-xl"
          >
            إرسال
          </button>
        </div>

      </div>

    </main>
  );
}