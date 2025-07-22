import './story.css'

import { StoryModel } from '../../models/StoryModel';



type StoryProps = {
    story: StoryModel;
    onClick: () => void;
    isViewed: boolean;
}

const Story = ({ story, onClick, isViewed }: StoryProps) => {
    return (
        <div className="story__item" onClick={onClick}>
            <div className="story__avatar"  
                style={ isViewed ? { background: "#B5B5B5"} : { background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}>
                <img src={story.user.avatar} alt="a" />
            </div>
            <div className="story__username">
                {story.user.username}
            </div>
        </div>
    )
}

export default Story;