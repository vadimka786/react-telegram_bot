import React from 'react'
import { UseTelegram } from '../../hooks/useTelegram';

const Header = () => {

    const {user, onClose} = UseTelegram();

    return (
        <div className={'header'}>
            <Button onClic={onClose} >Закрыть</Button>
            <span className={'username'} >
                {user?.username}
            </span>
        </div>
    );
};

export default Header;