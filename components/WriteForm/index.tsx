import React from 'react'
import { Button, Input, TextField } from '@material-ui/core'
import styles from "./WriteForm.module.scss";
import dynamic from 'next/dynamic'
import { Api } from '../../utils/api';

interface WriteFormProps {
    data?: any;
}

const Editor = dynamic(() => import("../Editor").then(m => m.Editor), { ssr: false })

const WriteForm: React.FC<WriteFormProps> = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const onPostAdd = async () => {
        try {
            setIsLoading(true);
            const post = await Api().post.create({
                title,
                body
            })
            console.log(post);
        }
        catch (err) {
            console.warn('Create post', err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Input value={title} onChange={e => setTitle(e.target.value)} classes={{ root: styles.inputField }} placeholder="Заголовок"></Input>
            <div className={styles.editor}>
                <TextField multiline classes={{ root: styles.editor}}
                     onChange={e => setBody(e.target.value)} />
            </div>
            <Button disabled={isLoading} onClick={onPostAdd} variant="contained" color="primary" >
                Опубликовать
            </Button>
        </div>
    )
}

export default WriteForm