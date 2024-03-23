import React from "react";
import "./main.css";
import { cards } from "./cardData";
const Main = () => {
  return (
    <div className="MainComponent">
      {/* ________input component ___________ */}
      <div className="FormMain">
        <input type="text" className="text" placeholder="comment" />
        <input type="submit" className="submit" />
      </div>
      {/* ________header component ____________ */}
      <div className="main-header">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      {/* __________card component ______________ */}
      <div className="MainCard">
        {cards.map((item) => {
          return (
            <div key={item} className="card">
              <div>
                <img src={item.img} alt="" />
              </div>
              <h3>{item.h1}</h3>
              <p>{item.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
