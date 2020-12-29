import React, { Component } from "react";
import TechniciansList from "./TechniciansList";
import AddTechnician from "./AddTechnician";
//import { v4 as uuidv4 } from "uuid";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import {
  getTechnicians as getTechniciansActions,
  delTechnicians as delTechniciansActions,
  addTechnicians as addTechniciansActions,
  editTechnicians as updateTechniciansActions,
} from "../../redux/actions/techniciansActions";

class Technicians extends Component {
  state = {
    technicianEdit: null,
    showForm: false,
  };

  componentDidMount() {
    this.props.getTechnicians();
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
    this.setState({
      technicianEdit: technician,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className={styles.info}>
          {this.state.showForm ? (
          <AddTechnician
            addTechnician={this.props.addTechnicians}
            updateTechnician={this.updateTechnicians}
            technicianEdit={this.state.technicianEdit}
            handleShowForm={this.handleShowForm}
          />
          ) : (
          <TechniciansList
            technicians={this.props.technicians}
            delTechnician={this.props.delTechnicians}
            editTechnician={this.editTechnician}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTechnicians: () => dispatch(getTechniciansActions()),
  delTechnicians: (_id) => dispatch(delTechniciansActions(_id)),
  addTechnicians: (first_name, last_name, email, typeIds, skillsId, hour_rate, daily_capacity) =>
    dispatch(
      addTechniciansActions(
        first_name,
        last_name,
        email,
        typeIds,
        skillsId,
        hour_rate,
        daily_capacity,
      )
    ),
  updateTechnicians: (
    _id,
    first_name,
    last_name,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
  ) =>
    dispatch(
      updateTechniciansActions(
        _id,
        first_name,
        last_name,
        email,
        typeIds,
        skillsId,
        hour_rate,
        daily_capacity,
      )
    ),
});

const mapStateToProps = (state) => ({
  technicians: state.technicians.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Technicians);