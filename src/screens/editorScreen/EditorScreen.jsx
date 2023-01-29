import { TextEditorMenu } from '../../components/textEditorMenu/TextEditorMenu';

import { useCustomTextEditor } from '../../hooks/textEditor/useCustomTextEditor';

import { useEffect, useState } from 'react';

import { EditorContent } from '@tiptap/react';

import { useApplicationContext } from '../../context/applicationContext/ApplicationContext';

import { EmbedWidget } from '../../components/embedWidget/EmbedWidget';

import { CirclePlusButton } from '../../components/circlePlusButton/CirclePlusButton';

export const EditorScreen = () => {
    const editor = useCustomTextEditor();

    const { shouldRenderEmbedWidget } = useApplicationContext();

    return (
        <>
            <div
                className='d-flex flex-column p-4 flex-1 position-relative'
                style={{ backgroundColor: 'rgb(250,250,250)' }}
            >
                <textarea
                    className='textarea border-bottom-0 ps-3 '
                    style={{ backgroundColor: 'rgb(250,250,250)' }}
                >
                    Kayode's favorite basket ball plays
                </textarea>
                <div className='border border-secondary border-top-0 d-flex flex-column flex-1'>
                    <div className='ms-3'>
                        <TextEditorMenu editor={editor} />
                    </div>
                    <EditorContent
                        editor={editor}
                        className='editor'
                    ></EditorContent>
                    <div
                        className='position-absolute z-2  bottom-2 w-100'
                        style={{ bottom: 1 }}
                    >
                        <CirclePlusButton />
                    </div>
                </div>

                <div className='d-flex border border-secondary border-top-0 justify-content-end p-4 bg-white'>
                    {editor?.storage?.characterCount.words()}/1000
                </div>
                <div className='d-flex justify-content-end mt-2'>
                    <div className='btn btn-success'>Post</div>
                </div>
            </div>

            {shouldRenderEmbedWidget ? (
                <div className='d-flex z-2 position-absolute justify-content-center align-items-center transparent w-100 h-100 flex-1'>
                    <div>
                        <EmbedWidget editor={editor} />
                    </div>
                </div>
            ) : null}
        </>
    );
};
