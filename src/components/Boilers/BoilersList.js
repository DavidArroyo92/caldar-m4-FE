import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerItem from "./BoilerItem";
import styles from "../../layout/main/main.module.css";

class BoilersList extends Component {
  render() {
    return (
      <div>
        <h1>Boilers{" "}
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
              <th>Type</th>
              <th>Maintaince</th>
              <th>Maintaince Cost</th>
              <th>Eventual Cost</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.boilers?.map((boiler) => (
              <BoilerItem
                key={boiler._id}
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
  showAddModal: PropTypes.func.isRequired,
};

export default BoilersList;
