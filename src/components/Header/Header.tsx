import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__wrapper}>
                <div className={s.logo}>
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Planet_logo_New.png" alt="logo"/>
                    </a>
                </div>
                <div className={s.theme_toggle}>theme-toggle</div>
            </div>
        </div>
    );
}

export default Header;
