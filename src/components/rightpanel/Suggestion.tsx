import avatar1 from './../../assets/avatars/a1.png';
import plusicon from './../../assets/rightside_icons/plusicon.svg';


const Suggestion = () => {
    return (
        <div className="suggestions__item">
            <div className="suggested__account">
                <img src={avatar1} alt="user" />
                <div className="suggested__account__info">
                    <h3>brother</h3>
                    <p>@username</p>
                </div>
            </div>
            <div className="add__suggested__account">
                <img src={plusicon} alt="add" />
            </div>
        </div>
    )
}

export default Suggestion;