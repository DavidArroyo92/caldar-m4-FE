import React, { Component } from "react";
import CustomersList from "./CustomersList";
import AddCustomer from "./AddCustomer";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import {
  getCustomers as getCustomersActions,
  delCustomer as delCustomerActions,
  addCustomer as addCustomerActions,
  editCustomer as updateCustomerActions,
} from "../../redux/actions/customersActions";

class Customers extends Component {
  state = {
    customerEdit: null,
    showForm: false,
  };

  componentDidMount() {
    this.props.getCustomers();
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

  render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddCustomer
            addCustomer={this.props.addCustomer}
            updateCustomer={this.props.updateCustomer}
            customerEdit={this.state.customerEdit}
            handleShowForm={this.handleShowForm}
          />
        ) : (
          <CustomersList
            customers={this.props.customers}
            delCustomer={this.props.delCustomer}
            editCustomer={this.editCustomer}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCustomers: () => dispatch(getCustomersActions()),
  delCustomer: (_id) => dispatch(delCustomerActions(_id)),
  addCustomer: (customerType, email, buildingsIds, fiscalAddress) =>
    dispatch(
      addCustomerActions(customerType, email, buildingsIds, fiscalAddress)
    ),
  updateCustomer: (_id, customerType, email, buildingsIds, fiscalAddress) =>
    dispatch(
      updateCustomerActions(
        _id,
        customerType,
        email,
        buildingsIds,
        fiscalAddress
      )
    ),
});

const mapStateToProps = (state) => ({
  customers: state.customers.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);