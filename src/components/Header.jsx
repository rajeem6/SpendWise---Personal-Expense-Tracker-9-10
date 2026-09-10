import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row header__row">
          <div className="header__box">
            <span className="header__subtitle">Welcome to</span>
            <h1 className="header__title">SpendWise!</h1>
            <p className="header__para">
              The web where you can track your expenses and spend, wisely.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
