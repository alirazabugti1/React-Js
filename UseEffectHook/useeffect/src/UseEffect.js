import { useState, useEffect } from "react";

function DarkModeToggle() {
    
  const [darkMode, setDarkMode] = useState(false);

  // 🌟 useEffect to Update Background Color
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]); // Jab darkMode change hoga, tab chalega

  return (
    <div>
      <h2>Dark Mode Example</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
