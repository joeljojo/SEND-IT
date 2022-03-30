import React from 'react';
import Header from '../Header/Header';
import '../Home/Home.css';
import Image from '../../Images/chapchap.jpg';
import Multiple from '../../Images/multiple.png';
import SaveMoney from '../../Images/save money.jpg';
import SaveTime from '../../Images/save time.jpg';
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
const Home = () => {
    return <div>
        <div><Header/></div>
        <div className='welcome-container'>
            <div className='left'>
                <div className='welcome-message'>
                    <h1 id='h1'>SUPER FAST DELIVERY</h1>
                    <h1>We offer fastest <br></br>delivery to your <br></br>nearest home town</h1>
                    <p>We are the fastest parcel delivery service in the country.</p>
                </div>
            </div>
            <div className='right'>
                <div className='image'>
                    <img src={Image} alt="Image" />
                </div>
            </div>
        </div>

        <section id='why-us'>
        <div className='why-us'>
        <div className='head'><h1>why use sent-it?</h1></div>
        <div className='credentials'>
        <div className='one'>
        <div className='img'>
        <img src={SaveTime} alt="Save Time" />
        </div>
        <div className='text'>
        <h1>Save time</h1>
        <p>No need to shop around for the best price, we’ll do it for you. In seconds you can compare prices from multiple couriers all in one place.</p>
        </div>
        </div>
        <div className='one'>
            <div className='img'>
            <img src={SaveMoney} alt="Save Time" />
            </div>
            <div className='text'>
            <h1>Save money</h1>
            <p>We’ll help you find discounted rates with premium brand couriers. That means you’ll still receive a great service, you just pay less!</p>
        </div>
        </div>
        <div className='one'>
            <div className='img'>
            <img src={Multiple} alt="Save Time" />
            </div>
            <div className='text'>
            <h1>Send multiple parcels</h1>
            <p>Sending more than one parcel? Add multiple parcels to your booking or use our handy bulk uploader tools.</p>
        </div>
        </div>
        </div>

        </div>
        </section>
    </div>;
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;