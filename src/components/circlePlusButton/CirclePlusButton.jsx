import { useState } from 'react';
import { BsImageFill } from 'react-icons/bs';

import { BsFillCameraVideoFill } from 'react-icons/bs';

import { useApplicationContext } from '../../context/applicationContext/ApplicationContext';

import { widgetStates } from '../embedWidget/EmbedWidgetConstants';

import { WiStars } from 'react-icons/wi';

export const CirclePlusButton = () => {
    const { setShouldRenderEmbedWidget, setWidgetState } =
        useApplicationContext();

    const [state, setState] = useState(false);
    return (
        <>
            <div
                className='custom-button rounded-circle p-2 text-sucess d-flex justify-content-center align-items-center cursor'
                onClick={() => {
                    setState(!state);
                }}
            >
                +
            </div>
            {state && (
                <div className='d-flex flex-column  w-15 p-2 shadow bg-white'>
                    <div className='text-secondary mb-2'>Embed</div>
                    <CirclePlusButtonListItem
                        name={'Picture'}
                        type={'jpeg, PNG'}
                        icon={BsImageFill()}
                        onClick={() => {
                            setWidgetState(widgetStates.PHOTO);
                            setShouldRenderEmbedWidget(true);
                            setState(false);
                        }}
                    />
                    <div className='p-3'></div>
                    <CirclePlusButtonListItem
                        name={'Video'}
                        type={'Embed a youtube video'}
                        icon={BsFillCameraVideoFill()}
                        onClick={() => {
                            setWidgetState(widgetStates.VIDEO);
                            setShouldRenderEmbedWidget(true);
                            setState(false);
                        }}
                    />
                    <div className='p-3'></div>
                    <CirclePlusButtonListItem
                        name={'Social'}
                        type={'Embed a facebook link'} //face book doesnt allow you use iframe to call their website
                        icon={WiStars({ color: 'black' })}
                    />
                    <div className='p-2'></div>
                </div>
            )}
        </>
    );
};

const CirclePlusButtonListItem = ({ name, type, icon, onClick }) => {
    return (
        <div
            className='d-flex flex-column circle-button-list cursor p-2'
            onClick={() => onClick()}
        >
            <div className='d-flex flex-column '>
                <div className='d-flex align-items-center'>
                    {icon}
                    <span className='ms-2'>{name}</span>
                </div>
                <div className='font-size-small font-weight-bold circle-button-list ms-4'>
                    {type}
                </div>
            </div>
        </div>
    );
};
