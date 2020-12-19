import React, { Component } from "react";
import BoilersList from "./BoilersList";
import AddBoiler from "./AddBoiler";
import { v4 as uuidv4 } from "uuid";
import styles from '../../layout/main/main.module.css'

class Boilers extends Component {
  state = {
    boilers: [],
    boilerEdit: null,
  };

  componentDidMount() {
    const dataBoilers = require("../../data/boilers.json");
    this.setState({ boilers: dataBoilers });
  }

  // Edit Boiler
  editBoiler = (boiler) => {
    this.setState({
      boilerEdit: boiler,
    });
    window.scrollTo(0, 0);
  };

  // Update Boiler
  updateBoiler = (
    id,
    typeId,
    maintainceRate,
    hourMaintainceCost,
    hourEventualCost
  ) => {
    this.setState({
      boilers: this.state.boilers.map((boiler) => {
        if (boiler.id === id) {
          boiler.typeId = typeId;
          boiler.maintainceRate = maintainceRate;
          boiler.hourMaintainceCost = hourMaintainceCost;
          boiler.hourEventualCost = hourEventualCost;
        }
        return boiler;
      }),
    });
  };

  // Delete Boiler
  delBoiler = (id) => {
    this.setState({
      boilers: [...this.state.boilers.filter((boiler) => boiler.id !== id)],
    });
  };

  // Add Boiler
  addBoiler = (
    typeId,
    maintainceRate,
    hourMaintainceCost,
    hourEventualCost
  ) => {
    const newBoiler = {
      id: uuidv4(),
      typeId,
      maintainceRate,
      hourMaintainceCost,
      hourEventualCost,
    };

    this.setState({ boilers: [...this.state.boilers, newBoiler] });
  };

  render() {
    return (
      <div className={styles.info}>
        <AddBoiler
          addBoiler={this.addBoiler}
          updateBoiler={this.updateBoiler}
          boilerEdit={this.state.boilerEdit}
        />
        <BoilersList
          boilers={this.state.boilers}
          delBoiler={this.delBoiler}
          editBoiler={this.editBoiler}
        />
      </div>
    );
  }
}

export default Boilers;
