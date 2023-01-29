import { useState } from 'react';

import { useApplicationContext } from '../../context/applicationContext/ApplicationContext';

import { insertVideo } from '../../services/TextEditorService';

export const VideoContent = () => {
    const { videoURL, setVideoURL } = useApplicationContext();

    return (
        <>
            <div className='font-size-3 mt-2 '>VIDEO PROVIDER</div>
            <div>
                <select className='w-100 h-rem-2 p-2 bg-light text-dark mt-1 border secondary-color-border border-2 focus'>
                    <option className='w-100 '>YouTube</option>
                </select>
            </div>
            <div className='mt-2 mb-3'>
                <div className='font-size-3 mt-2'>URL</div>
                <input
                    className='w-100 h-rem-2 p-2 bg-light mt-1 border secondary-color-border border-2 text-dark focus'
                    value={videoURL}
                    onChange={(e) => {
                        setVideoURL(e.target.value);
                    }}
                />
            </div>
        </>
    );
};

export const embedVideo = (videoURL, editor, setVideoUrl) => {
    if (videoURL == null) {
        return;
    }

    insertVideo(videoURL, editor);
    setVideoUrl(null);
};
