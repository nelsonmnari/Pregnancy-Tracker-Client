import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

export default function PregnancyTracker() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Pregnancy Tracker</h1>
      <Card>
        <form>
          <Input label="Due Date" type="date" />
          <Input label="Weeks Pregnant" type="number" min="1" max="40" />
          <Input label="Notes" type="text" />
          <Button type="submit">Save</Button>
        </form>
      </Card>
    </MainLayout>
  );
}
