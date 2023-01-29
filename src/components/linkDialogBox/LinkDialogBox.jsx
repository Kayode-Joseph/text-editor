import sanitize from 'sanitize-html';

import '../Components.css';

import { useState, useEffect } from 'react';
import { useApplicationContext } from '../../context/applicationContext/ApplicationContext';

export const LinkDialogBox = ({ editor }) => {
    const [linkValue, setLinkValue] = useState('');

    const [displayTextValue, setDisplayTextValue] = useState('');

    const { setShouldRenderLinkDialogBox } = useApplicationContext();

    const listenForClickOutOfLinkDialogBlock = (e) => {
        if (
            document.getElementById('link-dialog-box').contains(e.target) ||
            e.target.id === 'link'
        ) {
        } else {
            setShouldRenderLinkDialogBox(false);
        }
    };

    useEffect(() => {
        //functionality to make dialog box dissappear if you click outside div
        window.addEventListener('click', listenForClickOutOfLinkDialogBlock);
        return () =>
            window.removeEventListener(
                'click',
                listenForClickOutOfLinkDialogBlock
            );
    }, []);

    return (
        <>
            <div
                id='link-dialog-box'
                className={
                    'd-inline-flex flex-column position-absolute bg-secondary p-2 border-secondary border-2 border mt-3 align-self-center z-2'
                }
            >
                <input
                    className='input-box focus'
                    placeholder='Add link here'
                    onChange={(event) => {
                        setLinkValue(event.target.value);
                    }}
                    value={linkValue}
                />
                <input
                    className='input-box mt-2 focus'
                    placeholder='write display text here'
                    onChange={(event) => {
                        setDisplayTextValue(event.target.value);
                    }}
                    value={displayTextValue}
                />
                <input
                    type={'submit'}
                    className='mt-2 w-50 align-self-end '
                    value={'link'}
                    onClick={() => {
                        //sanitize function to make sure no script tag makes it into the dom
                        editor.commands.insertContent(
                            `<a href="${linkValue}">${displayTextValue}</a> `
                        );
                    }}
                />
            </div>
        </>
    );
};
