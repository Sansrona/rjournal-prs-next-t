import { Button, TextField, Typography } from '@material-ui/core'
import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from "react-hook-form";
import { registerFormSchema } from '../../../utils/schemas';

import styles from '../AuthDialog.module.scss'
import { FormField } from '../../FormField';

interface RegisterFormProps {
    onOpenMain: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenMain, onOpenLogin }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerFormSchema)
    });

    const onSubmit = data => console.log(data);

    return (
        <>
            <div className={styles.backBtn} onClick={onOpenMain}>
                <ArrowBackSharp />
                <p>Назад</p>
            </div>
            <Typography className={styles.title}>Регистрация</Typography>
            <FormProvider {...form}>
                <form>
                    <FormField name='fullname' label='Имя и фамилия' />
                    <FormField name='email' label='Почта' />
                    <FormField name='password' label='Пароль' />
                    <Button 
                    type='submit' 
                    color="primary" 
                    variant="contained" 
                    fullWidth
                    disabled={!form.formState.isDirty}
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
