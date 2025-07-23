import './post.css';
import './comments.css';
import { PostModel } from '../../models/PostModel';
import { useState } from 'react';
import Comment from './Comment';

import more from './../../assets/main_icons/more.svg';
import avatar from './../../assets/avatars/a10.png';
import like from './../../assets/main_icons/like.svg';
import liked from './../../assets/main_icons/liked.svg';
import comment from './../../assets/main_icons/comment.svg';
import share from './../../assets/main_icons/share.svg';
import share_active from './../../assets/main_icons/share_active.svg';
import save from './../../assets/main_icons/save.svg';
import saved from './../../assets/main_icons/saved.svg';
import note from './../../assets/main_icons/note.svg';
import smile from './../../assets/main_icons/smile.svg';
import send from './../../assets/main_icons/send.svg';
import sendnb from './../../assets/main_icons/send_notblue.svg';

import { CommentModel } from '../../models/CommentModel';
import { useUser } from '../../contexts/UserContext';
import Modal from '../Modal/Modal';

type PostProps = {
    post: PostModel;
}

const Post = ( {post}: PostProps ) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isShared, setIsShared] = useState(false);
    const [shares, setShares] = useState(post.reposts);

    const {user} = useUser();

    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes);
    const [showHeart, setShowHeart] = useState(false);

    const [isCommWindowOpen, setIsCommWindowOpen] = useState(false);

    const [comments, setComments] = useState<CommentModel[]>(post.comments);
    const [text, setText] = useState('');

    const handleCommentSend = () => {
        if (text.trim() === '' || !user) return;

        const newComment = new CommentModel(0, user, text, new Date(), 0);

        setComments([...comments, newComment]);
        setText('');
    }

    const handleSaveClick = () => {
        setIsSaved(prev => !prev);
    };

    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 1000);
        }
        setIsLiked(prev => !prev);
    };

    const handleShareClick = () => {
        if (isShared) {
            setShares(prev => prev - 1);
        } else {
            setShares(prev => prev + 1);
        }
        setIsShared(prev => !prev);
    };

    return (
        <div className="post">
            <div className="container">
                <div className="post__content">

                    <div className="post__header">
                        <div className="user__info">
                            <img src={post.user.avatar} alt="avatar" />
                            <div className="username__and__location">
                                <h3>{post.user.username}</h3>
                                <p>{post.location}</p>
                            </div>
                        </div>
                        <div className='button__more'><img src={more} alt="more" /></div>
                    </div>

                    <div className="post__face">
                        <p className='post__face__p'>{post.content}</p>
                        <div className="post__image__wrapper">
                            {post.image && <img onDoubleClick={handleLikeClick} className='post__face__img' src={post.image} alt='img'/>}
                            {showHeart && (
                                <img src={liked} alt="liked" className='like__animation' />
                            )}
                        </div>
                        <div className="post__face__buttons">

                            <div onClick={handleLikeClick} className="post__item">
                                
                                    <img src={isLiked ? liked : like} alt="like" />
                                    
                                <p>{likes}</p>
                            </div>

                            <div onClick={() => setIsCommWindowOpen(true)} className="post__item">
                                <img src={comment} alt="comment" />
                                <p>{comments.length}</p>
                            </div>

                            {isCommWindowOpen && (
                                <Modal onClose={() => setIsCommWindowOpen(false)}>
                                    <div className="comments-modal-content" onClick={e => e.stopPropagation()}>

                                        <div className="comments__header">
                                            <h3>Comments</h3>
                                        </div>

                                        <div className="comments">
                                            {comments.map((comment, index) => (
                                                <Comment key={index} comment={comment}/>
                                            ))}
                                        </div>

                                        <div className="comments__footer">
                                            <img className='comments__footer__avatar' src={avatar} alt="user" />
                                            <div className="comments__footer__input">
                                                <input name='any' type="text" placeholder='Write your comment..' value={text} onChange={(e) => setText(e.target.value)} />
                                                <div className="comment__footer__input__emoji">
                                                    <img src={smile} alt="emoji" />
                                                </div>
                                            </div>
                                            <img className='comments__footer__send' src={sendnb} alt="send" onClick={handleCommentSend}/>
                                            
                                        </div>

                                    </div>
                                </Modal>
                            )}

                            <div className="post__item" onClick={handleShareClick}>
                                <img src={isShared ? share_active : share} alt="share" />
                                <p>{shares}</p>
                            </div>
                            
                            <div onClick={handleSaveClick} className="post__item">
                                <img src={isSaved ? saved : save} alt="save" />
                            </div>

                        </div>
                    </div>

                    <div className="post__footer">
                        <div className="post__footer__left">
                            <img src={avatar} alt="avatar" />
                            <input type="text" placeholder='Write your comment..' value={text} onChange={(e) => setText(e.target.value)}/>
                        </div>
                        <div className="post__footer__right">
                            <div><img src={note} alt="note" /></div>
                            <div><img src={smile} alt="smile" /></div>
                            <div><img src={send} alt="send" onClick={handleCommentSend}/></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post;