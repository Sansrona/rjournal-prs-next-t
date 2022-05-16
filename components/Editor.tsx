import React from 'react'
import EditorJS from '@editorjs/editorjs';

const Editor: React.FC = () => {
    React.useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor'
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

export default Editor