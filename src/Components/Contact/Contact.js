import React from "react";
import "../Contact/Contact.css";
import PropTypes from "prop-types";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Contact = () => {
  return (
    <div className="contact">
      <form>
        <div className="form heading">
          <h1>Get in touch</h1>
          <p>Our friendly team would love to hear from you!</p>
        </div>
        <div className="contols">
          <div className="firs-last">
            <div className="upper">
              <div>
                <label>First Name</label>
              </div>
              <div>
                <input type="text" placeholder="First Name"></input>
              </div>
            </div>
            <div className="upper">
              <div>
                <label>Last Name</label>
              </div>
              <div>
                <input type="text" placeholder="Last Name"></input>
              </div>
            </div>
          </div>
          <div className="upper">
            <div>
              <label>Email</label>
            </div>
            <div>
              <input type="text" placeholder="you@company.com"></input>
            </div>
          </div>
          <div className="upper">
            <div>
              <label>Phone number </label>
            </div>
            <div>
              <input type="text" placeholder="+254 700000000"></input>
            </div>
          </div>
          <div className="upper">
            <div>
              <label>Message</label>
            </div>
            <div className="textarea">
              <textarea></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
// #endregion

export default Contact;
