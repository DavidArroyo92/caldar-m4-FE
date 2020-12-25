import React, { Component } from "react";
import CustomersList from "./CustomersList";
import AddCustomer from "./AddCustomer";
import { v4 as uuidv4 } from "uuid";
import styles from "../../layout/main/main.module.css";

class Customers extends Component {
  state = {
    customers: [],
    customerEdit: null,
    showForm: false,
  };

  componentDidMount() {
    const dataCustomers = require("../../data/customers.json");
    this.setState({ customers: dataCustomers });
  }

  // Show form
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      customerEdit: null,
    });
    window.scrollTo(0, 0);
  };

  // Edit Customer
  editCustomer = (customer) => {
    this.setState({
      customerEdit: customer,
      showForm: true,
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
      showForm: false,
    });
  };

  // Delete Customer
  delCustomer = (id) => {
    this.setState({
      customers: [
        ...this.state.customers.filter((customer) => customer.id !== id),
      ],
      showForm: false,
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

    this.setState({
      customers: [...this.state.customers, newCustomer],
      showForm: false,
    });
  };

  render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddCustomer
            addCustomer={this.addCustomer}
            updateCustomer={this.updateCustomer}
            customerEdit={this.state.customerEdit}
            handleShowForm={this.handleShowForm}
          />
        ) : (
          <CustomersList
            customers={this.state.customers}
            delCustomer={this.delCustomer}
            editCustomer={this.editCustomer}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}

export default Customers;
