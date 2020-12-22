import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class CustomerItem extends Component {
  getStyle = () => {
    return {
      background: "#f5f5f5",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const {
      id,
      customerType,
      email,
      buildingsIds,
      fiscalAddress,
    } = this.props.customer;
    return (
      <tr>
        <td>{id}</td>
        <td>{customerType}</td>
        <td>{email}</td>
        <td>{buildingsIds.map((building) => building + " ")}</td>
        <td>{fiscalAddress}</td>
        <td>
          <button
            onClick={this.props.delCustomer.bind(this, id)}
            className={styles.btnStyle}
          >
            delete
          </button>
          <button
            onClick={this.props.editCustomer.bind(this, this.props.customer)}
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
CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  delCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
};

export default CustomerItem;
