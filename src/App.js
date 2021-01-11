import React, { useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './layout/navbar/navbar';
import Header from './layout/header/header';
import Appointments from './components/Appointments/Appointments';
import Boilers from './components/Boilers/Boilers';
import BoilersTypes from './components/BoilersTypes/BoilersTypes';
import Buildings from './components/Buildings/Buildings';
import Customers from './components/Customers/Customers';
import Technicians from './components/Technicians/Technicians';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Modal from './SharedComponents/Modal/Modal';

import { bindActionCreators } from "redux";
import Login from "./components/Login/Login";
import { setAuthentication } from "./redux/actions/authActions";
import { tokenListener } from "./firebase";
import { connect } from "react-redux";

const App = ({
  authenticated,
  setAuthentication
}) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token){
      setAuthentication();
    }
  }, [setAuthentication])

  useEffect(() => {
    tokenListener();
  }, []);

  if(authenticated){
    return (
      <Router>
        <div className="App">
          <div className={styles.wrapper}>
            <Navbar />
            <Modal />
            <div className={styles.mainContent}>
              <Header/>
              <Switch>
                <Route path="/appointments" component={Appointments}/>
                <Route path="/boilers" component={Boilers}/>
                <Route path="/boilersTypes" component={BoilersTypes}/>
                <Route path="/buildings" component={Buildings}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/technicians" component={Technicians}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div className="App">
        <div className={styles.wrapper}>
          <Navbar />
          <Modal />
          <div className={styles.mainContent}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Login}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
      authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      setAuthentication,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);