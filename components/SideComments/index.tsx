import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import { CommentItem } from './CommentItem'

import styles from './SideComments.module.scss';
import clsx from 'clsx';
import { useComments } from '../../hooks/useComments';

export const SideComments = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const {comments} = useComments();

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div  className={clsx(styles.root, !isVisible && styles.rotated)}>
      <h3 onClick={toggleIsVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {isVisible &&
        comments.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))
      }
    </div >
  );
};
