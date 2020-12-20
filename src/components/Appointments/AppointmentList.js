import React, { Component } from 'react';
import AppointmentItem  from './AppointmentItem';
import PropTypes from "prop-types";

export default class AppointmentList extends Component {
  render() {
    return (
      <div>
        <h1>Appointments</h1>
        {this.props.appointmentValues.map((appointment) => (
          <AppointmentItem
          key={appointment.id}
          appointment={appointment}
          editAppointment={this.props.editAppointment}
          delAppointment={this.props.delAppointment} />
          ))}
      </div>
    )
  }
}

//PropTypes
AppointmentList.propTypes = {
    appointmentValues:PropTypes.array.isRequired,
    editAppointment:PropTypes.func.isRequired,
    delAppointment:PropTypes.func.isRequired,
}
