import React from 'react';
import styles from './App.module.css';
import Navbar from './layout/navbar/navbar';
import Header from './layout/header/header';
import Appointments from './components/Appointments/Appointments';
import Boilers from './components/Boilers/Boilers';
import BoilersTypes from './components/BoilersTypes/BoilersTypes';
import Buildings from './components/Buildings/Buildings';
import Customers from './components/Customers/Customers';
import Technicians from './components/Technicians/Technicians';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Modal from './SharedComponents/Modal/Modal'

function App() {
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
              <Route path="/technicians" component={Technicians} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
