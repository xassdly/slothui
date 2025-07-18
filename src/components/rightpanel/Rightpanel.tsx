import './styles/rightpanel.css';
import './styles/rp_activity.css';
import './styles/rp_events.css';
import './styles/rp_suggestions.css';

import avatar_indicator from './../../assets/rightside_icons/avatar_indicator.svg';
import messicon from './../../assets/rightside_icons/mess.svg';
import notsdarkicon from './../../assets/rightside_icons/nots.svg'
import seeallicon from './../../assets/rightside_icons/seeall.svg';
import setticon from './../../assets/rightside_icons/sett.svg';
import trendicon from './../../assets/rightside_icons/TrendUp.svg';
import avatar from './../../assets/avatars/a10.png';
import moreicon from './../../assets/main_icons/more.svg';
import Suggestion from './Suggestion';
import Event from './Event';

import moonicon from './../../assets/rightside_icons/moonicon.svg';
import gifticon from './../../assets/rightside_icons/gifticon.svg';
import gradicon from './../../assets/rightside_icons/gradicon.svg';
import groupicon from './../../assets/rightside_icons/groupicon.svg';

import { user1, user2, user3, user4, user5, user6, user7, user8, user9 } from '../../mock/users';
import { EventModel } from '../../models/EventModel';
import { useState, useEffect } from 'react';

const event1 = new EventModel("Friend's birthday", new Date(2026, 6, 17), gifticon);
const event2 = new EventModel("Graduation", new Date(2028, 4, 21), gradicon);
const event3 = new EventModel("Group Meetup", new Date(2025, 11, 1), groupicon);
const event4 = new EventModel("Holiday", new Date(2029, 9, 7), moonicon);

type RightpanelProps = {
    isOpen: boolean;
    onClose: () => void;
}

const Rightpanel = ( {isOpen, onClose }: RightpanelProps) => {
    const [isUserActive] = useState(true);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isOpen && isMobile) {
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
    }, [isOpen, isMobile]);
    


    return (
        <>
            {isOpen && isMobile && (
                <div className="overlay" onClick={onClose}></div>
            )}
        
            <div className={`rightpanel ${isOpen ? 'active' : ''}`}>

                <div className="rightpanel__header">
                    <div className="rightpanel__header__avatar__wrapper">
                        <img className="rightpanel__header__avatar" src={avatar} alt="avatar" />
                        {isUserActive && (
                            <img className="avatar__indicator" src={avatar_indicator} alt="indicator" />
                        )}
                    </div>
                    <div className="rightpanel__header__buttons">
                        <div className="header__icon__block"><img src={messicon} alt="messages" /></div>
                        <div className="header__icon__block"><img src={notsdarkicon} alt="notifications" /></div>
                        <div className="header__icon__block"><img src={setticon} alt="settings" /></div>
                    </div>
                </div>

                <div className="rightpanel__friends">
                    <div className="friends__header">
                        <div className="friends__header__title">Friends Suggestions</div>
                        <div className="friends__header__button">
                            <p>See All</p>
                            <img src={seeallicon} alt="seeall" />
                        </div>
                    </div>
                    <div className="friends__content">
                        <Suggestion user={user3}/>
                        <Suggestion user={user5}/>
                        <Suggestion user={user6}/>
                        <Suggestion user={user9}/>
                        <Suggestion user={user1}/>
                    </div>
                </div>

                <div className="rightpanel__activity">
                    <div className="activity__header">
                        <div className="activity__header__title">Profile Activity</div>
                        <div className="activity__header__button"><img src={moreicon} alt="more" /></div>
                    </div>
                    <div className="activity__content">
                        <div className="activity__avatars">
                            <img src={user7.avatar} alt="user" />
                            <img src={user4.avatar} alt="user" />
                            <img src={user9.avatar} alt="user" />
                            <img src={user1.avatar} alt="user" />
                            <img src={user4.avatar} alt="user" />
                            <img src={user8.avatar} alt="user" />
                            <img src={user2.avatar} alt="user" />
                        </div>
                        <div className="activity__stats">
                            <div className="followers__count"><h3>+1,158</h3><p>Followers</p></div>
                            <div className="followers__percentage"><img src={trendicon} alt="trend" /><h3>23%</h3><p>vs last month</p></div>
                        </div>
                        <div className="activity__text">
                            You gained a substantial amount of followers this month!
                        </div>
                    </div>
                </div>

                <div className="rightpanel__events">
                    <div className="events__header">
                        <div className="events__header__title">Upcoming Events</div>
                        <div className="events__header__button"><img src={moreicon} alt="more" /></div>
                    </div>
                    <div className="events__content">
                        <Event event={event1}/>
                        <Event event={event2}/>
                        <Event event={event3}/>
                        <Event event={event4}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Rightpanel;