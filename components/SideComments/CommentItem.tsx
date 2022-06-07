import { Avatar } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { PostItem, ResponseUserTypes } from '../../utils/api/types';
import styles from './SideComments.module.scss';

interface CommentItemProps {
    user: ResponseUserTypes
    text: string;
    post: PostItem;
}

export const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <Avatar className={'mr-15'}>{user.fullName[0]}</Avatar>
                <Link href={`/profile/${user.id}`}>
                    <a>

                        <b>{user.fullName}</b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${post.id}`}>
                <a>
                    <span className={styles.postTitle}>{post.title}</span>
                </a>
            </Link>
        </div>
    );
};
