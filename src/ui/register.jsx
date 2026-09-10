import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const { addClass2, setAddClass2, setSignUp } = useContext(AppContext);
  const [addClass, setAddClass] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  async function userLogIn(event) {
    event.preventDefault();

    try {
      const existingUser = await signInWithEmailAndPassword(
        Auth,
        loginEmail,
        loginPassword,
      );
      console.log(existingUser);
      console.log("User Logged In");
      setAddClass2(false);
      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <>
      <section
        id="register"
        className={`register ${addClass2 && "registerActive"}`}
      >
        <div className="container login__container">
          <div className="row login__row">
            <form onSubmit={userLogIn} className="login__form">
              <h1 className="login__form__title">
                Log into your account with
                <span className="login__form__span"> SpendWise</span>
              </h1>
              <button
                type="button"
                className="login__form__close"
                onClick={() => setAddClass2(false)}
              >
                <FontAwesomeIcon icon={faClose} className="login__form-icon" />
              </button>
              <input
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                type="email"
                className="login__form__input"
                placeholder="Enter Email"
                required
              />
              <input
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                type="password"
                className="login__form__input"
                placeholder="Enter Password"
                required
              />
              <span className="login__form__span-2">
                <code>Don't have an account already?</code>
                <button
                  type="button"
                  className="login__form__span-2__btn"
                  onClick={() => {
                    (setAddClass2(false), setSignUp(true));
                  }}
                >
                  Sign Up
                </button>
              </span>
              <button
                type="submit"
                onClick={() => setAddClass(true)}
                className={`login__form__btn ${addClass && "btnAnimate"}`}
              >
                Log In
              </button>
            </form>
            <div
              className="login__form-overlay"
              onClick={() => {
                setAddClass2(false);
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
