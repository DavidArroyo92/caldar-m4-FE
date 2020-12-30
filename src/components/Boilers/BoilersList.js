import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerItem from "./BoilerItem";
import styles from "../../layout/main/main.module.css";

class BoilersList extends Component {
  render() {
    return (
      <div>
        <h1>
          Boilers{" "}
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
              <th>Type</th>
              <th>Maintaince</th>
              <th>Maintaince Cost</th>
              <th>Eventual Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.boilers.map((boiler) => (
              <BoilerItem
                key={boiler.id}
                boiler={boiler}
                editBoiler={this.props.editBoiler}
                delBoiler={this.props.delBoiler}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// PropTypes
BoilersList.propTypes = {
  boilers: PropTypes.array.isRequired,
  delBoiler: PropTypes.func.isRequired,
  editBoiler: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default BoilersList;
