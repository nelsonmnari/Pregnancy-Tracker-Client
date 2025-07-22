import React from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form>
          <Input label="Name" type="text" />
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Input label="Role (mother/midwife)" type="text" />
          <Input label="Location" type="text" />
          <Button type="submit" className="w-full mt-4">
            Register
          </Button>
        </form>
      </div>
    </MainLayout>
  );
}
