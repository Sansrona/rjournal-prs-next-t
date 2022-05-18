import { TextField } from '@material-ui/core'
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface FormFieldProps{
    name: string;
    label: string;
}

export const FormField: React.FC<FormFieldProps> = ({name, label}) => {
    const {register, formState:{errors}} = useFormContext();

    return (
        <TextField
            className="mb-20"
            size="small"
            label={label}
            variant="outlined"
            fullWidth
            helperText={errors[name]?.message}
            error={errors[name]}
            {...register(name)}
        />
    )
}
