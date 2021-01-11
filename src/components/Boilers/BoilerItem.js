import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class BoilerItem extends Component {

  render() {
    const {
      _id,
      maintainceRate,
      typeId,
      hourMaintainceCost,
      hourEventualCost,
    } = this.props.boiler;
    return (
      <tr className={styles.table}>
        <td>{_id}</td>
        <td>{typeId}</td>
        <td>{maintainceRate}</td>
        <td>{hourMaintainceCost}</td>
        <td>{hourEventualCost}</td>
        <td>
          <button
            title="Edit"
            onClick={this.props.editBoiler.bind(this, this.props.boiler)}
            className={styles.btnStyle}
          >
            <i className="far fa-edit"></i>
          </button>
          <button
            title="Delete"
            className={styles.btnStyle}
            onClick={this.props.delBoiler.bind(this, _id)}
          >
            <i className="far fa-trash-alt"></i>
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
