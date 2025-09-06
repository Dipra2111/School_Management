"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/getSchools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      {schools.map((school) => (
        <div
          key={school.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          {/* School Image */}
          <img
            src={school.image}
            alt={school.name}
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {school.name}
            </h2>
            <p className="text-gray-600 text-sm mb-1">
              📍 {school.address}, {school.city}, {school.state}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              📞 {school.contact}
            </p>
            <p className="text-gray-600 text-sm mb-3">
              ✉️ {school.email_id}
            </p>

            <button className="w-full py-2 mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
