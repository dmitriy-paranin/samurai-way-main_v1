import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type dialogType = {
    id: number;
    name: string;
}
type messageType = {
    message: string;
}

let Dialog = (props: dialogType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

let Message = (props: messageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <Dialog id={1} name={'Dima'}/>
                <Dialog id={2} name={'Tanya'}/>
                <Dialog id={3} name={'Liza'}/>
                <Dialog id={4} name={'Mark'}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='Yo!'/>
                <Message message='Haw are you?'/>
                <Message message='What???'/>
            </div>
        </div>
    );
}

export default Dialogs;
