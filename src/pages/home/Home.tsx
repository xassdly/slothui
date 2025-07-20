import './home.css';
import './../../components/story/stories.css';

import { posts_array } from '../../mock/posts';

import Post from '../../components/post/Post';
import Story from '../../components/story/Story';

import plussvg from './../../assets/main_icons/plus.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import arrowleft from './../../assets/main_icons/arrowleft.svg';
import arrowright from './../../assets/main_icons/arrowright.svg';
import header_menu from './../../assets/main_icons/header_menu.svg';
import logomark from './../../assets/logovector.svg';

import { story_array } from '../../mock/stories';

import { useRef, useState, useEffect } from 'react';
import type { UserModel } from '../../models/UserModel';

type HomeProps = {
    mainUser: UserModel;
    openRightPanel: () => void;
    openLeftMenu: () => void;
};

const Home = ( {mainUser, openRightPanel, openLeftMenu}: HomeProps) => {
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

    const [showPostButtonText, setShowPostButtonText] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
        setShowPostButtonText(window.innerWidth < 1000);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home">

            <div className="home__header">
                <div className="container">
                    <div className="home__header__content">
                        <div className="home__header__leftmenu__button" onClick={openLeftMenu}>
                            <img src={logomark} alt="menu"/>
                        </div>
                        <div className="home__header__search">
                            <input type="text" placeholder='Search for friends, groups, pages'/>
                            <img src={searchicon} alt='search'/>
                        </div>
                        <div className="home__header__button">
                            <button>{showPostButtonText ? "" : "Add New Post"}<img src={plussvg} alt='+'/></button>
                        </div>

                        <div className="home__header__menu__button" onClick={openRightPanel}>
                            <img src={header_menu} alt="menu" />
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

                            {story_array.map((story) => (
                                <Story key={story.id} story={story} />
                            ))}
                            
                        </div>
                        {showRight && (
                            <button className="scroll__btn right" onClick={() => scrollStories(200)}><img src={arrowright} alt=">"/></button>
                        )}
                    </div>
                    
                    
                    <div className="home__posts">
                        {posts_array.map((post) => (
                            <Post key={post.id} mainUser={mainUser} post={post}/>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;