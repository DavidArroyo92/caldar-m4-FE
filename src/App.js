import React from 'react';
import styles from './App.module.css';
import Navbar from './layout/navbar/navbar';
import Header from './layout/header/header';
import Appointment from './components/Appointment';
import Boilers from './components/Boilers';
import BoilersTypes from './components/BoilersTypes';
import Buildings from './components/Buildings';
import Custumers from './components/Custumers';
import Technicians from './components/Technicians';
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
          <Route path="/Appointment" component={Appointment}/>
          <Route path="/Boilers" component={Boilers}/>
          <Route path="/BoilersTypes" component={BoilersTypes}/>
          <Route path="/Buildings" component={Buildings}/>
          <Route path="/Custumers" component={Custumers}/>
          <Route path="/Technicians" component={Technicians} />
        </Switch>
          </div>
        </div>
      </div>
   </Router>
  );
}

export default App;
