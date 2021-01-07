import React from 'react';
import styles from './header.module.css';
import {logout as logoutAction } from "../../redux/actions/authActions";
import { LOGOUT_FULFILLED } from "../../redux/types/types-auth";
import { bindActionCreators } from "redux";
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const Header = ({
    logout,
    history
}) => {
    const onLogoutClick = () => {
        logout().then(action => {
            if(action.type === LOGOUT_FULFILLED){
                history.push("/");
            }
        });
    }
    return (
        <div className={styles.headerContainer}>
            <Link to = "/">Log Out</Link>
            <Button btnLabel="LogOut" onClick={()=> onLogoutClick() }/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        logout: logoutAction
    }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Header));
