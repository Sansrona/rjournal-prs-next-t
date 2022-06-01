import React from 'react'
import { Button, Input } from '@material-ui/core'
import styles from "./WriteForm.module.scss";
import dynamic from 'next/dynamic'

interface WriteFormProps {
    data?: any;
}

const Editor = dynamic(() => import("../Editor").then(m => m.Editor), { ssr: false })

const WriteForm: React.FC<WriteFormProps> = () => {
    const [title, setTitle] = React.useState('');
    const [blocks, setBlocks] = React.useState([]);

    return (
        <div>
            <Input value={title} onChange={e => setTitle(e.target.value)} classes={{ root: styles.inputField }} placeholder="Заголовок"></Input>
            <div className={styles.editor}>
                <Editor onChangeBlocks={arr => setBlocks(arr)}/>
            </div>
            <Button variant="contained" color="primary" >
                Опубликовать
            </Button>
        </div>
    )
}

export default WriteForm