import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DashboardFooter = () => {
  return (
    <div className="dashboard__footer">
      <span className="dashboard__footer-span footer__span-2">
        <FontAwesomeIcon icon={faShieldHalved} className="foot-icon" /> Your
        financial journey. Smarter, simpler, with
        <span className="foot-span">SpendWise</span>.
      </span>
      <div className="dashboard__footer__xtra footer-xtra">
        <div className="dashboard__row__footer__row row footer__row-2">
          <h1 className="dashboard__footer__title footer__title">SpendW!se</h1>
          <span className="foot__row-2__span">© 2026</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
