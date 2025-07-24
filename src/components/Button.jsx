import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-pink-600 text-white font-semibold hover:bg-pink-700 transition ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
