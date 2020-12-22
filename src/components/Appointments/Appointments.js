import React, { Component } from 'react';
import AppointmentList from "./AppointmentList";
import AddAppointment from "./AddAppointment";
import styles from '../../layout/main/main.module.css'


export default class Appointments extends Component {

  state = {
    appointmentValues:[],
    appointmentEdit: null,
    showForm: false,
  }

  componentDidMount(){
    const dataAppointments = require('../../data/appointment.json')
    this.setState({ appointmentValues: dataAppointments });
  }

  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      appointmentEdit: null
    });
    window.scrollTo(0, 0);
  };

  editAppointment = (appointment) => {
    const appointmentNew = appointment;
    this.setState({
      appointmentEdit: appointmentNew,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  updateAppointment = (id,buildingId,boilerId,start_timestamp,end_timestamp) => {
    this.setState({
      appointmentValues: this.state.appointmentValues.map((appointment) => {
        if (appointment.id === id) {
          appointment.buildingId = buildingId;
          appointment.boilerId = boilerId;
          appointment.start_timestamp = start_timestamp;
          appointment.end_timestamp = end_timestamp;
        }
        return appointment;
      }),
      showForm: false,
    });
  };

  delAppointment = (id) => {
    this.setState({
    appointmentValues: [...this.state.appointmentValues.filter((appointment) => appointment.id !== id)],
    showForm: false,
  });
  }

  addAppointment = (buildingId,boilerId,start_timestamp,end_timestamp) => {
    const newAppointment = {
      id: this.state.appointmentValues.length + 1,
      buildingId,
      boilerId,
      start_timestamp,
      end_timestamp
    };
    this.setState({appointmentValues: [...this.state.appointmentValues, newAppointment],
      showForm: false,
    });
  }

  render() {
    return (
        <div className={styles.info}>
        {this.state.showForm ? (

                <AddAppointment
                  addAppointment={this.addAppointment}
                  updateAppointment={this.updateAppointment}
                  appointmentEdit={this.state.appointmentEdit}
                  handleShowForm={this.handleShowForm}
                />
                ) : (
                <AppointmentList
                  appointmentValues = {this.state.appointmentValues}
                  delAppointment={this.delAppointment}
                  editAppointment={this.editAppointment}
                  handleShowForm={this.handleShowForm}
                  showForm={this.state.showForm}
                />
        )}
        </div>
    );
  }
}

