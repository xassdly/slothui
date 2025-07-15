import Post from '../../components/post/Post';
import './home.css';
import './stories.css'
import plussvg from './../../assets/plus.svg';
import searchicon from './../../assets/searchicon.svg';
import Story from '../../components/story/Story';
import { useRef, useState, useEffect } from 'react';
import arrowleft from './../../assets/arrowleft.svg';
import arrowright from './../../assets/arrowright.svg';


const Home = () => {

    const storiesRef = useRef<HTMLDivElement>(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const checkScrollPosition = () => {
        if (!storiesRef.current) return;
        const el = storiesRef.current;

        setShowLeft(el.scrollLeft > 0);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }

    useEffect(() => {
        const el = storiesRef.current;
        if (!el) return;

        el.addEventListener('scroll', checkScrollPosition);

        checkScrollPosition();

        return () => el.removeEventListener('scroll', checkScrollPosition);
    }, []);

    const scrollStories = (offset: number) => {
        if (storiesRef.current) {
            storiesRef.current.scrollBy({
                left: offset,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="home">

            <div className="home__header">
                <div className="container">
                    <div className="home__header__content">
                        <div className="home__header__search">
                            <input type="text" placeholder='Search for friends, groups, pages'/>
                            <img src={searchicon} alt='search'/>
                        </div>
                        <div className="home__header__button">
                            <button>Add New Post<img src={plussvg} alt='+'/></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="home__content">
                    <div className="stories__wrapper">

                        {showLeft && (
                            <button className="scroll__btn left" onClick={() => scrollStories(-200)}><img src={arrowleft} alt="<"/></button>
                        )}
                        <div className="home__stories" ref={storiesRef}>
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                            <Story />
                        </div>
                        {showRight && (
                            <button className="scroll__btn right" onClick={() => scrollStories(200)}><img src={arrowright} alt=">"/></button>
                        )}
                    </div>
                    
                    
                    <div className="home__posts">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;