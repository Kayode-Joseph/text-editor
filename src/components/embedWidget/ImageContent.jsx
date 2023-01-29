import { useApplicationContext } from '../../context/applicationContext/ApplicationContext';
import { useState, useRef } from 'react';
import { insertImage } from '../../services/TextEditorService';

export const ImageContent = () => {
    const { fileURLRef } = useApplicationContext();

    const [
        textToDisplayOnFileUploadButton,
        setTextToDisplayOnFileUploadButton,
    ] = useState('Import image from device');

    return (
        <>
            <div className='mt-2'>Upload Image</div>
            <div className='font-size-3 mt-2 secondary-color-fg'>
                File Upload
            </div>
            <div
                className='w-100 h-50 d-flex  
                        border-dashed primary-color-border rounded'
            >
                <div className=' mt-auto mb-auto d-flex flex-column w-100 h-100'>
                    <input
                        type={'file'}
                        className='mt-6 cursor-hover position-absolute z-2 opacity-0'
                        id='input'
                        onChange={(e) => {
                            fileURLRef.current = URL.createObjectURL(
                                e.target.files[0]
                            );

                            setTextToDisplayOnFileUploadButton(
                                e.target.files[0].name
                            );
                        }}
                    />

                    <button
                        type='button'
                        className='btn btn-outline-success btn-block btn-lg ms-auto me-auto my-auto disabled '
                    >
                        {textToDisplayOnFileUploadButton}
                    </button>
                </div>
            </div>
        </>
    );
};

export const embedImage = (fileURL, editor) => {
    if (fileURL.current == null) {
        return;
    }
    insertImage(editor, fileURL.current);
    fileURL.current = null;
};
