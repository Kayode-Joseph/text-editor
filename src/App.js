import logo from './logo.svg';
import { EditorContent, useEditor } from '@tiptap/react';
import './App.css';
import './App.scss';
import { TextEditorMenu } from './components/textEditorMenu/TextEditorMenu';
import { EmbedWidget } from './components/embedWidget/EmbedWidget';
import { ApplicationContextProvider } from './context/applicationContext/ApplicationContext';
import { EditorScreen } from './screens/editorScreen/EditorScreen';
import { useCustomTextEditor } from './hooks/textEditor/useCustomTextEditor';

function App() {
    return (
        <>
            <div className=' flex-1 d-flex p-2 position-relative'>
                <ApplicationContextProvider>
                    <EditorScreen />
                </ApplicationContextProvider>
            </div>
        </>
    );
}

export default App;
