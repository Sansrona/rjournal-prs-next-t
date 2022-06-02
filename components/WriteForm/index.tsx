import React from 'react'
import { Button, Input, TextField } from '@material-ui/core'
import styles from "./WriteForm.module.scss";
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';
import { useRouter } from 'next/dist/client/router';

interface WriteFormProps {
    data: PostItem;
}

const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const [title, setTitle] = React.useState(data?.title || '');
    const [body, setBody] = React.useState(data?.body || '');

    const onPostAdd = async () => {
        try {
            setIsLoading(true);
            const obj = {
                title,
                body
            };
            if (!data) {
                const post = await Api().post.create(obj);
                await router.push(`write/${post.id}`);
            } else {
                await Api().post.update(data.id, obj);
            }
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
                <TextField value={body} multiline classes={{ root: styles.editor }}
                    onChange={e => setBody(e.target.value)} />
            </div>
            <Button disabled={isLoading || !body.length || !title} onClick={onPostAdd} variant="contained" color="primary" >
                {data ? 'Сохранить' : 'Опубликовать'}
            </Button>
        </div>
    )
}

export default WriteForm