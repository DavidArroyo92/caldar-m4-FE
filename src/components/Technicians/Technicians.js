import React, { Component } from "react";
import TechniciansList from "./TechniciansList";
import AddTechnician from "./AddTechnician";
import TechnicianForm from '../Technicians/TechnicianForm';
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import {
  getTechnicians as getTechniciansActions,
  delTechnicians as delTechniciansActions,
  addTechnicians as addTechniciansActions,
  editTechnicians as updateTechniciansActions,
} from "../../redux/actions/techniciansActions";
import {
  showModal as showModalAction
} from '../../redux/actions/modalActions';
import modalTypes from "../../redux/types/types-modals.js";

class Technicians extends Component {
  state = {
    technicianEdit: null,
    showForm: false,
  };

  componentDidMount() {
    this.props.getTechnicians();
  }

  // Edit Technician
  editTechnician = (technician) => {
    this.setState({
      technicianEdit: technician,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  //Show add Modal
  showAddModal = () => {
    this.props.showModal(modalTypes.ADD_TECHNICIAN);
  };

  render() {
    return (
      <div className={styles.info}>
          {this.state.showForm ? (
          <TechnicianForm
            technicianEdit={this.state.technicianEdit}
          />
          ) : (
          <TechniciansList
            technicians={this.props.technicians}
            delTechnician={this.props.delTechnicians}
            editTechnician={this.editTechnician}
            showAddModal={this.showAddModal}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTechnicians: () => dispatch(getTechniciansActions()),
  delTechnicians: (_id) => dispatch(delTechniciansActions(_id)),
  addTechnicians: (firstName, lastName, email, typeIds, skillsId, hour_rate, daily_capacity) =>
    dispatch(
      addTechniciansActions(
        firstName,
        lastName,
        email,
        typeIds,
        skillsId,
        hour_rate,
        daily_capacity,
      )
    ),
  updateTechnicians: (
    _id,
    firstName,
    lastName,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
  ) =>
    dispatch(
      updateTechniciansActions(
        _id,
        firstName,
        lastName,
        email,
        typeIds,
        skillsId,
        hour_rate,
        daily_capacity,
      )
    ),
    showModal: (modalType) => dispatch(showModalAction(modalType))
});

const mapStateToProps = (state) => ({
  isLoading: state.technicians.isLoading,
  error: state.technicians.error,
  technicians: state.technicians.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Technicians);