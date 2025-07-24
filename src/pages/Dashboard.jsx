import React, { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL || "/api";

// AI Assistant with real API call
function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hello! I am your AI Health Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/ai/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: data.answer || "Sorry, I could not answer that." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "Sorry, there was an error contacting the AI service.",
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };
  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">AI Health Assistant</h3>
      <div className="h-40 overflow-y-auto border rounded mb-2 p-2 bg-gray-50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.from === "user" ? "text-right" : "text-left"}
          >
            <span
              className={
                m.from === "user"
                  ? "bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block"
                  : "bg-gray-200 text-gray-800 px-2 py-1 rounded inline-block"
              }
            >
              {m.text}
            </span>
          </div>
        ))}
        {loading && <div className="text-blue-600 mt-2">AI is typing...</div>}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a health question..."
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}

// Document upload handler (mocked for demo)
function DocumentUpload({ user }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a file.");
    // Here you would upload the file to the backend
    setMessage("Document sent to your doctor/nurse!");
    setFile(null);
  };
  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">
        Upload Prescription/Document
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="file" onChange={handleChange} className="" />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700"
        >
          Send to Doctor/Nurse
        </button>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </div>
  );
}
import MainLayout from "../layouts/MainLayout";
import Chat from "../components/Chat";
// Simple Swahili to English dictionary for demo
const swahiliToEnglish = {
  "Kunywa maji mengi kila siku.": "Drink plenty of water every day.",
  "Pumzika vya kutosha na kula chakula bora.":
    "Get enough rest and eat nutritious food.",
};

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [advice, setAdvice] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [pregnancy, setPregnancy] = useState(null);

  useEffect(() => {
    // Load user from localStorage
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
    // Fetch pregnancy info, appointments, and advice (mocked for now)
    setPregnancy({ weeks: 24, dueDate: "2025-11-01" });
    setAppointments([
      { id: 1, date: "2025-07-30", midwife: "Jane" },
      { id: 2, date: "2025-08-15", midwife: "Mary" },
    ]);
    setAdvice([
      { id: 1, text: "Kunywa maji mengi kila siku." },
      { id: 2, text: "Pumzika vya kutosha na kula chakula bora." },
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Karibu, {user ? user.name : "Mama"}!
          </h1>
          <button
            onClick={handleLogout}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {/* vertical stack with spacing */}
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Pregnancy Tracking</h2>
            {pregnancy ? (
              <>
                <div className="text-lg">
                  Weeks Pregnant:{" "}
                  <span className="font-bold">{pregnancy.weeks}</span>
                </div>
                <div className="text-lg">
                  Due Date:{" "}
                  <span className="font-bold">{pregnancy.dueDate}</span>
                </div>
                <div className="mt-2 h-4 bg-gray-200 rounded">
                  <div
                    className="h-4 bg-pink-500 rounded"
                    style={{
                      width: `${Math.round((pregnancy.weeks / 40) * 100)}%`,
                    }}
                  ></div>
                </div>
                <div className="text-sm mt-1">
                  {pregnancy.weeks} weeks / 40 weeks
                </div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold mb-2">
              Upcoming Appointments
            </h2>
            <ul className="list-disc pl-5">
              {appointments.length ? (
                appointments.map((a) => (
                  <li key={a.id} className="mb-1">
                    {a.date} - {a.midwife}
                  </li>
                ))
              ) : (
                <li>No appointments found.</li>
              )}
            </ul>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold mb-2">
              Health Advice (Swahili)
            </h2>
            <ul className="list-disc pl-5">
              {advice.length ? (
                advice.map((a) => (
                  <li key={a.id}>
                    <span>{a.text}</span>
                    {swahiliToEnglish[a.text] && (
                      <span className="block text-sm text-gray-500 mt-1">
                        <span className="font-semibold">English:</span>{" "}
                        {swahiliToEnglish[a.text]}
                      </span>
                    )}
                  </li>
                ))
              ) : (
                <li>No advice found.</li>
              )}
            </ul>
          </div>
          <div>
            {/* Chat with doctor/nurse */}
            <Chat user={user} doctor={{ name: "Dr. Jane" }} />
          </div>
          <div>
            {/* Document upload */}
            <DocumentUpload user={user} />
          </div>
          <div>
            {/* AI Assistant */}
            <AIAssistant />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
