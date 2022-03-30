import React from 'react';
import '../Contact/Contact.css' ;
import ContactImage from '../../Images/contact.jpg';
import PropTypes from 'prop-types';

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
    return <div> 
        <div className='contact-us'>
            <div className='contact-left'>
                <div className='contact-text'>
                    <h1>We'd love <br></br> to hear from you </h1>
                </div>
                <div className='contact-image'>
                    <img src={ContactImage} alt="Contact-img" />
                </div>
            </div>
            <div className='contact-form'>
                <div className='form-heading'>
                    <h1>Contact us</h1>
                </div>
                <div className='form-inputs'>
                    <div className='input'>
                    <input type="text" placeholder='Enter your first name'/>
                    </div>
                    <div className='input'>
                    <input type="text" placeholder='Enter your last name'/>
                    </div>
                </div>
                <div className='form-inputs'>
                <div className='input'>
                    <input type="text" placeholder='Enter your Email'/>
                    </div>
                <div className='input'>
                    <input type="text" placeholder='Enter your phone number'/>
                    </div>
                </div>
                <div className='message'>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='btn'>
                    <button>submit &#8594;</button>
                </div>
                <div className='contact-info'>
                    <h4>email us </h4>
                    <p>senditenquiries@info.com</p>
                </div>
                
            </div>
        </div>
    </div>;
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
// #endregion

export default Contact;