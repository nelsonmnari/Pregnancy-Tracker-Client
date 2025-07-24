import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "mother",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      let data = {};
      const text = await res.text();
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        throw new Error("Invalid server response");
      }
      if (!res.ok) throw new Error(data.message || "Registration failed");
      setSuccess("Registration successful! You can now log in.");
      setForm({
        name: "",
        email: "",
        password: "",
        role: "mother",
        location: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Input
            label="Role (mother/midwife)"
            name="role"
            type="text"
            value={form.role}
            onChange={handleChange}
            required
          />
          <Input
            label="Location"
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className={`w-full mt-4${
              loading ? " opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
          {error && (
            <div className="text-red-600 mt-2 text-center">{error}</div>
          )}
          {success && (
            <div className="text-green-600 mt-2 text-center">{success}</div>
          )}
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-pink-600 hover:underline font-semibold"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
