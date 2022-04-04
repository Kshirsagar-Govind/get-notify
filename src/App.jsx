import React, { useState, useEffect } from "react";
import "./style.css";

function App({ type, text, pos }) {
  const [ className1, set_className1 ] = useState();
  useEffect(() => {
    let position = pos ? pos : "RightTop";
    let notify_type = type ? type : "standard";
    let className = "notify-container " + position + " " + notify_type;
    set_className1(className);
  }, []);

  const closeIt = () => {
    document.getElementById(className1).style.display = "none";
  };
  return (
    <div id={className1} className={className1}>
      <div className="notify-indicator " />
      <div className="notify-text">
        <h3>{text ? text : "Notify"}</h3>
      </div>
      <div className="notify-cross" onClick={() => closeIt()}>
        <h2>X</h2>
      </div>
    </div>
  );
}

export default App;
