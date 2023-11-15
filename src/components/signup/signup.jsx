import React from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import "../../css/signup.css";
import singImg from "../../img/sign-up-form.png";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="cardlogin">
          <div className="form">
            <div className="right-side">
              <div className="hello">
                <h2>Hello!</h2>
                <h4>Welcome to ErrorlessStudy! </h4>
              </div>
              <form>
                <div className="input_text">
                  <Input type="text" placeholder="Enter Full Name" name="fullname" />
                </div>
                <div className="input_text">
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                  />
                </div>
                <div className="input_text">
                  <Input
                    type="number"
                    placeholder="Enter Phone No"
                    name="phone"
                  />
                </div>
                <div className="input_text">
                  <Input
                    type="text"
                    placeholder="Enter College Name"
                    name="clgname"
                  />
                </div>
                <div className="input_text">
                  <Input
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                  />
                </div>
                <div className="sign-btn">
                  <Button buttonSize="btn--full">Regiter</Button>
                </div>
              </form>
              <div className="register">
                <p>
                  have a member? <a href="/"> Login</a>
                </p>
              </div>
            </div>
          </div>
              </div>
              <div className="left-side">
                <img src={singImg} ></img>
            </div> 
      </div>
      <Footer />
    </>
  );
};

export default Signup;
