import '../Components.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import MenuItem from '@mui/material/MenuItem';
import Select from 'react-select';

import { BsLink45Deg } from 'react-icons/bs';

import { BsImageFill } from 'react-icons/bs';

import { AiOutlineAlignLeft } from 'react-icons/ai';

import { AiOutlineAlignRight } from 'react-icons/ai';

import { AiOutlineAlignCenter } from 'react-icons/ai';

import { FaBold } from 'react-icons/fa';

import { FaItalic } from 'react-icons/fa';

import { MdFormatListBulleted } from 'react-icons/md';

import { MdOutlineFormatListNumbered } from 'react-icons/md';

import { BsBlockquoteLeft } from 'react-icons/bs';

import { useEffect, useState } from 'react';

import { LinkDialogBox } from '../linkDialogBox/LinkDialogBox';

import { useApplicationContext } from '../../context/applicationContext/ApplicationContext';

import { useCheckMark } from '../../hooks/textEditor/useCheckMark';

import {
    italizeText,
    boldenText,
    makeBulletForm,
    makeOrderedList,
    makeBlockQuotes,
    alignText,
    toggleCodeBlock,
    setParagraph,
} from '../../services/TextEditorService';

import {
    optionsList,
    customStylesForSelectTag,
    resolveStyleObjectForIconContainer,
    resolveIconColor,
    selectOptionsEnum,
} from './TextEditorUtils';
import useWindowDimensions from '../../hooks/common/useWindowsDimension';

const RenderIcons = ({ icons }) => {
    if (!Array.isArray(icons)) throw new Error('invalid prop type');
    return icons.map((icon, index) => (
        <div key={index}>
            <div className='align-self-center ms-4 cursor hover-green'>
                {icon}
            </div>
        </div>
    ));
};

export const TextEditorMenu = ({ editor }) => {
    const { width, height } = useWindowDimensions();

    const ICON_SIZE = width / 50;

    const {
        checkIfMarkHasBlockQuotes,
        checkIfMarkHasBulletList,
        checkIfMarkHasNumberedList,
        checkIfTextHasBoldMark,
        checkIfTextHasItalicMark,
        checkIfMarkIsAlignedCenter,
        checkIfMarkIsAlignedLeft,
        checkIfMarkIsAlignedRight,
    } = useCheckMark(editor);

    const {
        shouldRenderLinkDialogBox,
        setShouldRenderLinkDialogBox,
        setShouldRenderEmbedWidget,
    } = useApplicationContext();
    return (
        <div className=' border d-inline-flex bg-white'>
            <div className=' border-end'>
                <Select
                    options={optionsList}
                    styles={customStylesForSelectTag(width, height)}
                    onChange={(option) => {
                        console.log(option);
                        if (option.value == selectOptionsEnum.CODEBLOCK) {
                            toggleCodeBlock(editor);
                        } else {
                            setParagraph(editor);
                        }
                    }}
                ></Select>
            </div>
            <div className='d-flex border-end p-2 ps-0  p-2 px-4  align-items-center justify-content-center'>
                <RenderIcons
                    icons={[
                        <div
                            className='d-flex flex-column ' //if should render dialog box is true i want the conatainer to be highlighted
                            style={resolveStyleObjectForIconContainer(
                                shouldRenderLinkDialogBox
                            )}
                        >
                            <BsLink45Deg
                                size={ICON_SIZE}
                                id='link'
                                className='icon align-self-center '
                                onClick={() => {
                                    setShouldRenderLinkDialogBox(
                                        !shouldRenderLinkDialogBox
                                    );
                                }}
                                color={resolveIconColor(
                                    shouldRenderLinkDialogBox
                                )}
                            />
                            {shouldRenderLinkDialogBox ? (
                                <LinkDialogBox editor={editor} />
                            ) : null}
                        </div>,
                        <div style={resolveStyleObjectForIconContainer(false)}>
                            <BsImageFill
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => {
                                    setShouldRenderEmbedWidget(true);
                                }}
                            />
                        </div>,
                    ]}
                />
            </div>
            <div className='d-flex border-end p-2 px-4 align-items-center justify-content-center'>
                <RenderIcons
                    icons={[
                        <div
                            className=''
                            style={resolveStyleObjectForIconContainer(
                                checkIfMarkIsAlignedLeft
                            )}
                        >
                            <AiOutlineAlignLeft
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => alignText(editor, 'left')}
                                color={resolveIconColor(
                                    checkIfMarkIsAlignedLeft
                                )}
                            />
                        </div>,
                        <div
                            className=''
                            style={resolveStyleObjectForIconContainer(
                                checkIfMarkIsAlignedCenter
                            )}
                        >
                            <AiOutlineAlignCenter
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => alignText(editor, 'center')}
                                color={resolveIconColor(
                                    checkIfMarkIsAlignedCenter
                                )}
                            />
                        </div>,
                        <div
                            className=''
                            style={resolveStyleObjectForIconContainer(
                                checkIfMarkIsAlignedRight
                            )}
                        >
                            <AiOutlineAlignRight
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => alignText(editor, 'right')}
                                color={resolveIconColor(
                                    checkIfMarkIsAlignedRight
                                )}
                            />
                        </div>,
                    ]}
                />
            </div>
            <div className='d-flex border-end p-2 px-3  align-items-center justify-content-center'>
                <RenderIcons
                    icons={[
                        <div
                            className=''
                            style={resolveStyleObjectForIconContainer(
                                checkIfTextHasBoldMark
                            )}
                        >
                            <FaBold
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => {
                                    boldenText(editor);
                                }}
                                color={resolveIconColor(checkIfTextHasBoldMark)}
                            />
                        </div>,
                        <div
                            className=''
                            style={resolveStyleObjectForIconContainer(
                                checkIfTextHasItalicMark
                            )}
                        >
                            <FaItalic
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => {
                                    italizeText(editor);
                                }}
                                color={resolveIconColor(
                                    checkIfTextHasItalicMark
                                )}
                            />
                        </div>,
                    ]}
                />
            </div>
            <div className='d-flex p-2 px-4  align-items-center justify-content-center '>
                <RenderIcons
                    icons={[
                        <div
                            className=''
                            style={resolveStyleObjectForIconContainer(
                                checkIfMarkHasBulletList
                            )}
                        >
                            <MdFormatListBulleted
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => {
                                    makeBulletForm(editor);
                                }}
                                color={resolveIconColor(
                                    checkIfMarkHasBulletList
                                )}
                            />
                        </div>,
                        <div
                            style={resolveStyleObjectForIconContainer(
                                checkIfMarkHasNumberedList
                            )}
                        >
                            <MdOutlineFormatListNumbered
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => {
                                    makeOrderedList(editor);
                                }}
                                color={resolveIconColor(
                                    checkIfMarkHasNumberedList
                                )}
                            />
                        </div>,
                        <div
                            style={resolveStyleObjectForIconContainer(
                                checkIfMarkHasBlockQuotes
                            )}
                        >
                            <BsBlockquoteLeft
                                size={ICON_SIZE}
                                className='icon'
                                onClick={() => {
                                    makeBlockQuotes(editor);
                                }}
                                color={resolveIconColor(
                                    checkIfMarkHasBlockQuotes
                                )}
                            />
                        </div>,
                    ]}
                />
            </div>
        </div>
    );
};
