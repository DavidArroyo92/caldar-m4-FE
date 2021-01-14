import React from 'react';
import styles from './passInput.module.css';

const PassInput = ({
    input,
    meta,
    label,
    placeholder,
}) => (
    <>
    <label className={styles.passInpuLabel}>{label}</label>
    <input className={styles.passInput} {...input} type="password" placeholder={placeholder}/>
    { meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
    </>
);

export default PassInput;