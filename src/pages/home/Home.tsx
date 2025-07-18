import './home.css';
import './../../components/story/stories.css';

import { PostModel } from '../../models/PostModel';

import Post from '../../components/post/Post';
import Story from '../../components/story/Story';

import plussvg from './../../assets/main_icons/plus.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import arrowleft from './../../assets/main_icons/arrowleft.svg';
import arrowright from './../../assets/main_icons/arrowright.svg';
import header_menu from './../../assets/main_icons/header_menu.svg';

import { user1, user2, user3, user4, user5, user6, user7, user8, user9 } from '../../mock/users';

import postimg1 from './../../assets/post_imgs/postimg1.png';
import postimg2 from './../../assets/post_imgs/postimg2.png';
import postimg3 from './../../assets/post_imgs/postimg3.png';
import postimg4 from './../../assets/post_imgs/postimg4.png';
import postimg5 from './../../assets/post_imgs/postimg5.png';
import postimg6 from './../../assets/post_imgs/postimg6.png';


import story1 from './../../assets/stories_content/story1.jpg';

import { useRef, useState, useEffect } from 'react';

const post1 = new PostModel(user1, "USA, Boston", "Here must be content", postimg1, 9001, [], 1);
const post2 = new PostModel(user2, "USA, New-York", "Here must be content", postimg2, 3654, [],2);
const post3 = new PostModel(user3, "Austria, Wien", "Here must be content", postimg6, 56735, [],3);
const post4 = new PostModel(user4, "Canada, Toronto", "Here must be content", postimg4, 385, [],4);
const post5 = new PostModel(user5, "Japan, Tokyo", "Here must be content", postimg5, 946, [],5);
const post6 = new PostModel(user6, "Australia, Melburn", "Here must be content", postimg1, 83, [],6);
const post7 = new PostModel(user7, "Germany, Berlin", "Here must be content", postimg3, 190, [],7);

type HomeProps = {
    openRightPanel: () => void;
};

const Home = ( {openRightPanel}: HomeProps) => {
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

                            <Story user={user1} content={story1}/>
                            <Story user={user2} content={story1}/>
                            <Story user={user3} content={story1}/>
                            <Story user={user4} content={story1}/>
                            <Story user={user5} content={story1}/>
                            <Story user={user6} content={story1}/>
                            <Story user={user7} content={story1}/>
                            <Story user={user8} content={story1}/>
                            <Story user={user9} content={story1}/>
                            <Story user={user3} content={story1}/>
                            
                        </div>
                        {showRight && (
                            <button className="scroll__btn right" onClick={() => scrollStories(200)}><img src={arrowright} alt=">"/></button>
                        )}
                    </div>
                    
                    
                    <div className="home__posts">
                        <Post post={post1}/>
                        <Post post={post2}/>
                        <Post post={post3}/>
                        <Post post={post4}/>
                        <Post post={post5}/>
                        <Post post={post6}/>
                        <Post post={post7}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;