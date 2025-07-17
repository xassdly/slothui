import plusicon from './../../assets/rightside_icons/plusicon.svg';
import { UserModel } from '../../models/UserModel';

type SuggestionProps = {
    user: UserModel;
}

const Suggestion = ( {user} : SuggestionProps) => {
    return (
        <div className="suggestions__item">
            <div className="suggested__account">
                <img src={user.avatar} alt="user" />
                <div className="suggested__account__info">
                    <h3>{user.username}</h3>
                    <p>@{user.username.toLowerCase()}</p>
                </div>
            </div>
            <div className="add__suggested__account">
                <img src={plusicon} alt="add" />
            </div>
        </div>
    )
}

export default Suggestion;