import React from "react";
import "./style/style.css";
const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="pl">
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__text">Loading…</div>
      </div>
    </div>
  );
};

export default Loading;
