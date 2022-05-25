import { Button, Typography } from '@material-ui/core'
import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react'
import { setCookie } from 'nookies';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from "react-hook-form";
import { registerFormSchema } from '../../../utils/schemas';

import Alert from '@material-ui/lab/Alert';
import styles from '../AuthDialog.module.scss'
import { FormField } from '../../FormField';
import { CreateUserTypes } from '../../../utils/api/types';
import { usersApi } from '../../../utils/api';

interface RegisterFormProps {
    onOpenMain: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenMain, onOpenLogin }) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerFormSchema)
    });

    const onSubmit = async (dto: CreateUserTypes) => {
        try {
            const data = await usersApi.register(dto);
            console.log(data);
            setCookie(null, 'rj_token', data['access_token'], { 
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            });
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
            <Typography className={styles.title}>Регистрация</Typography>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name='fullName' label='Имя и фамилия' />
                    <FormField name='email' label='Почта' />
                    <FormField name='password' label='Пароль' />
                    {errorMessage && <Alert severity='error' className='mb-20'>{errorMessage}</Alert>}
                    <Button
                        type='submit'
                        color="primary"
                        variant="contained"
                        fullWidth
                        disabled={!form.formState.isDirty || form.formState.isSubmitting}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
            </FormProvider>
            <p>
                Есть аккаунт? <Button color="primary" onClick={onOpenLogin} variant='text'>Войти</Button>
            </p>
        </>
    )
}
