import { Button, Input } from '@material-ui/core'
import React from 'react'
import styles from './AddCommentForm.module.scss'

export const AddCommentForm = () => {
    const [isActive, setIsActive] = React.useState(false);
    const [content, setContent] = React.useState('');

    const onAddComment = () => {
        setIsActive(false);
        setContent('');
    }

    return (
        <div className={styles.form}>
            <Input
                minRows={isActive ? 5 : 1}
                value={content}
                onFocus={() => setIsActive(true)}
                onChange={(e) => setContent(e.target.value)}
                classes={{ root: styles.fieldRoot }}
                placeholder="Написать комментарий..."
                multiline
                fullWidth />
            {isActive && <Button
                className={styles.addButton}
                variant='contained'
                color='primary'
                onClick={onAddComment}
            >
                Опубликовать
            </Button>}
        </div>
    )
}
