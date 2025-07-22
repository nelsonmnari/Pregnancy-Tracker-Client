import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Karibu MamaCare!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="font-semibold text-pink-600">Pregnancy Progress</div>
          {/* Progress bar, due date, etc. */}
          <div className="mt-2 h-4 bg-gray-200 rounded">
            <div
              className="h-4 bg-pink-500 rounded"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="text-sm mt-1">24 weeks / 40 weeks</div>
        </Card>
        <Card>
          <div className="font-semibold text-pink-600">Next Appointment</div>
          <div className="mt-2">July 30, 2025 with Midwife Jane</div>
        </Card>
      </div>
    </MainLayout>
  );
}
