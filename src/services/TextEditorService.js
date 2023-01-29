import { EditorContent } from '@tiptap/react';

import { Node as ProsemirrorNode } from 'prosemirror-model';

export const italizeText = (editor) => {
    return editor.chain().focus().toggleItalic().run();
};

export const boldenText = (editor) => {
    editor.chain().focus().toggleBold().run();
};

export const makeBulletForm = (editor) => {
    editor.chain().focus().toggleBulletList().run();
};

export const makeOrderedList = (editor) => {
    editor.chain().focus().toggleOrderedList().run();
};
export const makeBlockQuotes = (editor) => {
    editor.chain().focus().toggleBlockquote().run();
};

export const alignText = (editor, side) => {
    editor.chain().focus().setTextAlign(side).run();
};

export const insertImage = (editor, file) => {
    if (!file) {
        return;
    }

    editor
        .chain()
        .focus()
        .setImage({
            src: file,
        })
        .run();
};

export const insertVideo = (videoURL, editor) => {
    editor.commands.setYoutubeVideo({
        src: videoURL,
    });
};

export const checkIfMarkHasProperty = (property, editor) => {
    return editor?.isActive(property);
};

export const toggleCodeBlock = (editor) => {
    editor.chain().focus().toggleCodeBlock().run();
};
export const setParagraph = (editor) => {
    editor.chain().focus().setParagraph().run();
};
