import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
// import "./../../index.scss";
import "./auth.scss";
import Model from "../../components/model/Model";
import { useState } from "react";

const Auth = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Meta title="Facebook log in or sing up" />
     { modal &&  <Model hideModal={setModal} /> }
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
