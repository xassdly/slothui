import './story.css'
import ava from './../../assets/avatars/a1.png';

const Story = () => {
    return (
        <div className="story__item">
            <div className="story__avatar">
                <img src={ava} alt="a" />
            </div>
            <div className="story__username">
                brother
            </div>
        </div>
    )
}

export default Story;