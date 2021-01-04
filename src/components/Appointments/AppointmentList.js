import React, { Component } from 'react';
import AppointmentItem  from './AppointmentItem';
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

class AppointmentsList extends Component {
  render() {
    return (
      <div>
        <h1>Appointments{" "}
        <button
          title="Add"
          className={styles.btnStyle}
          onClick={() => this.props.handleShowForm()}
        >
          <i className="fas fa-plus"></i>
        </button>
        </h1>
        <table className={styles.table}>
          <thead>
              <tr className={styles.listHead}>
                <th>Id</th>
                <th>BoilerId</th>
                <th>BuildingId</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Options</th>
              </tr>
            </thead>
        <tbody>
          {this.props.appointments?.map((appointment,index) => (
            <AppointmentItem
              key={index}
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


//PropTypes
AppointmentsList.propTypes = {
    appointments:PropTypes.array.isRequired,
    editAppointment:PropTypes.func.isRequired,
    delAppointment:PropTypes.func.isRequired,
    handleShowForm: PropTypes.func.isRequired,
    showForm: PropTypes.bool.isRequired,
};

export default AppointmentsList;