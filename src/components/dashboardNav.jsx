import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Auth } from "../firebase/firebase";

const DashboardNav = ({ user }) => {
  async function userLogOut() {
    signOut(Auth);
    console.log("User Logged Out");
  }
  const [dashboardConfigure, setDashboardConfigure] = useState(false);
  return (
    <nav className="dashboard__nav">
      <div className="row dashboard__nav__row">
        <span className="dashboard__nav__logo">{`[ SpendW!se ]`}</span>
        <div className="dashboard__nav__links">
          <a href="#dashboard" className="dashboard__nav__link">
            Dashboard
          </a>
          <span
            onClick={() => setDashboardConfigure(true)}
            className="dashboard__nav__profile"
          >
            {user?.email[0]}
          </span>
          <div
            className={`dashboard__nav__link-configure ${dashboardConfigure && "popOut"}`}
          >
            <button className="dashboard__nav__settings">Settings</button>
            <button
              className="dashboard__nav__logout"
              onClick={() => userLogOut()}
            >
              Log Out
            </button>
          </div>
          <FontAwesomeIcon
            icon={faClose}
            className={`dashboard__nav__profile__close ${dashboardConfigure && "popUp"}`}
            onClick={() => setDashboardConfigure(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
