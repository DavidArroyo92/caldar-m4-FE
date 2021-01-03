
import React from 'react'
import styles from './main.module.css'
import Technicians from './components/Technicians';

function Main() {
    return (
        <div className={styles.info}>
            <p>
            {Technicians}
            </p>
        </div>
    )
}

export default Main
