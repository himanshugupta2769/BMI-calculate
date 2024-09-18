import React, { useState } from "react";
import './App.css'; // Ensure Tailwind CSS is included

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [msg, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!weight || !height) {
      alert("Please enter valid data");
    } else {
      const parsedWeight = parseFloat(weight);
      const parsedHeight = parseFloat(height);

      // Convert height from cm to meters
      const heightInMeters = parsedHeight / 100;

      // Calculate BMI using metric units (kg/m^2)
      const bmiValue = (parsedWeight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Set message
      if (bmiValue < 18.5) {
        setMsg("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMsg("Healthy");
      } else {
        setMsg("Overweight");
      }
    }
  };

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">BMI Calculator</h2>
        <form onSubmit={onSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="weight" className="block text-gray-700 font-semibold">Weight (kg)</label>
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder="Enter your weight in kilograms"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-gray-700 font-semibold">Height (cm)</label>
              <input
                type="text"
                id="height"
                name="height"
                placeholder="Enter your height in centimeters"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-between mb-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onReload}
              className="bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reload
            </button>
          </div>
          {bmi && (
            <div className="text-center mt-4">
              <h4 className="text-lg font-semibold text-gray-800">The BMI is: <span className="font-bold text-blue-500">{bmi}</span></h4>
              <p className="text-md text-gray-600">You are: <span className="font-bold text-green-500">{msg}</span></p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
