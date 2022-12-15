import React from 'react';
import s from './Posts.module.css';

type MessageType = {
    message: string
}

const Post = (props: MessageType) => {
    return (
        <div className={s.post_wrapper}>
            <div className={s.item}>
                <img src="https://pbs.twimg.com/profile_images/899743208145657862/DSbQUuYE.jpg" alt="ava"/>
                {props.message}
                <div>
                    <span>
                        like
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Post;
