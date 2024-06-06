import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
// import "./../../index.scss";
import "./auth.scss";
import Model from "../../components/model/Model";
import { useState } from "react";
import { VscQuestion } from "react-icons/vsc";
import { Day, Month } from "../../faker/auth";

const years = Array.from({length: 100}, (a, i) => new Date().getFullYear() - i);

const Auth = () => {
  const [modal, setModal] = useState(false);
  const [gender, setGender] = useState("");
  return (
    <>
      <Meta title="Facebook log in or sing up" />
     { modal &&
       
        <Model hideModal={setModal} > 
          <form action="" className="fb-sing-up-form">
            <div className="fb-modal-input">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Surname" />
            </div>
            <input type="text" placeholder="Email Address or Phone Number" />
            <input type="password" placeholder="Password" />
            <div className="register-extra-fields">
              <div className="register-title">
                <span>Date of birth <VscQuestion /></span>
              </div>
              <div className="register-extra">
                <select name="" id="">
                  {Day?.map((item, index) => 
                    <option value="{item}" key={index} selected={new Date().getDay() == item - 2 ? true : false}>{item}</option>
                  )}
                  
                </select>
                <select name="" id="">
                  {Month?.map((item, index) => 
                    <option value="{item}" key={index} selected={new Date().getMonth() == index ? true : false}>{item}</option>
                  )}
                </select>
                <select name="" id="">
                  {years?.map((item, index) => 
                    <option value="{item}" key={index}>{item}</option>
                  )}
                </select>
              </div>
              <div className="register-extra">
                <label>
                  <span>Female</span>
                  <input name="gender" type="radio" onChange={() => setGender('Female')} />
                </label>
                <label>
                  <span>Male</span>
                  <input name="gender" type="radio" onChange={() => setGender('Male')} />
                </label>
                <label>
                  <span>Custom</span>
                  <input name="gender" type="radio" onChange={() => setGender('Custom')} />
                </label>
              </div>
            </div>
            <p>People who use our service may have uploaded your contact information to Facebook. <Link>Learn more</Link>.</p>
            <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
            <button type="submit" className="fb-submit-btn">Sing Up</button>
          </form>
        </Model>
     }
      <div className="fb-auth-wrapper">
        <div className="fb-auth-container">
          <div className="fb-auth-left">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt=".logo" className="auth-fb-logo" />
            <h2 className="fb-auth-left-text">Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="fb-auth-right">
            <div className="fb-auth-form-box">
              <form className="fb-auth-form">
                <input type="text" placeholder="Email Address or Phone Number"/>
                <input type="password" placeholder="Password"/>
                <button className="fb-btn log-btn">Log In</button>
              </form>
              <Link className="fb-forget-btn" to="">Forgotten password?</Link>
              <div className="divider"></div>
              <button onClick={() => setModal(true)} className="btn-create">Create new account</button>
            </div>
            <p className="fb-auth-text"><Link to="">Create a Page</Link> for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
