import { faHome, faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { setSignUp, setAddClass2 } = useContext(AppContext);
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__logo__title__wrapper">
          <span className="nav__logo__title">
            Spend<span className="primal">W!se</span>
          </span>
        </div>
        <div className="nav__links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link to="" onClick={() => setAddClass2(true)}>
            Login
          </Link>
        </div>
        <button className="signup" onClick={() => setSignUp(true)}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Nav;
