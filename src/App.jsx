import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [msg, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); // Use e to prevent default form submission

    if (!weight || !height) {
      alert("Please enter valid data");
    } else {
      const parsedWeight = parseFloat(weight);
      const parsedHeight = parseFloat(height);

      // Calculate BMI
      const bmiValue = ((parsedWeight / (parsedHeight * parsedHeight)) * 703).toFixed(2);
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
    <div className="wrapper ">
      <h2>BMI CALCULATOR</h2>
      <form onSubmit={onSubmit}>
        <div className="formcontent">
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            type="text"
            id="weight"
            name="weight"
            placeholder="Enter your weight in pounds"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height">Height (inches)</label>
          <input
            type="text"
            id="height"
            name="height"
            placeholder="Enter your height in inches"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="submit" type="submit">
            Submit
          </button>
          <button className="reload" type="button" onClick={onReload}>
            Reload
          </button>
        </div>
        <div className="msg">
          <h4>The BMI is: {bmi}</h4>
          <p>You are: {msg}</p>
        </div>
      </form>
    </div>
  );
};

export default App;
