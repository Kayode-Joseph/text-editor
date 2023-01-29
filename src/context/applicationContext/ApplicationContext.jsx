import { useState, createContext, useContext, useRef } from 'react';

import { widgetStates } from '../../components/embedWidget/EmbedWidgetConstants';

const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [shouldRenderLinkDialogBox, setShouldRenderLinkDialogBox] =
        useState(false);

    const fileURLRef = useRef(null);

    const [shouldRenderEmbedWidget, setShouldRenderEmbedWidget] =
        useState(false);

    const [widgetState, setWidgetState] = useState(widgetStates.PHOTO);

    const [videoURL, setVideoURL] = useState('');

    return (
        <ApplicationContext.Provider
            value={{
                shouldRenderLinkDialogBox,
                setShouldRenderLinkDialogBox,
                shouldRenderEmbedWidget,
                setShouldRenderEmbedWidget,
                fileURLRef,
                videoURL,
                setVideoURL,
                widgetState,
                setWidgetState,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplicationContext = () => {
    return useContext(ApplicationContext);
};


