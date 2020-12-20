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
                    <Link to="/Appointment" >
                        <li>
                            Appointment
                        </li>
                    </Link>
                    <Link to="/Boilers">
                        <li>
                            Boilers
                        </li>
                    </Link>
                    <Link to="/BoilersTypes">
                        <li>
                            BoilersTypes
                        </li>
                    </Link>
                    <Link to="/Buildings">
                        <li>
                            Buildings
                        </li>
                    </Link>
                    <Link to="/Custumers">
                        <li>
                            Custumers
                        </li>
                    </Link>
                    <Link to="/Technicians">
                        <li>
                            Technicians
                        </li>
                    </Link>
                </ul>
            </nav>
    )
}

export default Navbar;
