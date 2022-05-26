import { Button, Typography } from '@material-ui/core'
import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '@material-ui/lab/Alert';

import { setCookie } from 'nookies';
import styles from '../AuthDialog.module.scss'
import { loginFormSchema } from '../../../utils/schemas';
import { FormField } from '../../FormField';
import { usersApi } from '../../../utils/api';
import { LoginTypes } from '../../../utils/api/types';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';

interface LoginFormProps {
    onOpenMain: () => void;
    onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenMain, onOpenRegister }) => {
    const dispatch = useAppDispatch();
    const [errorMessage, setErrorMessage] = React.useState('');
    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = async (dto: LoginTypes) => {
        try {
            const data = await usersApi.login(dto);
            setCookie(null, 'rj_token', data['access_token'], {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            });
            dispatch(setUserData(data));
            setErrorMessage('');
        } catch (error) {
            if(error.response){setErrorMessage(error.response.data.message)}
        }
    };

    return (
        <>
            <div className={styles.backBtn} onClick={onOpenMain}>
                <ArrowBackSharp />
                <p>Назад</p>
            </div>
            <Typography className={styles.title}>Вход в аккаунт</Typography>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name='email' label='Почта' />
                    <FormField name='password' label='Пароль' />
                    {errorMessage && <Alert severity='error' className='mb-20'>{errorMessage}</Alert>}
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className="mb-10"
                        fullWidth
                        disabled={!form.formState.isDirty || form.formState.isSubmitting}
                    >
                        Войти
                    </Button>
                </form>
            </FormProvider>
            <Button color="primary" onClick={onOpenRegister} variant="text">Регистрация</Button>
        </>
    )
}
