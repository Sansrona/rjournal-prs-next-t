import { Button, TextField, Typography } from '@material-ui/core'
import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react'

import styles from '../AuthDialog.module.scss'

interface RegisterFormProps {
    onOpenMain: ()=>void;
    onOpenLogin: ()=>void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({onOpenMain,onOpenLogin}) => {
    return (
        <>
            <div className={styles.backBtn} onClick={onOpenMain}>
                <ArrowBackSharp />
                <p>Назад</p>
            </div>
            <Typography className={styles.title}>Регистрация</Typography>
            <form>
            <TextField
                    className="mb-20"
                    size="small"
                    label="Имя и фамилия"
                    variant="outlined"
                    fullWidth
                    required
                />
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
                    Зарегистрироваться
                </Button>
                <p>
                    Есть аккаунт? <Button color="primary" onClick={onOpenLogin} variant='text'>Войти</Button>
                </p>
            </form>
        </>
    )
}
