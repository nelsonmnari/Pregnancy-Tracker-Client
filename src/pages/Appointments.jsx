import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Appointments() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <Card className="mb-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold">Midwife Jane</div>
            <div className="text-sm text-gray-500">July 30, 2025, 10:00 AM</div>
            <div className="text-xs text-green-600">Confirmed</div>
          </div>
          <Button>Cancel</Button>
        </div>
      </Card>
      <Button>Book New Appointment</Button>
    </MainLayout>
  );
}
