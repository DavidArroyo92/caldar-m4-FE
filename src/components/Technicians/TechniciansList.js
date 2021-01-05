import React, { Component } from 'react';
import TechnicianItem from './TechnicianItem';
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

class TechniciansList extends Component {
  render() {
    return (
      <div>
        <h1>Technicians{" "}
            <button
              title="Add"
              className={styles.btnStyle}
              onClick={() => this.props.showAddModal()}
            >
              <i className="fas fa-plus"></i>
            </button>
        </h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.listHead}>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Type Ids</th>
              <th>Skills Id</th>
              <th>Hour Rate</th>
              <th>Daily Capacity</th>
              <th>Options</th>
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
    showAddModal: PropTypes.func.isRequired,
}

export default TechniciansList;
