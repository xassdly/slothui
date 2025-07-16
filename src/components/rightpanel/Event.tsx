import notsicon from './../../assets/rightside_icons/notsicon.svg';
import moonicon from './../../assets/rightside_icons/moonicon.svg';
import gifticon from './../../assets/rightside_icons/gifticon.svg';
import gradicon from './../../assets/rightside_icons/gradicon.svg';
import groupicon from './../../assets/rightside_icons/groupicon.svg';


const Event = () => {
    return (
        <div className="event__item">

            <div className="event__content">
                <div className="event__icon">
                    <img src={gradicon} alt="grad" />
                </div>
                <div className="event__info">
                    <h3>Graduation</h3>
                    <p>Dec 22, 2028</p>
                </div>
            </div>
            <div className="event__notification">
                <img src={notsicon} alt="notification" />
            </div>

        </div>
    )
}

export default Event;