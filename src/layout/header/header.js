import React from 'react';
import styles from './header.module.css';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <h3 className={styles.headerContent}>
                Log Out
            </h3>
        </div>
    )
}

export default Header;
