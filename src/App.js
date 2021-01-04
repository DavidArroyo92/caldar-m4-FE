import React from 'react';
import styles from './App.module.css';
import Navbar from './layout/navbar/navbar';
import Header from './layout/header/header';
import Appointments from './components/Appointments/Appointments';
import Boilers from './components/Boilers/Boilers';
import BoilersTypes from './components/BoilersTypes/BoilersTypes';
import buildings from './components/Buildings/Buildings';
import Customers from './components/Customers/Customers';
import Technicians from './components/Technicians/Technicians';
import Modal from './SharedComponents/TextInput/Modal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <div className={styles.wrapper}>
          <Navbar />
          <div className={styles.mainContent}>
            <Header/>
            <Switch>
              <Route path="/Appointments" component={Appointments}/>
              <Route path="/Boilers" component={Boilers}/>
              <Route path="/BoilersTypes" component={BoilersTypes}/>
              <Route path="/buildings" component={buildings}/>
              <Route path="/Customers" component={Customers}/>
              <Route path="/Technicians" component={Technicians} />
            </Switch>
            <Modal/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
