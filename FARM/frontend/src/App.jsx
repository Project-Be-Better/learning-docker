import React, { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the FastAPI backend using axios
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/`);

        // Set the fetched data in state
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  {
    console.log(import.meta.env.VITE_API_KEY);
  }

  return (
    <>
      <div>
        <h1>{import.meta.env.VITE_API_URL}</h1>
        <h1>{import.meta.env.VITE_NODE_ENV}</h1>
        <h1>{import.meta.env.VITE_API_KEY}</h1>
        <div>
          <h1>FastAPI Data Fetch Example</h1>
          {data ? (
            <div>
              <p>{data.message}</p>
              <p>Environment: {data.env.join(", ")}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
