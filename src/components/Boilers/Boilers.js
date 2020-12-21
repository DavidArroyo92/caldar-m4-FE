import React, { Component } from "react";
import BoilersList from "./BoilersList";
import AddBoiler from "./AddBoiler";
import { v4 as uuidv4 } from "uuid";
import styles from "../../layout/main/main.module.css";

class Boilers extends Component {
  state = {
    boilers: [],
    boilerEdit: null,
    showForm: false,
  };

  componentDidMount() {
    const dataBoilers = require("../../data/boilers.json");
    this.setState({ boilers: dataBoilers });
  }

  // Show form
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      boilerEdit: null
    });
    window.scrollTo(0, 0);
  };

  // Edit Boiler
  editBoiler = (boiler) => {
    const boilerNew = boiler;
    this.setState({
      boilerEdit: boilerNew,
      showForm: true,
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
      showForm: false,
    });
  };

  // Delete Boiler
  delBoiler = (id) => {
    this.setState({
      boilers: [...this.state.boilers.filter((boiler) => boiler.id !== id)],
      showForm: false,
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

    this.setState({
      boilers: [...this.state.boilers, newBoiler],
      showForm: false,
    });
  };

  render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddBoiler
            addBoiler={this.addBoiler}
            updateBoiler={this.updateBoiler}
            boilerEdit={this.state.boilerEdit}
            handleShowForm={this.handleShowForm}
          />
        ) : (
          <BoilersList
            boilers={this.state.boilers}
            delBoiler={this.delBoiler}
            editBoiler={this.editBoiler}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}

export default Boilers;
