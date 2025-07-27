import './navbar.css';
import { useState, useEffect } from 'react';

import logo from './../../assets/logo.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import feedicon from './../../assets/leftside_icons/feed.svg';
import friendsicon from './../../assets/leftside_icons/friends.svg';
import subicon from './../../assets/leftside_icons/sub.svg';
import settingsicon from './../../assets/leftside_icons/settings.svg';
import helpicon from './../../assets/leftside_icons/help.svg';
import limiticon from './../../assets/leftside_icons/limit.svg';
import leaveicon from './../../assets/leftside_icons/leave.svg';
import closeicon from './../../assets/leftside_icons/close.svg';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext/UserContext';
import Modal from '../Modal/Modal';


type NavbarProps = {
    isOpen: boolean;
    onClose: () => void;
    handleLogout: () => void;
}

const Navbar = ( { isOpen, onClose, handleLogout }: NavbarProps) => {
    const [isProOpen, setIsProOpen] = useState(true);
    const navigate = useNavigate();

    const { user } = useUser();

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);


    const [isLogoutOpen, setIsLogoutOpen] = useState(false);



    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={onClose}></div>
            )}
            
            <div className={`navbar ${isOpen ? 'active' : ''}`}>
                <div className="navbar__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar__search">
                    <img src={searchicon} alt="search" /><input type="text" placeholder="Search..."/>
                </div>
                <div className="navbar__nav">
                    <button className="navbar__nav__item" onClick={() => navigate('/')}>
                        <img src={feedicon} alt="Home" />
                        <p>Home</p>
                    </button>
                    <button className="navbar__nav__item" onClick={() => navigate('/friends')}>
                        <img src={friendsicon} alt="Friends" />
                        <p>Friends</p>
                    </button>
                    <button className="navbar__nav__item" onClick={() => navigate('/subscription')}>
                        <img src={subicon} alt="Subscription" />
                        <p>Subscription</p>
                    </button>
                    <button className="navbar__nav__item" onClick={() => navigate('/settings')}>
                        <img src={settingsicon} alt="Settings" />
                        <p>Settings</p>
                    </button>
                    <button className="navbar__nav__item" onClick={() => navigate('/support')}>
                        <img src={helpicon} alt="Help & Support" />
                        <p>Help & Support</p>
                    </button>
                </div>

                {isProOpen && (
                    <div className="navbar__pro">
                        <img onClick={() => setIsProOpen(false)} className='navbar__pro__close' src={closeicon} alt="close" />
                        <img className='navbar__pro__img' src={limiticon} alt="limit" />
                        <p>Enjoy unlimited access to our app with only a small price monthly.</p>
                        <div className="dismiss__or__no">
                            <button onClick={() => setIsProOpen(false)}>Dismiss</button>
                            <button>Go Pro</button>
                        </div>
                    </div>
                )}
                
                <div className="navbar__account">
                    <div className="navbar__account__info">
                        <img src={user?.avatar} alt="user" />
                        <div className="username__and__userinfo">
                            <h3>{user?.username}</h3>
                            <p>@{user?.username.toLowerCase()}</p>
                        </div>
                    </div>
                    <div className="navbar__account__logout" onClick={() => setIsLogoutOpen(true)}>
                        <img src={leaveicon} alt="logout" />
                    </div>

                </div>
                {isLogoutOpen && (
                    <Modal onClose={() => setIsLogoutOpen(false)} isOpen={isLogoutOpen}>
                        <div className="logout__content" onClick={e => e.stopPropagation()}>
                            <h3>You sure to logout?</h3>
                            <button onClick={handleLogout}>Yes</button>
                            <button onClick={() => setIsLogoutOpen(false)}>No</button>
                        </div>
                    </Modal>
                )}
            </div>
        </>
        
    )
}

export default Navbar;