import React, { useState } from "react";

export default function Chat({ user, doctor }) {
  const [messages, setMessages] = useState([
    { from: "doctor", text: "Karibu! Una swali lolote?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Here you would also send the message to the backend
  };

  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">
        Chat with your Doctor/Nurse
      </h3>
      <div className="h-40 overflow-y-auto border rounded mb-2 p-2 bg-gray-50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.from === "user" ? "text-right" : "text-left"}
          >
            <span
              className={
                m.from === "user"
                  ? "bg-pink-100 text-pink-800 px-2 py-1 rounded inline-block"
                  : "bg-gray-200 text-gray-800 px-2 py-1 rounded inline-block"
              }
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
