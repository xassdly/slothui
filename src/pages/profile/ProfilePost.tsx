import type { PostModel } from '../../models/PostModel';
import styles from './ProfilePost.module.css';
import defaultImage from './../../assets/profile_icons/noimage.svg';
import likeIcon from './../../assets/main_icons/like.svg';
import commentIcon from './../../assets/main_icons/comment.svg';
import repostIcon from './../../assets/main_icons/share.svg';

type ProfilePostProps = {
    post: PostModel;
}

const ProfilePost = ( { post }:ProfilePostProps ) => {
    const maxLength = 60;
    const displayText = post.content.length > maxLength ? post.content.slice(0, maxLength) + "…" : post.content;

    return (
        <div className={styles.post}>
            <header className={styles.header}>
                {post.location}
            </header>
            <div className={styles.main}>
                <p className={styles.mainText}>{displayText}</p>
                <div className={styles.imgBlock}>
                    {post.image ? (
                        <img className={styles.activeImg} src={post.image} alt="post image" />
                    ) : (
                        <img className={styles.defaultImg} src={defaultImage} alt="default image" />
                    )}
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.likes}><img src={likeIcon} alt="likes" />{post.likes}</div>
                <div className={styles.comments}><img src={commentIcon} alt="comments" />{post.comments.length}</div>
                <div className={styles.reposts}><img src={repostIcon} alt="reposts" />{post.reposts}</div>
            </footer>
        </div>
    )
}

export default ProfilePost;