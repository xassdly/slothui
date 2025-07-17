import './story.css'
import {useState} from 'react';
import { User } from '../../models/User';

import close from './../../assets/leftside_icons/close.svg';

type StoryProps = {
    user: User;
    content: string;
}

const Story = ({ user, content }: StoryProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div  className="story__item">
            <div className="story__avatar" onClick={() => setIsModalOpen(true)}>
                <img src={user.avatar} alt="a" />
            </div>
            <div className="story__username">
                {user.username}
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={content} alt="as"/>
                        <div className="story__header">
                            <div><img src={user.avatar} alt="avatar" />{user.username}</div>
                            <img src={close} alt="close" onClick={() => setIsModalOpen(false)}/>
                        </div>
                        <div className="story__footer">
                            ASEL;GJH                            
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Story;