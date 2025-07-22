import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 rounded bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}
