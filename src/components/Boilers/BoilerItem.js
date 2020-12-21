import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class BoilerItem extends Component {

  render() {
    const {
      id,
      maintainceRate,
      typeId,
      hourMaintainceCost,
      hourEventualCost,
    } = this.props.boiler;
    return (
      <tr>
        <td>{id}</td>
        <td>{typeId}</td>
        <td>{maintainceRate}</td>
        <td>{hourMaintainceCost}</td>
        <td>{hourEventualCost}</td>
        <td>
          <button
            onClick={this.props.delBoiler.bind(this, id)}
            className={styles.btnStyle}
          >
            delete
          </button>
          <button
            onClick={this.props.editBoiler.bind(this, this.props.boiler)}
            className={styles.btnStyle}
          >
            edit
          </button>
        </td>
      </tr>
    );
  }
}

// PropTypes
BoilerItem.propTypes = {
  boiler: PropTypes.object.isRequired,
  delBoiler: PropTypes.func.isRequired,
};

export default BoilerItem;
