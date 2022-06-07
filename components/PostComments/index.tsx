import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react'
import { AddCommentForm } from '../AddCommentForm';
import { Comment } from '../Comment/'
import { CommentItem } from '../../utils/api/types';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import { useComments } from '../../hooks/useComments';

interface PostCommentsProps {
    postId: number;
}


export const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
    const userData = useAppSelector(selectUserData);
    const [activeTab, setActiveTab] = React.useState(0);
    // const comments = data.comments[!activeTab ? "popular" : "new"]
    const {comments, setComments} = useComments(postId);

    const onCommentAdd = (obj: CommentItem) => {
        setComments(prev => [...prev, obj]);
    }

    const onCommentRemove = (id: number) => {
        setComments(prev => prev.filter(obj=> obj.id !== id));
    }

    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className="container">
                <Typography variant="h6" className="mb-20">
                   { comments.length } комментария
                </Typography>
                <Tabs
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    className="mt-20"
                    value={activeTab}
                    indicatorColor="primary"
                    textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                {userData && <AddCommentForm postId={postId} onSuccessAdd={onCommentAdd} />
                }
                <div className="mb-20" />
                {comments.map(obj => (
                    <Comment key={obj.id} id={obj.id} onRemove={onCommentRemove} user={obj.user} userId={userData.id} createdAt={obj.createdAt} text={obj.text} />
                ))}
            </div>
        </Paper>
    )
}
