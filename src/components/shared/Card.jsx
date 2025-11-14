import React from "react";

export default function Card({ title, subtitle, bullets = [] }) {
  return (
    <div className="card-glass p-5 rounded-xl h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{subtitle}</p>
        <ul className="mt-4 text-sm space-y-1 text-gray-400">
          {bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button className="px-3 py-2 rounded-md border border-white/6 text-sm">
          Learn more
        </button>
      </div>
    </div>
  );
}
