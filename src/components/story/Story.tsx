import './story.css'
import {useState} from 'react';

import close from './../../assets/leftside_icons/close.svg';

type StoryProps = {
    username: string;
    avatar: string;
    content: string;
}

const Story = ({ username, avatar, content }: StoryProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div  className="story__item">
            <div className="story__avatar" onClick={() => setIsModalOpen(true)}>
                <img src={avatar} alt="a" />
            </div>
            <div className="story__username">
                {username}
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={content} alt="as"/>
                        <div className="story__header">
                            <div><img src={avatar} alt="avatar" />{username}</div>
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