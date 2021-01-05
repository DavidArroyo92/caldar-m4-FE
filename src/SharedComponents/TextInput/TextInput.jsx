import React from 'react';
//import styles from './textInput.module.css';
import styles from "../../layout/main/main.module.css";

const TextInput = ({
    input,
    meta,
    label,
    placeholder,
}) => (
    <>
    <label className={styles.textInpuLabel}>{label}</label>
    <input className={styles.input} {...input} type="text" placeholder={placeholder}/>
    { meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
    </>
);

export default TextInput;