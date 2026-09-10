import { faShield, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const LandingFooter = () => {
  const { signUp, setSignUp, setAddClass2 } = useContext(AppContext);
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <span className="footer__span">Your expenses, always with you.</span>
          <p className="footer__para">Create a free account to get started!</p>
          <div className="footer__buttons">
            <button
              className="footer-btn footer__signup"
              onClick={() => setSignUp(true)}
            >
              Sign Up!
            </button>
            <button
              className="footer-btn footer__login"
              onClick={() => setAddClass2(true)}
            >
              Login!
            </button>
          </div>
          <span className="footer__span-2">
            <FontAwesomeIcon icon={faShieldHalved} className="foot-icon" /> Your
            financial journey. Smarter, simpler, with
            <span className="foot-span">SpendWise</span>.
          </span>
          <div className="footer-xtra">
            <div className="row footer__row-2">
              <h1 className="footer__title">SpendW!se</h1>
              <span className="foot__row-2__span">© 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
