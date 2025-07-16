import './post.css';

import postimg1 from './../../assets/post_imgs/postimg1.png';
import more from './../../assets/main_icons/more.svg';
import avatar from './../../assets/avatars/a1.png';
import avatar2 from './../../assets/avatars/a2.png';
import like from './../../assets/main_icons/like.svg';
import comment from './../../assets/main_icons/comment.svg';
import share from './../../assets/main_icons/share.svg';
import save from './../../assets/main_icons/save.svg';
import note from './../../assets/main_icons/note.svg';
import smile from './../../assets/main_icons/smile.svg';
import  send from './../../assets/main_icons/send.svg';

const Post = () => {
    return (
        <div className="post">
            <div className="container">
                <div className="post__content">
                    <div className="post__header">
                        <div className="user__info">
                            <img src={avatar} alt="avatar" />
                            <div className="username__and__location">
                                <h3>username</h3>
                                <p>location</p>
                            </div>
                        </div>
                        <div className='button__more'><img src={more} alt="more" /></div>
                    </div>
                    <div className="post__face">
                        <p className='post__face__p'>Here must be some description</p>
                        <img className='post__face__img' src={postimg1} alt='img'/>
                        <div className="post__face__buttons">
                            <div className="post__item">
                                <img src={like} alt="like" />
                                <p>12 Likes</p>
                            </div>
                            <div className="post__item">
                                <img src={comment} alt="comment" />
                                <p>25 Comments</p>
                            </div>
                            <div className="post__item">
                                <img src={share} alt="share" />
                                <p>187 Share</p>
                            </div>
                            <div className="post__item">
                                <img src={save} alt="save" />
                            </div>
                        </div>
                    </div>
                    <div className="post__footer">
                        <div className="post__footer__left">
                            <img src={avatar2} alt="avatar" />
                            <input type="text" placeholder='Write your comment..'/>
                        </div>
                        <div className="post__footer__right">
                            <div><img src={note} alt="note" /></div>
                            <div><img src={smile} alt="smile" /></div>
                            <div><img src={send} alt="send" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;