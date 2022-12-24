import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts_wrapper}>
            <div>
                <div>
                    <h3>My Posts</h3>
                </div>
                <div>
                    <textarea value={'bla-bla'} className={s.textarea}></textarea>
                </div>
                <div>
                    <button className={s.button_add_post}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hello!'/>
                <Post message='Hello!'/>
                <Post message='Hello!'/>
            </div>
        </div>
    );
}

export default MyPosts;
