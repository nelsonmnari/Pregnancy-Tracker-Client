import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Mock data for demo
    setPatients([
      { id: 1, name: "Amina Juma", weeks: 24 },
      { id: 2, name: "Grace Wanjiku", weeks: 18 },
    ]);
    setAppointments([
      { id: 1, patient: "Amina Juma", date: "2025-07-30" },
      { id: 2, patient: "Grace Wanjiku", date: "2025-08-02" },
    ]);
    setMessages([
      { id: 1, from: "Amina Juma", text: "Nina maumivu ya mgongo." },
      { id: 2, from: "Grace Wanjiku", text: "Nina swali kuhusu dawa." },
    ]);
  }, []);

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Doctor/Nurse Dashboard</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Patients</h2>
          <ul className="list-disc pl-5">
            {patients.map((p) => (
              <li key={p.id}>
                {p.name} - {p.weeks} weeks pregnant
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Upcoming Appointments</h2>
          <ul className="list-disc pl-5">
            {appointments.map((a) => (
              <li key={a.id}>
                {a.date} - {a.patient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Messages from Patients</h2>
          <ul className="list-disc pl-5">
            {messages.map((m) => (
              <li key={m.id}>
                <span className="font-bold">{m.from}:</span> {m.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
