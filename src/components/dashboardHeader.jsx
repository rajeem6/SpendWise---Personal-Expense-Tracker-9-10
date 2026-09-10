import React from "react";

const DashboardHeader = () => {
  return (
    <header className="dashboard__header">
      <div className="container dashboard__header__container">
        <div className="row dashboard__header__row">
          <span className="dashboard__header__subtitle">
            Introducing, SpendWise's
          </span>
          <h1 className="dashboard__header__title">Dashboard</h1>
          <p className="dashboard__header__para">
            Convenient Expense Tracker Overview
          </p>
          <span className="dashboard__header__span">
            Get Started
            <a href="#dashboard" className="dashboard__header__primal">
              Below.
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
