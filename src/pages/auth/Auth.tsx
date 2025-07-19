import './auth.css';
import sloth from './../../assets/sloth.svg';
import logo from './../../assets/Logo.svg';
import showpass1 from './../../assets/showpass1.png';
import showpass0 from './../../assets/showpass0.png';

import { useState } from 'react';

type AuthProps = {
    setIsLoggedIn: (value: boolean) => void;
}

const Auth = ( {setIsLoggedIn}: AuthProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const [isError, setIsError] = useState(false);

    const handleLoginClick = () => {
        if (usernameText.trim() === 'anya' && passwordText.trim() === '12345678') {
            setIsLoggedIn(true);
        } else {
            setIsError(true);
            setPasswordText('');
            setUsernameText('');

            setTimeout(() => {
                setIsError(false);
            }, 1000);
        }
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <div className="auth__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="auth__content">
                    <div className="auth__form">
                        <h3 className="form__title">Welcome back</h3>
                        <div className="form__items">
                            <div className={`form__input ${isError ? 'error' : ''}`}><input value={usernameText} onChange={(e) => setUsernameText(e.target.value)} type="text" placeholder='username'/></div>
                            <div className={`form__input ${isError ? 'error' : ''}`}><input value={passwordText} onChange={(e) => setPasswordText(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder='password'/><img src={showPassword ? showpass1 : showpass0} alt="show password" onClick={() => setShowPassword(prev => !prev)}/></div>
                            <div className="form__button" onClick={handleLoginClick}>LOG IN</div>
                            <div className='form__forgot__button'>Forgot password?</div>
                        </div>
                        
                    </div>
                    <div className="auth__sloth">
                        <img src={sloth} alt="sloth" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;