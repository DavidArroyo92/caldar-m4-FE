import React, { Component } from 'react';
import TechnicianItem from './TechnicianItem';
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

class TechniciansList extends Component {
  render() {
    return (
      <div>
        <h1>
          Technicians{" "}
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Type Ids</th>
              <th>Skills Id</th>
              <th>Hour Rate</th>
              <th>Daily Capacity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.technicians.map((technician, index) => (
              <TechnicianItem
                key={index}
                technician={technician}
                editTechnician={this.props.editTechnician}
                delTechnician={this.props.delTechnician}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Prop types
TechniciansList.propTypes = {
    technicians: PropTypes.array.isRequired,
    delTechnician: PropTypes.func.isRequired,
    editTechnician: PropTypes.func.isRequired,
    handleShowForm: PropTypes.func.isRequired,
    showForm: PropTypes.bool.isRequired,
}

export default TechniciansList;
