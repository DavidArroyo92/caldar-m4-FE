import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class CustomerItem extends Component {
  render() {
    const {
      _id,
      customerType,
      email,
      buildingsIds,
      fiscalAddress,
    } = this.props.customer;
    return (
      <tr className={styles.table}>
        <td>{_id}</td>
        <td>{customerType}</td>
        <td>{email}</td>
        <td>{buildingsIds}</td>
        <td>{fiscalAddress}</td>
        <td>
          <button
            title="Edit"
            onClick={this.props.editCustomer.bind(this, this.props.customer)}
            className={styles.btnStyle}
          >
            <i className="far fa-edit"></i>
          </button>
          <button
            title="Delete"
            className={styles.btnStyle}
            onClick={this.props.delCustomer.bind(this, _id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    );
  }
}

// PropTypes
CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  delCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
};

export default CustomerItem;
