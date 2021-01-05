import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerItem from "./CustomerItem";
import styles from "../../layout/main/main.module.css";

class Customers extends Component {
  render() {
    return (
      <div>
        <h1>Customers{" "}
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
              <th>Type</th>
              <th>Email</th>
              <th>Buildings Ids</th>
              <th>Fiscal address</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers?.map((customer, index) => (
              <CustomerItem
                key={index}
                customer={customer}
                delCustomer={this.props.delCustomer}
                editCustomer={this.props.editCustomer}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// PropTypes
Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  delCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default Customers;
