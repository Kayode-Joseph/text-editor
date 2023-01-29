import { useState, useEffect } from 'react';

import { checkIfMarkHasProperty } from '../../services/TextEditorService';

export const useCheckMark = (editor) => {
    const [checkIfTextHasBoldMark, setCheckIfTextHasBoldMark] = useState(false);

    const [checkIfTextHasItalicMark, setCheckIfTextHasItalicMark] =
        useState(false);

    const [checkIfMarkHasBulletList, setCheckIfMarkHasBulletList] =
        useState(false);

    const [checkIfMarkHasNumberedList, setCheckIfMarkHasNumberedList] =
        useState(false);

    const [checkIfMarkHasBlockQuotes, setCheckIfMarkHasBlockQuotes] =
        useState(false);

    const [checkIfMarkIsAlignedCenter, setCheckIfMarkIsAlignedCenter] =
        useState(false);

    const [checkIfMarkIsAlignedLeft, setCheckIfMarkIsAlignedLeft] =
        useState(false);

    const [checkIfMarkIsAlignedRight, setCheckIfMarkIsAlignedRight] =
        useState(false);

    useEffect(() => {
        setCheckIfTextHasBoldMark(checkIfMarkHasProperty('bold', editor));
        setCheckIfTextHasItalicMark(checkIfMarkHasProperty('italic', editor));
        setCheckIfMarkHasBulletList(
            checkIfMarkHasProperty('bulletList', editor)
        );
        setCheckIfMarkHasNumberedList(
            checkIfMarkHasProperty('orderedList', editor)
        );

        setCheckIfMarkHasBlockQuotes(
            checkIfMarkHasProperty('blockquote', editor)
        );
        setCheckIfMarkIsAlignedCenter(
            checkIfMarkHasProperty({ textAlign: 'center' }, editor)
        );
        setCheckIfMarkIsAlignedLeft(
            checkIfMarkHasProperty({ textAlign: 'left' }, editor)
        );
        setCheckIfMarkIsAlignedRight(
            checkIfMarkHasProperty({ textAlign: 'right' }, editor)
        );
    }, [editor?.state]);

    return {
        checkIfMarkHasBlockQuotes,
        checkIfMarkHasBulletList,
        checkIfMarkHasNumberedList,
        checkIfTextHasBoldMark,
        checkIfTextHasItalicMark,
        checkIfMarkIsAlignedCenter,
        checkIfMarkIsAlignedLeft,
        checkIfMarkIsAlignedRight,
    };
};
