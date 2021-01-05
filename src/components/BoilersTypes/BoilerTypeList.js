import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerTypeItem from "./BoilerTypeItem";
import styles from "../../layout/main/main.module.css";

class BoilerTypeList extends Component {
  render() {
    return (
      <div>
        <h1>BoilerTypes{" "}
          {/* <input
              type="button"
              value="New"
              className={styles.input}
              onClick={() => this.props.handleShowForm()}
            /> */}
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
            <tr  className={styles.listHead}>
              <th>Id</th>
              <th>Skills Id</th>
              <th>Type</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {this.props.boilerTypes?.map((boilerType) => (
                <BoilerTypeItem 
                  key={boilerType._id} 
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
  // handleShowForm: PropTypes.func.isRequired,
  // showForm: PropTypes.bool.isRequired,
  showAddModal: PropTypes.func.isRequired,
}

export default BoilerTypeList;

