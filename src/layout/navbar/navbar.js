import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
    return (
            <nav className={styles.navbarContainer}>
                <div className={styles.logo}>
                    <h3>
                        CALDAR
                    </h3>
                </div>
                <ul className={styles.navbarLinks}>
                    <NavLink to="/appointments" activeClassName={styles.mainNavActive} className={styles.mainNav}>
                        <li>
                            <i className="far fa-calendar-plus"></i> Appointments
                        </li>
                    </NavLink>
                    <NavLink to="/boilers" activeClassName={styles.mainNavActive} className={styles.mainNav}>
                        <li>
                            <i className="fas fa-cog"></i> Boilers
                        </li>
                    </NavLink>
                    <NavLink to="/boilersTypes" activeClassName={styles.mainNavActive} className={styles.mainNav}>
                        <li>
                            <i className="fas fa-cogs"></i> BoilersTypes
                        </li>
                    </NavLink>
                    <NavLink to="/buildings" activeClassName={styles.mainNavActive} className={styles.mainNav}>
                        <li>
                            <i className="far fa-building"></i> Buildings
                        </li>
                    </NavLink>
                    <NavLink to="/customers" activeClassName={styles.mainNavActive} className={styles.mainNav}>
                        <li>
                            <i className="fas fa-user-friends"></i> Customers
                        </li>
                    </NavLink>
                    <NavLink to="/technicians" activeClassName={styles.mainNavActive} className={styles.mainNav}>
                        <li>
                            <i className="fas fa-hard-hat"></i> Technicians
                        </li>
                    </NavLink>
                </ul>
            </nav>
    )
}

export default Navbar;