import React from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import singImg from "../../img/sign-up-form.png";
import "../../css/login.css";

const Login = () => {

  const handleSubmit=async ()=>{
    const result=await axios.get("http://localhost:3002/");
  }

  return (
    <>
      <Navbar />
          <div className="contain">
          <div className="left-side">
                <img src={singImg} ></img>
            </div> 
        <div className="cardlogin">
            <div className="form">         
            <div className="right-side">
              <div className="hello">
                <h2>Hello Again!</h2>
                <h4>Welcome back you have been missed! </h4>
              </div>
              <form>
                <div className="input_text">
                  <Input type="text" placeholder="Enter Email" name="email" />
                </div>
                <div className="input_text">
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                  />
                </div>
                <div className="recovery">
                  <p>Recovery Password</p>
                </div>
                <div>
                  <button onClick="handleSubmit()">Sign in</button>
                </div>
              </form>
              <div className="register">
                <p>
                  Not a member? <a href="/"> Register Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
