import './home.css';
import './../../components/story/stories.css';

import plussvg from './../../assets/main_icons/plus.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import arrowleft from './../../assets/main_icons/arrowleft.svg';
import arrowright from './../../assets/main_icons/arrowright.svg';
import header_menu from './../../assets/main_icons/header_menu.svg';
import logomark from './../../assets/F.svg';
import close from './../../assets/main_icons/close.svg';
import send from './../../assets/main_icons/send_story_comment.svg';

import Post from '../../components/post/Post';
import Story from '../../components/story/Story';
import { story_array } from '../../mock/stories';
import { posts_array } from '../../mock/posts';

import { useRef, useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';

type HomeProps = {
    openRightPanel: () => void;
    openLeftMenu: () => void;
};

const Home = ( { openRightPanel, openLeftMenu}: HomeProps) => {
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


    // STORIES LOGIC
    const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [viewedStories, setViewedStories] = useState<number[]>([]);

    const [paused, setPaused] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);


    const goToNextStory = () => {
        if (activeStoryIndex === null) return;
        setElapsedTime(0);
        setProgress(0);

        const nextIndex = activeStoryIndex + 1;
        if (nextIndex < story_array.length) {
            setActiveStoryIndex(nextIndex);
        } else {
            setIsModalOpen(false);
            setActiveStoryIndex(null)
        }
    }

    const closeStory = () => {
        setProgress(0);
        setElapsedTime(0);
        if (activeStoryIndex !== null) {
        }
        setIsModalOpen(false);
        setActiveStoryIndex(null);
    };

    const goToPrevStory = () => {
        if (activeStoryIndex === null) return;
        const prevIndex = activeStoryIndex - 1;

        if (prevIndex >= 0) {
            setElapsedTime(0);
            setProgress(0);
            setActiveStoryIndex(prevIndex);
        }
    }

    useEffect(() => {
        if (!isModalOpen || activeStoryIndex === null) return;

        const start = Date.now() - elapsedTime;
        setViewedStories((prev) => [...new Set([...prev, activeStoryIndex])]);

        const interval = setInterval(() => {
            if (paused) return;

            const newElapsed = Date.now() - start;
            const percent = Math.min((newElapsed / 4000) * 100, 100);

            setProgress(percent);
            setElapsedTime(newElapsed);

            if (percent >= 100) {
                clearInterval(interval);
                setElapsedTime(0);
                goToNextStory();
            }
        }, 50);

        return () => clearInterval(interval);
        }, [isModalOpen, activeStoryIndex, paused]);




    return (
        <div className="home">

            <div className="home__header">
                <div className="container">
                    <div className="home__header__content">
                        <div className="home__header__leftmenu__button" onClick={openLeftMenu}>
                            <img src={logomark} alt="menu"/>
                        </div>
                        <div className="home__header__search">
                            <input name="search" type="text" placeholder='Search for friends, groups, pages'/>
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

                            {story_array.map((story, index) => (
                                <Story 
                                    key={story.id} 
                                    story={story} 
                                    isViewed={viewedStories.includes(index)}
                                    onClick={() => {
                                        setActiveStoryIndex(index);
                                        setIsModalOpen(true);
                                    }}
                                />
                            ))}
                            
                        </div>
                        {showRight && (
                            <button className="scroll__btn right" onClick={() => scrollStories(200)}><img src={arrowright} alt=">"/></button>
                        )}
                    </div>
                    
                    
                    <div className="home__posts">
                        {posts_array.map((post) => (
                            <Post key={post.id} post={post}/>
                        ))}
                    </div>


                    {isModalOpen && activeStoryIndex !== null && (
                        <Modal onClose={closeStory}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="story__progress__bar">
                                    <div
                                    key={activeStoryIndex}
                                    className={"story__progress__fill"}
                                    style={{ width: `${progress}%` }}
                                    ></div>
                                </div>

                                <div 
                                    className="story__wrapper"
                                    onMouseDown={() => setPaused(true)}
                                    onMouseUp={() => setPaused(false)}>
                                    <img src={story_array[activeStoryIndex].content} alt="story content" className='story__image'/>
                                </div>
                                <div className="story__header">
                                    <div>
                                        <img
                                            src={story_array[activeStoryIndex].user.avatar}
                                            alt="avatar"
                                        />
                                        {story_array[activeStoryIndex].user.username}
                                    </div>
                                    <img src={close} alt="close" onClick={() => {setIsModalOpen(false); setActiveStoryIndex(null)}}/>
                                </div>

                                <div className="story__footer">
                                    <div className="story__footer__input">
                                        <input onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} 
                                            onMouseDown={(e) => e.stopPropagation()} type="text" placeholder="Type your comment..." />
                                    </div>
                                    <div className="story__footer__button">
                                        <button>
                                            <img src={send} alt="send" />
                                        </button>
                                    </div>
                                </div>

                                {activeStoryIndex < story_array.length - 1 && (
                                    <div className="scroll__btn right" onClick={(e) => {e.stopPropagation(); goToNextStory()}}>
                                        <img src={arrowright} alt="next story" />
                                    </div>
                                )}

                                {activeStoryIndex > 0 && (
                                    <div className="scroll__btn left" onClick={(e) => {e.stopPropagation(); goToPrevStory()}}>
                                        <img src={arrowleft} alt="previous story" />
                                    </div>
                                )}

                            </div>
                        </Modal>
                    )}

                    
                </div>
            </div>
        </div>
    )
}

export default Home;