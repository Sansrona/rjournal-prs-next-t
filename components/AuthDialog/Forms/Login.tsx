import { Button, TextField, Typography } from '@material-ui/core'
import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react'

import styles from '../AuthDialog.module.scss'

interface LoginFormProps {
    onOpenMain: ()=>void;
    onOpenRegister: ()=>void;
}

export const LoginForm: React.FC<LoginFormProps> = ({onOpenMain, onOpenRegister}) => {
    return (
        <>
            <div className={styles.backBtn} onClick={onOpenMain}>
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
                <Button color="primary" variant="contained" className="mb-10" fullWidth disabled>
                    Войти
                </Button>
                <Button color="primary" onClick={onOpenRegister} variant="text">Регистрация</Button>
            </form>
        </>
    )
}
