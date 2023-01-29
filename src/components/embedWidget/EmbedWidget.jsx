import { useState, useRef } from 'react';

import { useApplicationContext } from '../../context/applicationContext/ApplicationContext';

import { ImageContent } from './ImageContent';

import { embedImage } from './ImageContent';

import { VideoContent } from './VideoContent';

import { widgetStates } from './EmbedWidgetConstants';

import { embedVideo } from './VideoContent';

export const EmbedWidget = ({ editor }) => {
    const {
        setShouldRenderEmbedWidget,
        fileURLRef,
        widgetState,
        videoURL,
        setVideoURL,
    } = useApplicationContext();

    return (
        <div className='d-flex flex-column align-items-center justify-content-center flex-1 shadow-lg'>
            <div className='image-upload-conatiner d-flex bg-body p-3 flex-column'>
                <div>
                    <strong>Embed</strong>
                </div>

                <>
                    {widgetState == widgetStates.PHOTO && <ImageContent />}

                    {widgetState == widgetStates.VIDEO && <VideoContent />}
                </>
                <div className='mt-2'>
                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={() => {
                            if (widgetState == widgetStates.PHOTO) {
                                embedImage(fileURLRef, editor);
                            } else if (widgetState == widgetStates.VIDEO) {
                                embedVideo(videoURL, editor, setVideoURL);
                            }
                            setShouldRenderEmbedWidget(false);
                        }}
                    >
                        submit
                    </button>
                    <button
                        type='button'
                        className='btn btn-outline-success ms-2'
                        onClick={() => {
                            setShouldRenderEmbedWidget(false);
                        }}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
