import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
// import "./../../index.scss";
import "./auth.scss";
import Model from "../../components/model/Model";
import { useState } from "react";
import { VscQuestion } from "react-icons/vsc";

const Auth = () => {
  const [modal, setModal] = useState(false);
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
                  <option value="">--Day--</option>
                </select>
                <select name="" id="">
                  <option value="">--Month--</option>
                </select>
                <select name="" id="">
                  <option value="">--Years--</option>
                </select>
              </div>
              <div className="register-extra">
                <label>
                  <span>Female</span>
                  <input name="gender" type="radio" />
                </label>
                <label>
                  <span>Male</span>
                  <input name="gender" type="radio" />
                </label>
                <label>
                  <span>Custom</span>
                  <input name="gender" type="radio" />
                </label>
              </div>
            </div>
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
