import { FaTimes } from "react-icons/fa";
import "./model.scss";
import { useState } from "react";

const Model = ({children, hideModal}) => {
    
  return (
    <>
      <div className="modal-blur-area">
        <div className="modal-container">
            <div className="modal-header">
                <div className="modal-content">
                    <h2 className="fb-sing-up-title">Sign Up</h2>
                    <p className="fb-sing-up-text">Its quick and easy</p>
                </div>
                <button onClick={() => hideModal(false)}  className="fb-btn-close">
                    <FaTimes />
                </button>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </div>
      </div>
    </>
  )
}

export default Model;
