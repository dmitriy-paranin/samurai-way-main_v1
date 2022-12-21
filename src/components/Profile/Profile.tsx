import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = () => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
