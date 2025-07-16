import './home.css';
import './stories.css'

import Post from '../../components/post/Post';
import Story from '../../components/story/Story';

import plussvg from './../../assets/main_icons/plus.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import arrowleft from './../../assets/main_icons/arrowleft.svg';
import arrowright from './../../assets/main_icons/arrowright.svg';

import ava5 from './../../assets/avatars/a5.png';
import ava4 from './../../assets/avatars/a4.png';
import ava3 from './../../assets/avatars/a3.png';
import ava1 from './../../assets/avatars/a1.png';
import ava8 from './../../assets/avatars/a8.png';
import ava7 from './../../assets/avatars/a7.png';
import ava6 from './../../assets/avatars/a6.png';

import story1 from './../../assets/stories_content/story1.jpg';

import { useRef, useState, useEffect } from 'react';

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

                            <Story username={'Mary'} avatar={ava1} content={story1}/>
                            <Story username={'Katya'} avatar={ava3} content={story1}/>
                            <Story username={'Artur'} avatar={ava8} content={story1}/>
                            <Story username={'Ira'} avatar={ava4} content={story1}/>
                            <Story username={'Robert'} avatar={ava5} content={story1}/>
                            <Story username={'Taylor'} avatar={ava6} content={story1}/>
                            <Story username={'Gaga'} avatar={ava7} content={story1}/>
                            <Story username={'Sasha'} avatar={ava8} content={story1}/>
                            <Story username={'repeat'} avatar={ava1} content={story1}/>
                            <Story username={'one more'} avatar={ava1} content={story1}/>
                            
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