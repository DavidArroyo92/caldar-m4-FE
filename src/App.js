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


function App() {
  return (
   <Router>
      <div className="App">
        <div className={styles.wrapper}>
        <Navbar/>
          <div className={styles.mainContent}>
            <Header/>
        <Switch>
          <Route path="/Appointments" component={Appointments}/>
          <Route path="/Boilers" component={Boilers}/>
          <Route path="/BoilersTypes" component={BoilersTypes}/>
          <Route path="/Buildings" component={Buildings}/>
          <Route path="/Customers" component={Customers}/>
          <Route path="/Technicians" component={Technicians} />
        </Switch>
          </div>
        </div>
      </div>
   </Router>
  );
}

export default App;
