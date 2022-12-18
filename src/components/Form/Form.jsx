import React from 'react'
import { useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
    const [country, setCountry] = UseState('');
    const [city, setSity] = UseState('');
    const [subject, setSubject] = UseState('physical');

    const {tg} = useTelegram();
    useEffect( () => {
        tg.MainButton.setParams( {
            text: 'Отправить данные'
        })
    }, [])

    useEffect( () => {
        if(!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city])


    const onChangeCount = (e) => {
        setCountry(e.target.value)
    }

    const onChangeCity = (e) => {
        setSity(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={'Form'}>
            <h3>Введите ваши данные</h3>
            <input 
            className={'input'} 
            type="text" placeholder={'Страна'} 
            value={country}
            onChange={onChangeCount}
            />

            <input 
            className={'input'} 
            type="text" 
            placeholder={'Улица'} 
            value={city}
            onChange={onChangeCity}
            />

            <select 
            className={'select'} 
            value={subject} 
            onChange={onChangeSubject} >

                <option value={'phisical'}>Физическое лицо </option >
                <option value={'Uyrist'}>Юридическое лицо</option>

            </select>


        </div>
    );
};

export default Form;