import React from 'react'
import EditorJS, { OutputData } from '@editorjs/editorjs';

interface EditorProps {
    onChangeBlocks: (blocks: OutputData['blocks']) => void;
}

export const Editor: React.FC<EditorProps> = ({ onChangeBlocks }) => {
    React.useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: "Введите текст вашей статьи",
            async onChange() {
                const { blocks } = await editor.save();
                onChangeBlocks(blocks);
            }
        })
        return () => {
            editor.isReady.then(() => {
                editor.destroy()
            }).catch((e) => {
                console.log("Failed to destroy editor", e);
            })
        }
    }, [])
    return (
        <div id="editor"></div>
    )
}