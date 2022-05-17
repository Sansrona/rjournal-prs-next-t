import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import { CommentItem } from './CommentItem'

import data from '../../data'
import styles from './SideComments.module.scss';
import clsx from 'clsx';

export const SideComments = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div  className={clsx(styles.root, !isVisible && styles.rotated)}>
      <h3 onClick={toggleIsVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {isVisible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))
      }
    </div >
  );
};
