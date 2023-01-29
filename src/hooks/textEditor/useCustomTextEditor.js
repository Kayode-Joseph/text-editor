import TextAlign from '@tiptap/extension-text-align';

import { EditorContent, useEditor } from '@tiptap/react';

import { mergeAttributes } from '@tiptap/react';

import StarterKit from '@tiptap/starter-kit';

import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

import { Youtube } from '../../extension-youtube/src/youtube.ts';

import CharacterCount from '@tiptap/extension-character-count';

const CustomImageExtension = Image.extend({
    renderHTML({ HTMLAttributes }) {
        return [
            'div',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                style: 'display:flex;justify-content:center; width:100%; position:relative',
            }),
            [
                'input',
                {
                    value: 'X',
                    style: 'position:absolute;background-color:#dc3545; top:10px;right:10px;color:white',
                    type: 'submit',
                    onclick: 'this.parentElement.remove();',
                },
            ],
            [
                'img',
                mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                    'margin-left': 'auto',
                }),
            ],
        ];
    },
});

export const useCustomTextEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph', 'image'],
            }),
            Link.configure({
                openOnClick: true,
                linkOnPaste: false,
                HTMLAttributes: {
                    class: 'test',
                },
            }),
            CustomImageExtension.configure({
                HTMLAttributes: {
                    class: 'image',
                },
            }),

            CharacterCount,
            Youtube.configure({
                controls: true,
                width: '100%',
            }),
        ],
        content: `<div  translate="no" tabindex="0"><p><strong><em>Hi there, </em>my favorite </strong>things to do are:</p><ul><li><p>watch basketball</p></li></ul><p style="text-align: right"><em>A youtube video of my favorite plays</em></p>
        <div src="https://www.youtube.com/embed/1Dv63K05MzQ" start="0" width="100%" height="480" style="display:flex;justify-content:center; width:100%; position:relative" contenteditable="false" draggable="true" class=""><input value="X" style="position:absolute;background-color:#dc3545; top:10px;right:10px;color:white" type="submit" onclick="this.parentElement.remove();">
        <div data-youtube-video="">
        <iframe width="100%" height="480" allowfullscreen="true" autoplay="false" disablekbcontrols="false" enableiframeapi="false" endtime="0" ivloadpolicy="0" loop="false" modestbranding="false" origin="" playlist="" src="https://www.youtube.com/embed/1Dv63K05MzQ" start="0"></iframe>
        </div>
        </div><p>
        <br class="ProseMirror-trailingBreak"></p><ul><li><p>write code</p></li></ul><pre><code> @Override
    public List&lt;RestaurantResponse&gt; getRestaurants() {

        List&lt;Restaurant&gt; restaurants = restaurantRepo.findAll();

        return restaurants.stream().map(Util::mapRestaurantToRestaurantResponse).collect(Collectors.toList());
        

    }</code></pre>
    <br>
    <br>
<ul><li><p><em>And ... </em>looking at funny pictures online</p></li></ul>
    <img class="image-size-full" loading="lazy" data-index="2" src="https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-12-63283440474e0__700.jpg" alt="Relatable-Funny-Memes" title="Relatable-Funny-Memes" width="605" height="609" style="">
    <blockquote><p><br>Well that is enough about me. Hopefully I get to meet and know about you to when i resume at Wazobia Technologies.</p></blockquote>

<p style="text-align: center"><strong>IMPORTANT: please type all links in full with the protocol(https) so this text editor can serve you properly</strong></p>
    <p><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p></div>`,
    });

    return editor;
};
