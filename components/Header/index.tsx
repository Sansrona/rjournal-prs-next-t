import React from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, ListItem, List } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  PersonOutlineOutlined as UserIcon
} from '@material-ui/icons';

import styles from './Header.module.scss';
import { AuthDialog } from '../AuthDialog';
import { selectUserData } from '../../redux/slices/user';
import { useAppSelector } from '../../redux/hooks';
import { PostItem } from '../../utils/api/types';
import { Api } from '../../utils/api';

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [isAuthVisible, setIsAuthVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [posts, setPosts] = React.useState<PostItem[]>();

  const openAuthDialog = () => {
    setIsAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setIsAuthVisible(false);
  };

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    try {
      const {items} = await Api().post.search({ title: e.target.value });
      setPosts(items);
    } catch (error) {
      console.warn(error);

    }
  }

  React.useEffect(() => {
    if (isAuthVisible && userData) {
      setIsAuthVisible(false);
    }
  }, [isAuthVisible, userData])


  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input value={searchValue} onChange={onSearch} placeholder="Поиск" />
          {posts?.length > 0 && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                {posts.map(post => (
                  <Link key={post.id} href={`/news/${post.id}`}>
                    <a>
                      <ListItem button>{post.title}</ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
        </div>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {userData ? <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom />
          </a>
        </Link> : <div className={styles.authBtn} onClick={openAuthDialog}>
          <UserIcon />
          Войти
        </div>}

      </div>
      <AuthDialog onClose={closeAuthDialog} isVisible={isAuthVisible} />
    </Paper>
  );
};
