import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 to-pink-300">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-4">
          Karibu MamaCare
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          A modern platform for expectant mothers to track pregnancy, receive
          health advice in Swahili, and book appointments with certified
          midwives.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="px-6 py-2 rounded bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 rounded border border-pink-600 text-pink-700 font-semibold hover:bg-pink-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MamaCare. All rights reserved.
      </footer>
    </div>
  );
}
