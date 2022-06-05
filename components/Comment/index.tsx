import React from 'react';
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';
import { ResponseUserTypes } from '../../utils/api/types';
import { Api } from '../../utils/api';

interface CommentPostProps {
  user: ResponseUserTypes;
  text: string;
  createdAt: string;
  userId: number;
  id: number;
  onRemove: (id: number) => void;
}

export const Comment: React.FC<CommentPostProps> = ({ id, user, text, createdAt, userId, onRemove }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onCommentRemove = async () => {
    if (window.confirm()) {
      try {
        await Api().comment.remove(id)
        onRemove(id);
      } catch (err) {
        console.warn('Comment remove error', err);
        alert('Не удалось удалить комментарий');
      } finally {
        handleClose();
      }
    }
  }

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar>{user.fullName[0]}</Avatar>
        <b className="ml-5">{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>
        {text}
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      {user.id === userId &&
        <>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted>
            <MenuItem onClick={onCommentRemove}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu></>}
    </div>
  );
};
