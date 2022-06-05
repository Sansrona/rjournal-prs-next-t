import { Button, Input } from '@material-ui/core'
import React from 'react'
import { Api } from '../../utils/api';
import { CommentItem } from '../../utils/api/types';
import styles from './AddCommentForm.module.scss'

interface AddCommentFormProps {
    postId: number;
    onSuccessAdd: (obj: CommentItem) => void;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId, onSuccessAdd }) => {
    
    const [isActive, setIsActive] = React.useState(false);
    const [content, setContent] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onAddComment = async () => {
        try {
            const data = await Api().comment.create({ postId, text: content });
            onSuccessAdd(data);
            setIsSubmitting(true);
            setIsActive(false);
            setContent('');
        } catch (error) {
            console.warn(error); 

        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className={styles.form}>
            <Input
                minRows={isActive ? 5 : 1}
                value={content}
                disabled={isSubmitting}
                onFocus={() => setIsActive(true)}
                onChange={(e) => setContent(e.target.value)}
                classes={{ root: styles.fieldRoot }}
                placeholder="Написать комментарий..."
                multiline
                fullWidth />
            {isActive && <Button
                className={styles.addButton}
                disabled={isSubmitting}
                variant='contained'
                color='primary'
                onClick={onAddComment}
            >
                Опубликовать
            </Button>}
        </div>
    )
}
