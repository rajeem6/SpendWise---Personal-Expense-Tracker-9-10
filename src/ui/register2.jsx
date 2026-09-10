import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Auth } from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Register2 = () => {
  const { signUp, setSignUp, setAddClass, addClass, setAddClass2, user } =
    useContext(AppContext);

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  async function authSignUp(event) {
    event.preventDefault();

    try {
      const newUser = await createUserWithEmailAndPassword(
        Auth,
        signUpEmail,
        signUpPassword,
      );
      setSignUp(false);
      setSignUpEmail("");
      setSignUpPassword("");
      console.log(newUser.user);
      console.log("User Signed Up");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <section id="signUp" className={`signUp ${signUp && "signUpActive"}`}>
      <div className="container signUp__container">
        <div className="row signUp__row">
          <form onSubmit={authSignUp} className="signUp__form">
            <h1 className="signUp__form__title">
              Sign Up and get started with
              <span className="signUp__form__span"> SpendWise</span>
            </h1>
            <button
              type="button"
              className="signUp__form__close"
              onClick={() => setSignUp(false)}
            >
              <FontAwesomeIcon icon={faClose} className="signUp__form-icon" />
            </button>
            <input
              value={signUpEmail}
              onChange={(event) => setSignUpEmail(event.target.value)}
              type="email"
              className="signUp__form__input"
              placeholder="Enter Email"
              required
            />
            <input
              value={signUpPassword}
              onChange={(event) => setSignUpPassword(event.target.value)}
              type="password"
              className="signUp__form__input"
              placeholder="Enter Password"
              required
            />
            <span className="signUp__form__span-2">
              <code>Already have an existing account?</code>
              <button
                type="button"
                className="signUp__form__span-2__btn"
                onClick={() => {
                  (setSignUp(false), setAddClass2(true));
                }}
              >
                Log !n
              </button>
            </span>
            <button type="submit" className="signUp__form__btn">
              Sign Up
            </button>
          </form>
          <div
            className="signUp__form-overlay"
            onClick={() => {
              setSignUp(false);
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Register2;
