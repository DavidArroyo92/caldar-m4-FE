import React from "react";
import styles from "./App.module.css";
import Navbar from "./layout/navbar/navbar";
import Header from "./layout/header/header";
import Appointment from "./components/appointment";
import Boilers from "./components/Boilers/Boilers";
import BoilersTypes from "./components/boilersTypes";
import Buildings from "./components/buildings";
import Custumers from "./components/custumers";
import Technicians from "./components/technicians";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className={styles.wrapper}>
          <Navbar />
          <div className={styles.mainContent}>
            <Header />
            <Switch>
              <Route path="appoinment" component={Appointment} />
              <Route path="/boilers" component={Boilers} />
              <Route path="boilersTypes" component={BoilersTypes} />
              <Route path="buildings" component={Buildings} />
              <Route path="custumers" component={Custumers} />
              <Route path="technicians" component={Technicians} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
