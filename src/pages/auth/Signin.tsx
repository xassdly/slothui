import './signin.css';
import { useState } from 'react';

import logo from './../../assets/Logo.svg';
import facebook_icon from './../../assets/auth_icons/facebooklogo.svg';
import twitter_icon from './../../assets/auth_icons/twitterlogo.svg';
import mail_icon from './../../assets/auth_icons/mail_icon.svg';
import password_icon from './../../assets/auth_icons/password_icon.svg';
import showpassword from './../../assets/auth_icons/showpass0.svg';
import dontshowpassword from './../../assets/auth_icons/showpass1.png';
import signin_icon from './../../assets/auth_icons/signin.svg';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const [isError, setIsError] = useState(false);
    
    const handleSigninButton = () => {
        const emailIsEmpty = emailText.trim() === '';
        const passwordIsEmpty = passwordText.trim() === '';
        const passwordTooShort = passwordText.length < 8;
        const emailIsInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailText);

        if (emailIsEmpty || emailIsInvalid || passwordIsEmpty || passwordTooShort) {
            setIsError(true);
            setTimeout(() => setIsError(false), 1000);
            return;
        }
    }

    return (
        <div className="signin">
            <div className="signin__container">

                <div className="signin__logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="signin__title">
                    <h3>Sign In To Your Account.</h3>
                    <p>Unleash your inner sloth 4.0 right now.</p>
                </div>

                <div className="signin__input__field">
                    <label htmlFor="mail">Email Adress</label>
                    <div className={`signin__input__field__wrapper ${isError ? 'error' : ''}`}>
                        <img src={mail_icon} alt="mail" />
                        <input id='mail' type="text" placeholder='elementary221b@gmail.com' value={emailText} onChange={(e) => setEmailText(e.target.value)}/>
                    </div>
                </div>

                <div className="signin__input__field">
                    <label htmlFor="password">Password</label>
                    <div className={`signin__input__field__wrapper ${isError ? 'error' : ''}`}>
                        <img src={password_icon} alt="password" />
                        <input id='password' type={showPassword ? "text" : "password"} placeholder='*****************' value={passwordText} onChange={(e) => setPasswordText(e.target.value)}/>
                        <img className='signin__input__field__showhidepassword' 
                            src={showPassword ? dontshowpassword : showpassword} alt="show/hide password" 
                            onClick={() => setShowPassword(prev => !prev)}/>
                    </div>
                </div>

                <div className="signin__utils">
                    <label className="signin__remember">
                        <input type="checkbox" />
                        <span className='checkmark'></span>
                        Remember For 30 Days
                    </label>
                    <div className="signin__forgot">
                        <p>Forgot Password</p>
                    </div>
                </div>

                <div className="signin__button__signin" onClick={handleSigninButton}>
                    <p>Sign In</p><img src={signin_icon} alt="sign in" />
                </div>

                <div className="signin__button__signup">
                    <p>Dont't have an account? <span>Sign Up</span></p>
                </div>

                <div className="signin__or">
                    <span>OR</span>
                </div>

                <div className="signin__button__facetwit">
                    <img src={facebook_icon} alt="facebook" />
                    Sign In With Facebook
                </div>

                <div className="signin__button__facetwit">
                    <img src={twitter_icon} alt="twitter" />
                    Sign In With Twitter
                </div>

            </div>
            <div className="signin__footer">
                <div className="signin__footer__title">
                    Copyright 2025 slothUI ©
                </div>
                <div className="signin__footer__links">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Signin;