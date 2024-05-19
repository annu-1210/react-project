import React, { useState, useEffect } from "react";
import "./SIgnUp.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function SIgnUp() {
  const [input, setInput] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const validation = () => {
    let isProceed = true;
    let errorMessage = 'Please Enter Valid '
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!input.username) {
      isProceed = false;
      errorMessage += ' Username'
    }
    if (!input.name) {
      isProceed = false;
      errorMessage += ' name'
    }
    if (!input.email) {
      isProceed = false;
      errorMessage += ' email'
    }
    if (!input.password) {
      isProceed = false;
      errorMessage += ' password'
    } else if (input.password.length < 6) {
      toast.error("Password must be more than 6 characters");
    }else if(input.password.length > 10){
      toast.error("Password must be less than 10 characters");
    }

    if(!isProceed){
      toast.error(errorMessage);
    } else {
      if (!regex.test(input.email)) {
        toast.error("Please Enter Valid email type");
    }
  }
  return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      localStorage.setItem("user", JSON.stringify(input));

      toast.success("Registered Successfully!");
      navigate("/login");
    }
    else {
      toast.error("Please Enter Valid Credentials");
    }
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="s-wrapper">
      <div className="flexCenter innerWidth s-container" data-aos="flip-right">
        <form onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <div className="input-box">
            <input
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="username"
            />
            <FaUser className="s-icon" />
          </div>
          <div className="input-box">
            <input
              name="name"
              value={input.name}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
              type="text"
              placeholder="enter name"
            />
            <FaUser className="s-icon" />
          </div>
          <div className="input-box">
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              placeholder="enter email"
            />
            <MdEmail className="s-icon" />
          </div>

          <div className="input-box">
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="create password"
            />
            <FaLock className="s-icon" />
          </div>
          <div className="checkbox-forget">
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Correct Information
            </label>
          </div>
          <button type="submit" className="s-button">
            Signup
          </button>
          <div className="login">
            <span>
              Already Have an Account. <a href="/login"> Login Here</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SIgnUp;
