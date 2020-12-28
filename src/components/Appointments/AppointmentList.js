import React, { Component } from 'react';
import AppointmentItem  from './AppointmentItem';
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import {AddAppointment as AddAppointmentAction,delAppointment as delAppointmentAction, editAppointment as editAppointmentAction} from '../../redux/actions/appointmentsActions'
import { connect } from 'react-redux';

class AppointmentsList extends Component {
  render() {
    return (
      <div>
        <h1>Appointments{" "}
          <input
              type="button"
              value="New"
              className={styles.input}
              onClick={() => this.props.handleShowForm()}
            />
        </h1>
        <table className={styles.table}>
          <thead>
              <tr>
                <th>id</th>
                <th>BoilerId</th>
                <th>BuildingId</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Options</th>
              </tr>
            </thead>
        <tbody>
          {this.props.appointmentValues.map((appointment) => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              editAppointment={this.props.editAppointment}
              delAppointment={this.props.delAppointment}
            />
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    AddAppointment:(appointment) => dispatch(AddAppointmentAction(appointment)),
    delAppointment: (id) => dispatch(delAppointmentAction(id)),
    editAppointment: (appointment) => dispatch(editAppointmentAction(appointment))
  };
};

const mapStateToProps = state =>{
  return{
    appointments: state.appointments.list
  };
};

//PropTypes
AppointmentList.propTypes = {
    appointmentValues:PropTypes.array.isRequired,
    editAppointment:PropTypes.func.isRequired,
    delAppointment:PropTypes.func.isRequired,
    handleShowForm: PropTypes.func.isRequired,
    showForm: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsList);