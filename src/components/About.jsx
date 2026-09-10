import React from "react";
import aboutImg from "../assets/OIP (1).webp";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row about__row">
          <div className="about__left">
            <h2 className="about__title">What is SpendWise even About?</h2>
            <p className="about__para">
              SpendWise, is a free to use <span>personal expense tracker</span>;
              allowing users to <span>manage bills</span>,{" "}
              <span>budget spend</span>, and{" "}
              <span> calculate their expenses</span>! Bills and other expenses
              can definitely vary depending on the person, so this web is to
              help those who need organization when it comes to managing all of
              their expenses.
            </p>
          </div>
          <figure className="about__right__img__wrapper">
            <img src={aboutImg} alt="" className="about__right__img" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
