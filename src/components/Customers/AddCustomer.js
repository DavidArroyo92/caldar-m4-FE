import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class AddCustomer extends Component {
  state = {
    id: "",
    customerType: "",
    email: "",
    buildingsIds: "",
    fiscalAddress: "",
  };

  componentDidMount() {
    if (this.props.customerEdit) {
      this.handleEdit(this.props.customerEdit);
    }
  }

  handleCleanForm = () => {
    this.setState({
      id: "",
      typeId: "",
      maintainceRate: "",
      hourMaintainceCost: "",
      hourEventualCost: "",
    });
    this.props.handleShowForm();
  };

  handleEdit = (customerEdit) => {
    this.setState({
      id: customerEdit.id,
      customerType: customerEdit.customerType,
      email: customerEdit.email,
      buildingsIds: customerEdit.buildingsIds.toString(),
      fiscalAddress: customerEdit.fiscalAddress,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateCustomer(
        this.state.id,
        this.state.customerType,
        this.state.email,
        this.state.buildingsIds,
        this.state.fiscalAddress
      );
    } else {
      this.props.addCustomer(
        this.state.customerType,
        this.state.email,
        this.state.buildingsIds,
        this.state.fiscalAddress
      );
    }
    this.setState({
      id: "",
      customerType: "",
      email: "",
      buildingsIds: "",
      fiscalAddress: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h3>{this.state.id ? "Edit customer" : "Add new customer"}</h3>
        <form onSubmit={this.onSubmit}>
          <input type="hidden" name="id" value={this.state.id} />
          <input
            type="text"
            name="customerType"
            className={styles.input}
            placeholder="Type customer..."
            value={this.state.customerType}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="email"
            className={styles.input}
            placeholder="Email ..."
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="buildingsIds"
            className={styles.input}
            placeholder="Buildings separated by commas..."
            value={this.state.buildingsIds}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="fiscalAddress"
            className={styles.input}
            placeholder="Fiscal address ..."
            value={this.state.fiscalAddress}
            onChange={this.onChange}
          />

          <input type="submit" value="Submit" className={styles.input} />
          <input
            type="button"
            value="Cancel"
            className={styles.input}
            onClick={this.handleCleanForm}
          />
        </form>
      </div>
    );
  }
}

// PropTypes
AddCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  customerEdit: PropTypes.object,
};

export default AddCustomer;
