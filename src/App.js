import React, { useState } from "react";
import "./App.css";
import Routes from "./routes";

const App = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:5000/api/data'); // Replace with your Flask API endpoint
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //       console.log(jsonData);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const a = e.target[0].value;
    const b = e.target[1].value;
    try {
      // Use relative URL for API requests to work in both development and production
      const response = await fetch(`/shortd/${a}/${b}`);
      const jsonData = await response.json();
      setData(jsonData);

      // Only display the route if we successfully got data
      setDisplay(true);
      e.target[0].value = "";
      e.target[1].value = "";
    } catch (error) {
      console.error("Error:", error);
      // Show user-friendly error message
      alert("An error occurred while fetching the path. Please try again.");

      // Don't display the route if there was an error
      setDisplay(false);
    }
  };

  return (
    <div className="mainContainer">
      <div className="projectHeader">CampusWay</div>

      <div className="Maps">
        <div className="satMap"></div>
        <div className="outMap"></div>
      </div>

      <div className="formInput">
        <form method="post" onSubmit={onsubmitHandler} className="formGroup">
          <div className="sourceForm">
            <label for="sorce">Source</label>
            <input
              id="source"
              name="a"
              type="number"
              min={1}
              max={64}
              placeholder="Enter Source"
              className="sourceInput"
              required
            ></input>
          </div>
          <div className="destinationForm">
            <label for="destination">Destination</label>
            <input
              id="destination"
              name="b"
              type="number"
              min={1}
              max={64}
              placeholder="Enter Destination"
              className="destinationInput"
              required
            ></input>
          </div>
          <button className="formButton">Submit</button>
        </form>
      </div>

      <div className="projectDisplay">
        {display && <Routes dataPoint={data} />}
      </div>
    </div>
  );
};

export default App;
