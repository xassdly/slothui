import notsicon from './../../assets/rightside_icons/notsicon.svg';
import { EventModel } from '../../models/EventModel';

type EventProps = {
    event: EventModel;
}

const Event = ({event}: EventProps) => {
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
            <div className="event__notification">
                <img src={notsicon} alt="notification" />
            </div>

        </div>
    )
}

export default Event;