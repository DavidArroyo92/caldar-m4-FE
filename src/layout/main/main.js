import React from 'react'
import styles from './main.module.css'
import Building from './components/Buildings'

function Main() {
    return (
        <div className={styles.info}>
            <p>
            {Building}
            </p>
        </div>
    )
}

export default Main
