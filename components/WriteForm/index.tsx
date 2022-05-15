import React from 'react'
import { TextField } from '@material-ui/core'

interface WriteFormProps {
    title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
    return (
        <div>
            <TextField placeholder="Заголовок" defaultValue={title}></TextField>
        </div>
    )
}

export default WriteForm