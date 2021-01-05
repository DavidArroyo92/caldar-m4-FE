import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class AddCustomer extends Component {
  state = {
    _id: "",
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
      _id: "",
      typeId: "",
      maintainceRate: "",
      hourMaintainceCost: "",
      hourEventualCost: "",
    });
    this.props.handleShowForm();
  };

  handleEdit = (customerEdit) => {
    this.setState({
      _id: customerEdit._id,
      customerType: customerEdit.customerType,
      email: customerEdit.email,
      buildingsIds: customerEdit.buildingsIds.toString(),
      fiscalAddress: customerEdit.fiscalAddress,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state._id) {
      this.props.updateCustomer(
        this.state._id,
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
    this.handleCleanForm();
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h1>{this.state._id ? "Edit customer" : "Add new customer"}</h1>
        <form onSubmit={this.onSubmit}>
          <input type="hidden" name="_id" value={this.state._id} />
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
          <div  className={styles.formsBtn}>
            {this.state._id ?
              <button
                title="Save"
                className={styles.btnStyle}
              >
                <i className="far fa-save"></i>
              </button>
              :
              <button
                title="Add"
                className={styles.btnStyle}
              >
                <i className="fas fa-plus"></i>
              </button>
            }
            <div>
              <button
                title="Cancel"
                className={styles.btnStyle}
                onClick={this.handleCleanForm}
              >
                <i className="fas fa-ban"></i>
              </button>
            </div>
          </div>
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
