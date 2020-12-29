import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerTypeItem from "./BoilerTypeItem";
import styles from "../../layout/main/main.module.css";

class BoilerTypeList extends Component {
  render() {
    return (
      <div>
        <h1>BoilerTypes{" "}
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
              <th>Id</th>
              <th>Skills Id</th>
              <th>Type</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.props.boilerTypeValue?.map((boilerType, index) => ( */}
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
  // boilerTypeValue: PropTypes.array.isRequired,
  boilerTypes: PropTypes.array.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
}

export default BoilerTypeList;

