import React from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Button type="submit" className="w-full mt-4">
            Login
          </Button>
        </form>
      </div>
    </MainLayout>
  );
}
