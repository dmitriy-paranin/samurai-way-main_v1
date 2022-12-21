import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div className={s.content}>
            <div className={s.background}>
                <img src="https://u-stena.ru/upload/iblock/679/67900513b84ad564dae641d667181436.jpg" alt=""/>
            </div>
            <div className={s.ava}>
                ava + description
            </div>
        </div>
    );
}

export default Profileinfo;
