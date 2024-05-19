import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexcenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="yellow-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              Discover The<br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className=" flexColStart hero-desc">
            <motion.span
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className="secondaryText hero-text"
            >
              Find a variety of properties that matches your comfort
            </motion.span>
            <motion.span
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className="secondaryText hero-text"
            >
              Forget all difficulties in finding a residence for yourself
            </motion.span>
          </div>
        
          <button className="hero-button" >
            <Link to="/residencies">Explore The Luxury</Link>
          </button>
          
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText hero-stat">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1920} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText hero-stat">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} />
                <span>+</span>
              </span>
              <span className="secondaryText hero-stat">Awards Achieved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
