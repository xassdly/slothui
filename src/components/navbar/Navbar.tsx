import './navbar.css';
import { useState, useEffect } from 'react';
import { UserModel } from '../../models/UserModel';

import logo from './../../assets/Logo.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import feedicon from './../../assets/leftside_icons/feed.svg';
import storiesicon from './../../assets/leftside_icons/stories.svg';
import friendsicon from './../../assets/leftside_icons/friends.svg';
import apisicon from './../../assets/leftside_icons/apis.svg';
import subicon from './../../assets/leftside_icons/sub.svg';
import settingsicon from './../../assets/leftside_icons/settings.svg';
import helpicon from './../../assets/leftside_icons/help.svg';
import limiticon from './../../assets/leftside_icons/limit.svg';
import leaveicon from './../../assets/leftside_icons/leave.svg';
import closeicon from './../../assets/leftside_icons/close.svg';


type NavbarProps = {
    mainUser: UserModel;
    isOpen: boolean;
    onClose: () => void;
}

const Navbar = ( {mainUser, isOpen, onClose }: NavbarProps) => {
    const [isProOpen, setIsProOpen] = useState(true);

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
                    <div className="navbar__nav__item">
                        <img src={feedicon} alt="Feed" />
                        <p>Feed</p>
                    </div>
                    <div className="navbar__nav__item">
                        <img src={storiesicon} alt="Stories" />
                        <p>Stories</p>
                    </div>
                    <div className="navbar__nav__item">
                        <img src={friendsicon} alt="Friends" />
                        <p>Friends</p>
                    </div>
                    <div className="navbar__nav__item">
                        <img src={apisicon} alt="APIs" />
                        <p>APIs</p>
                    </div>
                    <div className="navbar__nav__item">
                        <img src={subicon} alt="Subscription" />
                        <p>Subscription</p>
                    </div>
                    <div className="navbar__nav__item">
                        <img src={settingsicon} alt="Settings" />
                        <p>Settings</p>
                    </div>
                    <div className="navbar__nav__item">
                        <img src={helpicon} alt="Help & Support" />
                        <p>Help & Support</p>
                    </div>
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
                        <img src={mainUser.avatar} alt="user" />
                        <div className="username__and__userinfo">
                            <h3>{mainUser.username}</h3>
                            <p>@{mainUser.username.toLowerCase()}</p>
                        </div>
                    </div>
                    <div className="navbar__account__logout">
                        <img src={leaveicon} alt="logout" />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Navbar;