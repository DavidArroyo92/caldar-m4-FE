import React, { Component } from 'react';
import AppointmentList from "./AppointmentList";
import AddAppointment from "./AddAppointment";
import styles from '../../layout/main/main.module.css';
import { connect } from "react-redux";
import {
  getAppointments as getAppointmentsActions,
  delAppointment as delAppointmentActions,
  addAppointment as addAppointmentActions,
  editAppointment as updateAppointmentActions,
} from "../../redux/actions/appointmentsActions";


class Appointments extends Component {

  state = {
    appointmentEdit: null,
    showForm: false,
  }

  componentDidMount(){
    this.props.getAppointments();
  }

  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      appointmentEdit: null
    });
    window.scrollTo(0, 0);
  };

  editAppointment = (appointment) => {
    this.setState({
      appointmentEdit: appointment,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
        <div className={styles.info}>
        {this.state.showForm ? (
                <AddAppointment
                  addAppointment={this.props.addAppointment}
                  updateAppointment={this.props.updateAppointment}
                  appointmentEdit={this.state.appointmentEdit}
                  handleShowForm={this.handleShowForm}
                />
                ) : (
                <AppointmentList
                  appointments = {this.props.appointments}
                  delAppointment={this.props.delAppointment}
                  editAppointment={this.editAppointment}
                  handleShowForm={this.handleShowForm}
                  showForm={this.state.showForm}
                />
        )}
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getAppointments: () => dispatch(getAppointmentsActions()),
  delAppointment: (_id) => dispatch(delAppointmentActions(_id)),
  addAppointment: (buildingId, boilerId,start_timestamp, end_timestamp) =>
    dispatch(
      addAppointmentActions(buildingId, boilerId,start_timestamp, end_timestamp)
    ),
  updateAppointment: (_id, buildingId, boilerId,start_timestamp, end_timestamp) =>
    dispatch(
      updateAppointmentActions( _id,buildingId, boilerId,start_timestamp,end_timestamp)
    ),
});

const mapStateToProps = (state) => ({
  appointments: state.appointments.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);