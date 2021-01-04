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
                    <Link to="/appointments" >
                        <li>
                            <i className="far fa-calendar-plus"></i> Appointments
                        </li>
                    </Link>
                    <Link to="/boilers">
                        <li>
                            <i className="fas fa-cog"></i> Boilers
                        </li>
                    </Link>
                    <Link to="/boilersTypes">
                        <li>
                            <i className="fas fa-cogs"></i> BoilersTypes
                        </li>
                    </Link>
                    <Link to="/buildings">
                        <li>
                            <i className="far fa-building"></i> Buildings
                        </li>
                    </Link>
                    <Link to="/customers">
                        <li>
                            <i className="fas fa-user-friends"></i> Customers
                        </li>
                    </Link>
                    <Link to="/technicians">
                        <li>
                            <i className="fas fa-hard-hat"></i> Technicians
                        </li>
                    </Link>
                </ul>
            </nav>
    )
}

export default Navbar;
