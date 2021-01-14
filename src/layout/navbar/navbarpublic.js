import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.css';

function NavbarPublic() {
    return (
            <nav className={styles.navbarContainer}>
                <div className={styles.logo}>
                    <NavLink to="/" activeClassName={styles.mainNavActive} className={styles.mainNav}>
                        <h3>
                            CALDAR
                        </h3>
                    </NavLink>
                </div>
                <div className={styles.navbarLinks}>
                </div>
            </nav>
    )
}

export default NavbarPublic;
