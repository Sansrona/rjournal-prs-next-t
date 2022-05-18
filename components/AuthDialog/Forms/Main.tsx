import { Button, Typography } from '@material-ui/core'
import { Mail } from '@material-ui/icons';
import React from 'react'

import styles from '../AuthDialog.module.scss'

interface MainFormProps {
    onOpenLogin: () => void;
}

export const MainForm: React.FC<MainFormProps> = ({ onOpenLogin }) => {
    return (
        <>
            <Typography className={styles.title}>
                Вход в аккаунт
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
                <Button onClick={onOpenLogin} className="mb-15" variant="contained" fullWidth>
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
            </div></>
    )
}
