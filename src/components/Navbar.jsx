import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-pink-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <div className="font-bold text-lg">MamaCare</div>
      <div>{/* Add navigation links or user info here */}</div>
    </nav>
  );
}
