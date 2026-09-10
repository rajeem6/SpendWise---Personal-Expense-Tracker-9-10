import React from "react";

const Feature = ({ icon, title, para }) => {
  return (
    <div className="feature">
      <div className="feature__icon">{icon}</div>
      <div className="feature__text">
        <h4 className="feature__title">{title}</h4>
        <p className="feature__para">{para}</p>
      </div>
    </div>
  );
};

export default Feature;
