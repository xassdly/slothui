import notsicon from './../../assets/rightside_icons/notsicon.svg';
import notsicon_y from './../../assets/rightside_icons/nots_icon_y.svg';
import { EventModel } from '../../models/EventModel';
import { useState } from 'react';

type EventProps = {
    event: EventModel;
}

const Event = ({event}: EventProps) => {
    const [isEventNotificationActive, setIsEventNotificationActive] = useState(false);

    return (
        <div className="event__item">

            <div className="event__content">
                <div className="event__icon">
                    <img src={event.icon} alt="icon" />
                </div>
                <div className="event__info">
                    <h3>{event.title}</h3>
                    <p>{event.date.toDateString()}</p>
                </div>
            </div>
            <div className="event__notification" onClick={() => setIsEventNotificationActive(prev => !prev)}>
                <img src={isEventNotificationActive ? notsicon_y : notsicon} alt="notification" />
            </div>

        </div>
    )
}

export default Event;