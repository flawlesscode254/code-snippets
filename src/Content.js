import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="main-content">
      <h2
        style={{
          color: "rgb(14, 219, 14)",
        }}
      >
        Image Picker - with expo
      </h2>
      <h3
        style={{
          color: "white",
        }}
      >
        Getting started
      </h3>
      <div className="snip-one">
        <p
          style={{
            backgroundColor: "white",
            color: "rgb(8, 0, 29)",
          }}
        >
          expo install expo-image-picker
        </p>
      </div>
      <p
        style={{
          marginTop: 10,
        }}
      >
        All platforms are supported
      </p>
      <div>
        <p>
            
        </p>
      </div>
    </div>
  );
}

export default Content;
