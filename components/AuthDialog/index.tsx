import React from 'react';
import { Button, Dialog, DialogContent, DialogContentText, TextField, Typography } from '@material-ui/core';
import { ArrowBackSharp } from '@material-ui/icons';

import styles from './AuthDialog.module.scss';
import { MainForm } from './Forms/Main';
import { LoginForm } from './Forms/Login';
import { RegisterForm } from './Forms/Register';

interface AuthDialogProps {
  onClose: () => void;
  isVisible: boolean;
}


export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, isVisible }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');

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
            {formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')} />}
            {formType === 'login' && <LoginForm onOpenMain={() => setFormType('main')} onOpenRegister={() => setFormType('register')}/>}
            {formType === 'register' && <RegisterForm onOpenMain={() => setFormType('main')} onOpenLogin={() => setFormType('login')} />}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
