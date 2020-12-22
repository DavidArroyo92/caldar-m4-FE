import React, { Component } from "react";
import TechniciansList from "./TechniciansList";
import AddTechnician from "./AddTechnician";
import { v4 as uuidv4 } from "uuid";
import styles from "../../layout/main/main.module.css";

class Technicians extends Component {
  state = {
    technicians: [],
    technicianEdit: null,
    showForm: false,
  };

  componentDidMount() {
    const dataTechnicians = require("../../data/Technicians.json");
    this.setState({ technicians: dataTechnicians });
  }

  // Show form
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      technicianEdit: null
    });
    window.scrollTo(0, 0);
  };

  // Edit Technician
  editTechnician = (technician) => {
    const technicianNew = technician;
    this.setState({
      technicianEdit: technicianNew,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  // Update Technician
  updateTechnician = (
    id,
    first_name,
    last_name,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
  ) => {
    this.setState({
      technicians: this.state.technicians.map((technician) => {
        if (technician.id === id) {
          technician.first_name = first_name;
          technician.last_name = last_name;
          technician.email = email;
          technician.typeIds = typeIds;
          technician.skillsId = skillsId;
          technician.hour_rate = hour_rate;
          technician.daily_capacity = daily_capacity;
        }
        return technician;
      }),
      showForm: false,
    });
  };

  // Delete Technician
  delTechnician = (id) => {
    this.setState({
      technicians: [...this.state.technicians.filter((technician) => technician.id !== id)],
      showForm: false,
    });
  };

  // Add Technician
  addTechnician = (
    first_name,
    last_name,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity
  ) => {
    const newTechnician = {
      id: uuidv4(),
      first_name,
      last_name,
      email,
      typeIds,
      skillsId,
      hour_rate,
      daily_capacity
    };

    this.setState({
      technicians: [...this.state.technicians, newTechnician],
      showForm: false,
    });
  };

  render() {
    return (
      <div className={styles.info}>
          {this.state.showForm ? (
          <AddTechnician
            addTechnician={this.addTechnician}
            updateTechnician={this.updateTechnician}
            technicianEdit={this.state.technicianEdit}
            handleShowForm={this.handleShowForm}
          />
          ) : (
          <TechniciansList
            technicians={this.state.technicians}
            delTechnician={this.delTechnician}
            editTechnician={this.editTechnician}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}

export default Technicians;