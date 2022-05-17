import React from 'react';
import { Button, Dialog, DialogContent, DialogContentText, TextField, Typography } from '@material-ui/core';
import { Mail, ArrowBackSharp } from '@material-ui/icons';
import vkIcon from '../../public/static/img/vkontakte-svgrepo-com.svg'

import styles from './AuthDialog.module.scss';
import Image from 'next/image';

interface AuthDialogProps {
  onClose: () => void;
  isVisible: boolean;
}


export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, isVisible }) => {
  const [formType, setFormType] = React.useState<'main' | 'email'>('main');

  return (

    <Dialog
      open={isVisible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth='xs'
      fullWidth
    >
      <DialogContent >
        <DialogContentText>
          <div className={styles.content}>
            {formType === 'main' && <>
              <Typography className={styles.title}>
                Вход на RJ
              </Typography>
              <div>
                <Button className="mb-15" variant="contained" fullWidth>
                  <img src="/static/img/vkontakte-svgrepo-com.svg" alt="" />
                  Вконтакте
                </Button>
                <Button className="mb-15" variant="contained" fullWidth>
                  <img src="/static/img/google-svgrepo-com.svg" alt="" />
                  Google
                </Button>
                <Button onClick={() => setFormType('email')} className="mb-15" variant="contained" fullWidth>
                  <Mail />
                  Моя почта
                </Button>
              </div>
              <div className={styles.miniButtons}>
                <Button variant="contained" fullWidth>
                  <img src="/static/img/facebook-svgrepo-com.svg" alt="" />
                </Button>
                <Button variant="contained" fullWidth>
                  <img src="/static/img/twitter-svgrepo-com.svg" alt="" />
                </Button>
                <Button variant="contained" fullWidth>
                  <img src="/static/img/apple-svgrepo-com.svg" alt="" />
                </Button>
              </div></>}
            {formType === 'email' && <>
              <div className={styles.backBtn} onClick={() => setFormType('main')}>
                <ArrowBackSharp />
                <p>Назад</p>
              </div>
              <Typography className={styles.title}>Вход в аккаунт</Typography>
              <form>
                <TextField
                  className="mb-20"
                  size="small"
                  label="Почта"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  size="small"
                  label="Пароль"
                  className="mb-20"
                  variant="outlined"
                  fullWidth
                  required />
                <Button color="primary" variant="contained" fullWidth disabled>
                  Войти
                </Button>
              </form>
            </>}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
