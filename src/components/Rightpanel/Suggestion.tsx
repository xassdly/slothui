import plusicon from './../../assets/rightside_icons/plusicon.svg';
import { UserModel } from '../../models/UserModel';
import { useState } from 'react';

type SuggestionProps = {
    user: UserModel;
}

const Suggestion = ( {user} : SuggestionProps) => {
    const [isFriendAdded, setIsFriendAdded] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const handleAddFriend = () => {
        setIsFriendAdded(true);
        setTimeout(() => setIsHidden(true), 300);
    }

    return !isHidden && (
        <div className={`suggestions__item ${isFriendAdded ? 'added' : ''}`}>
            <div className="suggested__account">
                <img src={user.avatar} alt="user" />
                <div className="suggested__account__info">
                    <h3>{user.username}</h3>
                    <p>@{user.username.toLowerCase()}</p>
                </div>
            </div>
            <div className="add__suggested__account" onClick={handleAddFriend} >
                <img src={plusicon} alt="add"/>
            </div>
        </div>
    )
}

export default Suggestion;