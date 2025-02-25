import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
  });

  const [txt, setButtonText] = useState("Enable Light Mode");

  const toggle = () => {
    setMyStyle((current) => ({
      color: current.color === "white" ? "black" : "white",
      backgroundColor: current.backgroundColor === "black" ? "white" : "black",
      border: current.color === "white" ? "1px solid black" : "1px solid white",
    }));

    setButtonText((prevText) =>
      prevText === "Enable Light Mode" ? "Enable Dark Mode" : "Enable Light Mode"
    );
  };

  const [count, setCount] = useState(0);

  const counter = () =>
  {
    setCount((prevCount) => prevCount + 1);
  };
  const clearcounter=()=>
  {
    setCount(0);
  }
  return (
    <>
      <div className="container my-5 p-3" style={myStyle}>
        <h1 style={{ color: myStyle.color }}>About Us</h1>
        <div className="accordion" id="accordionExample">
          {[1, 2, 3].map((num) => (
            <div className="accordion-item" style={myStyle} key={num}>
              <h2 className="accordion-header" id={`heading${num}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${num}`}
                  aria-expanded={num === 1 ? "true" : "false"}
                  aria-controls={`collapse${num}`}
                  style={{
                    backgroundColor: myStyle.backgroundColor,
                    color: myStyle.color,
                    border: myStyle.border,
                  }}
                >
                  Accordion Item #{num}
                </button>
              </h2>
              <div
                id={`collapse${num}`}
                className={`accordion-collapse collapse${num === 1 ? " show" : ""}`}
                aria-labelledby={`heading${num}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  <strong>
                    This is the {num === 1 ? "first" : num === 2 ? "second" : "third"} item's accordion body.
                  </strong>
                  It is {num === 1 ? "shown by default" : "hidden by default"}, until the collapse plugin adds the appropriate classes that we use to style each element.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <div className="d-flex justify-content-center align-items-center my-3">
        <button className="btn btn-primary" onClick={toggle}>{txt}</button>
      </div>

      {/* Counter Button - Shows Count Inside */}
      
      <div className="container text-center" style={{display: "flex", justifyContent: "space-evenly"}}>
        <button className="btn btn-success" onClick={counter}>Increase</button>
        <button className="btn btn-danger" onClick={clearcounter}>Clear</button>
        
      </div>
      
      <h3>Count:({count})</h3>
    </>
  );
}
