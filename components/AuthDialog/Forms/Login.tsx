import { Button, Typography } from '@material-ui/core'
import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../AuthDialog.module.scss'
import { loginFormSchema } from '../../../utils/schemas';
import { FormField } from '../../FormField';

interface LoginFormProps {
    onOpenMain: () => void;
    onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenMain, onOpenRegister }) => {
    const form = useForm({
        mode:"onChange",
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = data => console.log(data);

    return (
        <>
            <div className={styles.backBtn} onClick={onOpenMain}>
                <ArrowBackSharp />
                <p>Назад</p>
            </div>
            <Typography className={styles.title}>Вход в аккаунт</Typography>
            <FormProvider {... form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name='email' label='Почта' />
                    <FormField name='password' label='Пароль' />
                    <Button 
                        type="submit" 
                        color="primary" 
                        variant="contained" 
                        className="mb-10" 
                        fullWidth
                        disabled={!form.formState.isDirty}
                        >
                        Войти
                    </Button>
                </form>
            </FormProvider>
            <Button color="primary" onClick={onOpenRegister} variant="text">Регистрация</Button>
        </>
    )
}
