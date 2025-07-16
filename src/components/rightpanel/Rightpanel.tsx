import './styles/rightpanel.css';
import './styles/rp_activity.css';
import './styles/rp_events.css';
import './styles/rp_suggestions.css';

/*import avatar_indicator from './../../assets/rightside_icons/avatar_indicator.svg';*/
import messicon from './../../assets/rightside_icons/mess.svg';
import notsdarkicon from './../../assets/rightside_icons/nots.svg'
import seeallicon from './../../assets/rightside_icons/seeall.svg';
import setticon from './../../assets/rightside_icons/sett.svg';
import trendicon from './../../assets/rightside_icons/TrendUp.svg';
import avataricon from './../../assets/avatars/a2.png';
import avataricon2 from './../../assets/avatars/a1.png';
import moreicon from './../../assets/main_icons/more.svg';
import Suggestion from './Suggestion';
import Event from './Event';

const Rightpanel = () => {
    return (
        <div className="rightpanel">

            <div className="rightpanel__header">
                <div className="rightpanel__header__avatar">
                    <img src={avataricon} alt="avatar" />
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
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                </div>
            </div>

            <div className="rightpanel__activity">
                <div className="activity__header">
                    <div className="activity__header__title">Profile Activity</div>
                    <div className="activity__header__button"><img src={moreicon} alt="more" /></div>
                </div>
                <div className="activity__content">
                    <div className="activity__avatars">
                        <img src={avataricon2} alt="user" />
                        <img src={avataricon2} alt="user" />
                        <img src={avataricon2} alt="user" />
                        <img src={avataricon2} alt="user" />
                        <img src={avataricon2} alt="user" />
                        <img src={avataricon2} alt="user" />
                        <img src={avataricon2} alt="user" />
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
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                </div>
            </div>

        </div>
    )
}

export default Rightpanel;