import './story.css'
import {useState} from 'react';

import { StoryModel } from '../../models/StoryModel';

import close from './../../assets/main_icons/close.svg';
import send from './../../assets/main_icons/send_story_comment.svg';

type StoryProps = {
    story: StoryModel;
}

const Story = ({ story }: StoryProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isStoryRevised, setIsStoryRevised] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
        setIsStoryRevised(true);
    }

    return (
        <div  className="story__item">
            <div className="story__avatar" onClick={() => setIsModalOpen(true)} 
                style={ isStoryRevised ? { background: "#B5B5B5"} : { background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}>
                
                <img src={story.user.avatar} alt="a" />
            </div>
            <div className="story__username">
                {story.user.username}
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={story.content} alt="story content"/>
                        <div className="story__header">
                            <div><img src={story.user.avatar} alt="user avatar" />{story.user.username}</div>
                            <img src={close} alt="close" onClick={closeModal}/>
                        </div>
                        <div className="story__footer">
                            <div className="story__footer__input">
                                <input type="text" placeholder='Type your comment..'/>
                            </div>
                            <div className="story__footer__button">
                                <button>
                                    <img src={send} alt="send" />
                                </button>
                            </div>                        
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Story;