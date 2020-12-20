import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AppointmentList from "./AppointmentList";
import AddAppointment from "./AddAppointment";
import styles from '../../layout/main/main.module.css'


export default class Appointments extends Component {

  state = {
    appointmentValues:[],
    appointmentEdit: null,
  }

  componentDidMount(){
    const dataAppointments = require('../../data/appointment.json')
    this.setState({ appointmentValues: dataAppointments });
  }

  editAppointment = (appointmentX) => {
    this.setState({
      appointmentEdit: appointmentX,
    });
  };

  cancelAppointment = (appointmentX) => {
    this.setState({
      addAppointment: appointmentX,
    });
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
    });
  };

  delAppointment = (id) => {
    this.setState({
    appointmentValues: [...this.state.appointmentValues.filter((appointment) => appointment.id !== id)] });
  }

  addAppointment = (buildingId,boilerId,start_timestamp,end_timestamp) => {
    const newAppointment = {
      id: this.state.appointmentValues.length + 1,
      buildingId,
      boilerId,
      start_timestamp,
      end_timestamp
    };
    this.setState({appointmentValues: [...this.state.appointmentValues, newAppointment] });
  }

  render() {
    return (
      <Router>
        <div className={styles.info}>
              <React.Fragment>
                <AddAppointment
                addAppointment={this.addAppointment}
                updateAppointment={this.updateAppointment}
                appointmentEdit={this.state.appointmentEdit}/>
                <AppointmentList
                appointmentValues = {this.state.appointmentValues}
                cancelAppointment={this.cancelAppointment}
                delAppointment={this.delAppointment}
                editAppointment={this.editAppointment}/>
              </React.Fragment>
        </div>
      </Router>
    );
  }
}

