import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Feature from "../ui/Feature";
import {
  faBullseye,
  faCalendarCheck,
  faChartSimple,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCloud } from "@fortawesome/free-regular-svg-icons";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row features__row">
          <h3 className="features__title">SpendW!se Features</h3>
          <p className="features__para">
            Powerful features to manage your money with confidence
          </p>
          <span className="features__span">
            SpendWise helps you track expenses, set budgets, and build better
            habits--every day.
          </span>
          <div className="features__wrapper">
            <Feature
              icon={
                <FontAwesomeIcon icon={faCalendarCheck} className="feat-icon" />
              }
              title={"Track Expenses"}
              para={"Easily log and categorize your daily expenses in seconds."}
            />
            <Feature
              icon={<FontAwesomeIcon icon={faWallet} className="feat-icon" />}
              title={"Set Budgets"}
              para={"Create budgets for categories and stay on track."}
            />
            <Feature
              icon={
                <FontAwesomeIcon icon={faChartSimple} className="feat-icon" />
              }
              title={"Visual Reports"}
              para={
                "Understand your spending with beautiul charts and insightful reports!"
              }
            />
            <Feature
              icon={<FontAwesomeIcon icon={faBell} className="feat-icon" />}
              title={"Smart Alerts"}
              para={"Get notified when you're close to your budget limits."}
            />
            <Feature
              icon={<FontAwesomeIcon icon={faBullseye} className="feat-icon" />}
              title={"Savings Goals"}
              para={
                "Set goals, track progress, and achieve your savings faster."
              }
            />
            <Feature
              icon={<FontAwesomeIcon icon={faCloud} className="feat-icon" />}
              title={"Secure & Sync"}
              para={
                "Your data is secure and accessible across all your devices."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
