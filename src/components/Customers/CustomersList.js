import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerItem from "./CustomerItem";

class Customers extends Component {
  render() {
    return (
      <div>
        <h1>Customers</h1>
        {this.props.customers.map((customer, index) => (
          <CustomerItem
            key={customer.id}
            customer={customer}
            delCustomer={this.props.delCustomer}
            editCustomer={this.props.editCustomer}
          />
        ))}
      </div>
    );
  }
}

// PropTypes
Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  delCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
};

export default Customers;
