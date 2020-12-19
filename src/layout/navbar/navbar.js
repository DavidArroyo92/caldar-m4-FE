import React from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/appointment" >
                        <li>
                            Appointment
                        </li>
                    </Link>
                    <Link to="/boilers">
                        <li>
                            Boilers
                        </li>
                    </Link>
                    <Link to="/boilersTypes">
                        <li>
                            BoilersTypes
                        </li>
                    </Link>
                    <Link to="/buildings">
                        <li>
                            Buildings
                        </li>
                    </Link>
                    <Link to="/custumers">
                        <li>
                            Custumers
                        </li>
                    </Link>
                    <Link to="/technicians">
                        <li>
                            Technicians
                        </li>
                    </Link>
                </ul>
            </nav>
    )
}

export default Navbar;
