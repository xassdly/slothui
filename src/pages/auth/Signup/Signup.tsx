import './signup.css';

import logo from './../../../assets/logo.svg';
import google_icon from './../../../assets/auth_icons/google_icon.svg';
import name_icon from './../../../assets/auth_icons/name_icon.svg';
import mail_icon from './../../../assets/auth_icons/mail_icon.svg';
import password_icon from './../../../assets/auth_icons/password_icon.svg';
import showpassword from './../../../assets/auth_icons/showpass0.svg';
import dontshowpassword from './../../../assets/auth_icons/showpass1.png';
import signup_icon from './../../../assets/auth_icons/signin.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SingupProps = {
    setIsLoggedIn: (value: boolean) => void;
}

const Signup = ( {setIsLoggedIn}: SingupProps) => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const [passwordStrength, setPasswordStrength] = useState(0);
    const getPasswordStrength = (password: string) => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        return score;
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPasswordText(value);
        setPasswordStrength(value === '' ? 0 : getPasswordStrength(value));
    }
    const strengthLabel = ['', 'Weak', 'Medium', 'Strong', 'Very Strong'][passwordStrength];
    
    const takenNamesList:string[] = [];
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorText, setErrorText] = useState('');

    
    const handleSignupButton = () => {
        const nameIsEmpty = nameText.trim() === '';
        const nameIsTaken = takenNamesList.includes(nameText.trim());

        const emailIsEmpty = emailText.trim() === '';
        const emailIsInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailText);

        const passwordIsEmpty = passwordText.trim() === '';
        const passwordIsTooShort = passwordText.trim().length < 8;

        const showError = (msg: string) => {
            setIsError(true);
            setErrorText(msg);
            setShowErrorMessage(true);

            setTimeout(() => setIsError(false), 1000);
            setTimeout(() => setShowErrorMessage(false), 3000);
        }
        
        if (nameIsEmpty || nameIsTaken) {
            showError("Name is invalid or already taken");
            setNameText(''); 
            return;

        } else if (emailIsEmpty || emailIsInvalid) {
            showError("Invalid email");
            setEmailText(''); 
            return;

        } else if (passwordIsEmpty || passwordIsTooShort) {
            showError("Invalid password");
            setPasswordText('');
            return;
        }
        else {
            setIsLoggedIn(true);
            navigate('/');
        }
    }

    return (
        <div className="auth">
            <div className="auth__container">

                {showErrorMessage && (
                    <div className="toast">
                        {errorText}
                    </div>
                )}
                
                <div className="signup__logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="auth__title">
                    <h3>Sign Up For Free.</h3>
                    <p>Unleash your inner sloth 4.0 right now.</p>
                </div>

                <div className="signin__input__field">
                    <label htmlFor="signup_name">Full Name</label>
                    <div className={`signin__input__field__wrapper ${isError ? 'error' : ''}`}>
                        <img src={name_icon} alt="full name" />
                        <input id='signup_name' type="text" placeholder='X_AE_A13b' value={nameText} onChange={(e) => setNameText(e.target.value)}/>
                    </div>
                </div>

                <div className="signin__input__field">
                    <label htmlFor="signup_mail">Email Adress</label>
                    <div className={`signin__input__field__wrapper ${isError ? 'error' : ''}`}>
                        <img src={mail_icon} alt="mail" />
                        <input id='signup_mail' type="email" placeholder='elementary221b@gmail.com' value={emailText} onChange={(e) => setEmailText(e.target.value)}/>
                    </div>
                </div>

                <div className="signin__input__field">
                    <label htmlFor="signup_password">Password</label>
                    <div className={`signin__input__field__wrapper ${isError ? 'error' : ''}`}>
                        <img src={password_icon} alt="password" />
                        <input id='signup_password' type={showPassword ? "text" : "password"} placeholder='*****************' value={passwordText} onChange={handlePasswordChange}/>
                        <img className='signin__input__field__showhidepassword' 
                            src={showPassword ? dontshowpassword : showpassword} alt="show/hide password" 
                            onClick={() => setShowPassword(prev => !prev)}/>
                    </div>
                </div>

                <div className="signup__password__strength">
                    <div className="password__strengthbar">
                        {[1,2,3,4].map((level) => (
                            <div key={level} className={`strengthbar__div ${passwordStrength >= level ? 'active' : ''}`}></div>
                        ))}
                    </div>
                    <p>Password strength: {strengthLabel}</p>
                </div>

                <button className="auth__main__button" onClick={handleSignupButton}>
                    <p>Sign Up</p><img src={signup_icon} alt="sign up" />
                </button>

                <div className="signin__button__signup">
                    <p>Already have an account? <span onClick={() => navigate('/signin')}>Sign In</span></p>
                </div>

                <button className="signin__button__facetwitgoog signup__google__button">
                    <img src={google_icon} alt="google" />
                    Sign Up With Google
                </button>


            </div>
            <div className="auth__footer">
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

export default Signup;