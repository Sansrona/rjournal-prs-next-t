import React from 'react'
import { Input } from '@material-ui/core'
import styles from "./WriteForm.module.scss";
import dynamic from 'next/dynamic'

interface WriteFormProps {
    title?: string;
}

const Editor = dynamic(() =>  import("../Editor").then(m => m), { ssr: false }) 

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {


    return (
        <div>
            <Input classes={{ root: styles.inputField }} placeholder="Заголовок" defaultValue={title}></Input>
            <Editor />
        </div>
    )
}

export default WriteForm