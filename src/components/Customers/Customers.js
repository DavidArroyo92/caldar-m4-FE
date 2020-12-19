import React, { Component } from "react";
import CustomersList from "./CustomersList";
import AddCustomer from "./AddCustomer";
import { v4 as uuidv4 } from "uuid";
import styles from '../../layout/main/main.module.css'

class Customers extends Component {
  state = {
    customers: [],
    customerEdit: null,
  };

  componentDidMount() {
    const dataCustomers = require("../../data/customers.json");
    this.setState({ customers: dataCustomers });
  }

  // Edit Customer
  editCustomer = (customer) => {
    this.setState({
      customerEdit: customer,
    });
    window.scrollTo(0, 0);
  };

  // Update Customer
  updateCustomer = (
    id,
    customerType,
    email,
    buildingsString,
    fiscalAddress
  ) => {
    const buildingsIds = buildingsString.split(",");
    this.setState({
      customers: this.state.customers.map((customer) => {
        if (customer.id === id) {
          customer.customerType = customerType;
          customer.email = email;
          customer.buildingsIds = buildingsIds;
          customer.fiscalAddress = fiscalAddress;
        }
        return customer;
      }),
    });
  };

  // Delete Customer
  delCustomer = (id) => {
    this.setState({
      customers: [
        ...this.state.customers.filter((customer) => customer.id !== id),
      ],
    });
  };

  // Add Customer
  addCustomer = (customerType, email, buildingsString, fiscalAddress) => {
    const buildingsIds = buildingsString.split(",");
    const newCustomer = {
      id: uuidv4(),
      customerType,
      email,
      buildingsIds,
      fiscalAddress,
    };

    this.setState({ customers: [...this.state.customers, newCustomer] });
  };

  render() {
    return (
                <div className = {styles.info}>
                  <AddCustomer
                    addCustomer={this.addCustomer}
                    updateCustomer={this.updateCustomer}
                    customerEdit={this.state.customerEdit}
                  />
                  <CustomersList
                    customers={this.state.customers}
                    delCustomer={this.delCustomer}
                    editCustomer={this.editCustomer}
                  />
                </div>
    );
  }
}

export default Customers;
