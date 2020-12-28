import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerItem from "./CustomerItem";
import styles from "../../layout/main/main.module.css";

class Customers extends Component {
  render() {
    return (
      <div>
        <h1>
          Customers{" "}
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
              <th>Email</th>
              <th>Buildings Ids</th>
              <th>Fiscal address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers?.map((customer, index) => (
              <CustomerItem
                key={customer._id}
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
