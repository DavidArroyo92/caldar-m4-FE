import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import { Form, Field } from "react-final-form";
import TextInput from "../../SharedComponents/TextInput/TextInput";
import { connect } from "react-redux";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";
import {
  addCustomer as addCustomerActions,
  editCustomer as updateCustomerActions,
} from "../../redux/actions/customersActions";

class AddCustomer extends Component {
  onSubmit = (values) => {
    if (values._id) {
      this.props.updateCustomer(
        values._id,
        values.customerType,
        values.email,
        values.buildingsIds,
        values.fiscalAddress
      );
    } else {
      this.props.addCustomer(
        values.customerType,
        values.email,
        values.buildingsIds,
        values.fiscalAddress
      );
    }
    this.props.closeModal();
  };

  render() {
    const customerEdit = this.props.customerEdit;

    return (
      <div>
        <h1>
          {customerEdit && customerEdit._id
            ? "Edit customer"
            : "Add new customer"}
        </h1>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            _id: customerEdit && customerEdit._id,
            customerType: customerEdit && customerEdit.customerType,
            email: customerEdit && customerEdit.email,
            buildingsIds: customerEdit && customerEdit.buildingsIds,
            fiscalAddress: customerEdit && customerEdit.fiscalAddress,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.customerType) {
              errors.customerType = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }

            if (!values.buildingsIds) {
              errors.buildingsIds = "Required";
            }

            if (!values.fiscalAddress) {
              errors.fiscalAddress = "Required";
            }

            return errors;
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component="input"
                type="hidden"
                name="_id"
                className={styles.input}
              />
              <Field
                component={TextInput}
                type="text"
                name="customerType"
                className={styles.input}
                placeholder="Type customer..."
              />
              <Field
                component={TextInput}
                type="text"
                name="email"
                className={styles.input}
                placeholder="Email ..."
              />
              <Field
                component={TextInput}
                type="text"
                name="buildingsIds"
                className={styles.input}
                placeholder="buildings Ids ..."
              />
              <Field
                component={TextInput}
                type="text"
                name="fiscalAddress"
                className={styles.input}
                placeholder="Fiscal Adress ..."
              />
              <div className={styles.formsBtn}>
                {customerEdit && customerEdit._id ? (
                  <button
                    type="submit"
                    title="Save"
                    className={styles.btnStyle}
                  >
                    <i className="far fa-save"></i>
                  </button>
                ) : (
                  <button type="submit" title="Add" className={styles.btnStyle}>
                    <i className="fas fa-plus"></i>
                  </button>
                )}
                <div>
                  <button
                    title="Cancel"
                    className={styles.btnStyle}
                    onClick={this.props.closeModal}
                  >
                    <i className="fas fa-ban"></i>
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

// PropTypes
AddCustomer.propTypes = {
  customerEdit: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModalActions()),
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
