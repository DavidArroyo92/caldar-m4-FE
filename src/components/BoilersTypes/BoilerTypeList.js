import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerTypeItem from "./BoilerTypeItem";
import styles from "../../layout/main/main.module.css";

class BoilerTypeList extends Component {
  render() {
    return (
      <div>
        <h1>BoilerTypes{" "}
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
              <th>Skills Id</th>
              <th>Type</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
              {this.props.boilerTypes?.map((boilerType, index) => (
                <BoilerTypeItem
                  key={index}
                  boilerType={boilerType}
                  deleteBoilerType={this.props.deleteBoilerType}
                  editBoilerType={this.props.editBoilerType}
                />
                )
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

//PropTypes
BoilerTypeList.propTypes = {
  boilerTypes: PropTypes.array.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
}

export default BoilerTypeList;

