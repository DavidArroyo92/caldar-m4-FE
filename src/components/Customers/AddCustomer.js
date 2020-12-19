import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddCustomer extends Component {
  state = {
    id: "",
    customerType: "",
    email: "",
    buildingsIds: "",
    fiscalAddress: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.customerEdit !== prevProps.customerEdit) {
      this.handleEdit(this.props.customerEdit);
    }
  }

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
            style={inputStyle}
            placeholder="Type customer..."
            value={this.state.customerType}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="email"
            style={inputStyle}
            placeholder="Email ..."
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="buildingsIds"
            style={inputStyle}
            placeholder="Buildings separated by commas..."
            value={this.state.buildingsIds}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="fiscalAddress"
            style={inputStyle}
            placeholder="Fiscal address ..."
            value={this.state.fiscalAddress}
            onChange={this.onChange}
          />

          <input type="submit" value="Submit" style={inputStyle} />
        </form>
      </div>
    );
  }
}

// PropTypes
AddCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  customerEdit: PropTypes.object,
};

const inputStyle = {
  padding: "10px",
  width: "50%",
  margin: "5px",
  borderRadius: "5px",
};

export default AddCustomer;
