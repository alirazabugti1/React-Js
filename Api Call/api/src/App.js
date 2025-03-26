import React, { useEffect, useState } from "react";

function App()
{

  const URL = "http://127.0.0.1:5000/"; //Flask Api
  const [data, setData] = useState(""); 

  useEffect(() =>
  {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error("API call failed:", error));
  }, []);

  return (
    <div>
      <h1>API Response</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
