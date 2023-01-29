import { useState } from 'react';

export const selectOptionsEnum = {
    PARAGRAPH: 'PARAGRAPH',
    CODEBLOCK: 'CODEBLOCK',
};

export const optionsList = [
    { label: 'paragraph', value: selectOptionsEnum.PARAGRAPH },
    { label: 'code block', value: selectOptionsEnum.CODEBLOCK },
];

export const customStylesForSelectTag = (width, height) => {
    return {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: 'black',
            backgroundColor: state.isSelected ? 'rgb(150, 255, 150)' : 'white',
            '&:hover': {
                borderColor: 'green',
            },
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: '#ffff',
            border: 'none',
            boxShadow: 'none',
            width: width / 5,
            padding: 10,
            paddingTop: 20,
            display: 'flex',
            alignItems: 'center',
        }),
        // singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#fff' }),

        indicatorSeparator: (defaultStyles) => ({
            backgroundColor: '#ffff',
        }),
    };
};

export const resolveStyleObjectForIconContainer = (predicate) => {
    return {
        backgroundColor: predicate ? '#dc3545' : 'white',
        padding: '0.5rem',
    };
};

export const resolveIconColor = (predicate) => (predicate ? 'white' : 'black');

//checks cursor location to see the type of node it is
