import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
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
      const res = await fetch("/api/auth/login", {
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
      if (!res.ok) throw new Error(data.message || "Login failed");
      setSuccess("Login successful!");
      // Save token and user info to localStorage for dynamic dashboard
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000); // short delay to show success message
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
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
            <Button
              type="submit"
              className={`w-full mt-4${
                loading ? " opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
            {error && (
              <div className="text-red-600 mt-2 text-center">{error}</div>
            )}
            {success && (
              <div className="text-green-600 mt-2 text-center">{success}</div>
            )}
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-pink-600 hover:underline font-semibold"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
