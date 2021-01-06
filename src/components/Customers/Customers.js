import React, { Component } from "react";
import CustomersList from "./CustomersList";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import { getCustomers as getCustomersActions } from "../../redux/actions/customersActions";

import { showModal as showModalActions } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/types-modals.js";

class Customers extends Component {
  state = {
    customerEdit: null,
  };

  componentDidMount() {
    this.props.getCustomers();
  }

  // Edit Customer
  editCustomer = (customer) => {
    this.setState({
      customerEdit: customer,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  showAddModal = () => {
    this.props.showModal(modalTypes.ADD_CUSTOMER);
  };

  render() {
    return (
      <div className={styles.info}>
        <CustomersList
          customers={this.props.customers}
          editCustomer={this.editCustomer}
          showAddModal={this.showAddModal}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType) => dispatch(showModalActions(modalType)),
  getCustomers: () => dispatch(getCustomersActions()),
});

const mapStateToProps = (state) => ({
  customers: state.customers.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
