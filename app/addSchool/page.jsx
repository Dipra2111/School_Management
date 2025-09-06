"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "image") {
        formData.append("image", data.image[0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    const res = await fetch("/api/addSchool", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    setMessage(result.message || result.error);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200"
      >
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Add School</h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm text-bold font-bold text-gray-700">School Name</label>
<input
  {...register("name", { required: true })}
className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter School name"
/>
          {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Address</label>
         <input
  {...register("address", { required: true })}
className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter Address"
/>

        </div>

        {/* City & State */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold text-gray-700">City</label>
           <input
  {...register("city", { required: true })}
className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter City"
/>

          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">State</label>
            <input
  {...register("state", { required: true })}
className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter State"
/>

          </div>
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Contact Number</label>
          <input
            type="number"
            {...register("contact", { required: true, minLength: 10 })}
className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="10-digit contact"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Email</label>
          <input
            type="email"
            {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter email address"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700">School Image</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          🚀 Add School
        </button>

        {/* Message */}
        {message && (
          <p className={`mt-4 text-center font-medium ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
