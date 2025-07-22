import React from "react";

export default function Input({ label, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 font-medium text-gray-700">{label}</label>
      )}
      <input
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        {...props}
      />
    </div>
  );
}
