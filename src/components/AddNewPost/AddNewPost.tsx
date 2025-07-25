import './addNewPost.css';
import cancel_icon from './../../assets/addnewpost_icons/cancel.svg';
import publish_icon from './../../assets/addnewpost_icons/publish.svg';

import { useUser } from '../../contexts/UserContext/UserContext';
import { useState } from 'react';
import { PostModel } from '../../models/PostModel';
import { posts_array } from '../../mock/posts';
import UploadFile from '../UploadFile/UploadFile';

type AddNewPostProps = {
    onClose: () => void;
}

const AddNewPost = ( {onClose}: AddNewPostProps ) => {
    const stopProp: React.MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();
    const {user} = useUser();

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('Public');
    const options: string[] = ['Public', 'Private', 'Only Friends'];

    const [textLocation, setTextLocation] = useState('');
    const [textDesctiprion, setTextDescription] = useState('');
    const [file, setFile] = useState<string>();

    const handlePublishButton = () => {
        if (textLocation.trim() === '' || textDesctiprion.trim() === '' || !user) {
            return;
        } else {
            posts_array.unshift( new PostModel(posts_array.length + 1, user, textLocation, textDesctiprion, file ?? null, 0 , [], 0));
            onClose();
        }
    }

    return (
        <div className='addpost__window' onClick={stopProp}>
            <div className="addpost__container">
                <div className="addpost__content">
                    <div className="addpost__header">
                        <div className="addpost__header__user">
                            <img src={user?.avatar} alt="user avatar" />
                            <div className="addpost__header__username">
                                <p>{user?.username}</p>
                                <p>@{user?.username.toLowerCase()}</p>
                            </div>
                        </div>
                        <div onClick={onClose} className='addpost__close__window'><img src={cancel_icon} alt="close window" /></div>
                    </div>
                    <div className="addpost__main">


                            <div className="addpost__left__item">
                                <label htmlFor='addpost_location'>Location</label>
                                <div>
                                    <input id='addpost_location' type="text" placeholder="King’s Landing..." value={textLocation} onChange={(e) => setTextLocation(e.target.value)} />
                                </div>
                            </div>

                            <UploadFile setFile={setFile}/>

                            <div className="addpost__left__item">
                                <label htmlFor='addpost__description'>Description</label>
                                <div>
                                    <textarea 
                                        id='addpost__description' 
                                        placeholder='From the walls of King’s Landing, I watched the sea swallow the last light of day...'
                                        value={textDesctiprion} onChange={(e) => setTextDescription(e.target.value)}/>
                                </div>
                            </div>

                            <div className="addpost__left__item">
                                <label htmlFor='addpost_visibility'>Visibility</label>
                                <div className='dropdown'>
                                    <div className="dropdown__header" onClick={() => setOpen(prev => !prev)}>
                                        {selected} <span className="arrow">{open ? "▼" : "▲"}</span>
                                    </div>
                                        <ul className={`dropdown__list ${open ? "show" : ""}`}>
                                            {options.map((option) => (
                                                <li key={option} onClick={() => {setSelected(option); setOpen(false); }}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                </div>
                            </div>

                            <div className="addpost___right__buttons">
                                <div onClick={onClose} className="addpost__right__btn cancel">
                                    <p>Cancel</p>
                                    <img src={cancel_icon} alt="cancel" />
                                </div>
                                <div onClick={handlePublishButton} className="addpost__right__btn publish">
                                    <p>Publish</p>
                                    <img src={publish_icon} alt="publish post" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPost;