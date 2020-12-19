import React, { Component } from "react";
import PropTypes from "prop-types";

export class CustomerItem extends Component {
  getStyle = () => {
    return {
      background: "#f5f5f5",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const {
      id,
      customerType,
      email,
      buildingsIds,
      fiscalAddress,
    } = this.props.customer;
    return (
      <div style={this.getStyle()}>
        <p>
          Nro {id} - Type {customerType} - Email {email} - Buildings{" "}
          {buildingsIds.map((building) => building + " ")} - Fiscal address{" "}
          {fiscalAddress}
          <button
            onClick={this.props.delCustomer.bind(this, id)}
            style={btnStyle}
          >
            delete
          </button>
          <button
            onClick={this.props.editCustomer.bind(this, this.props.customer)}
            style={btnStyle}
          >
            edit
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  delCustomer: PropTypes.func.isRequired,
  editCustomer: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#fff",
  color: "#000",
  border: "none",
  padding: "5px 9px",
  borderRadius: "5px",
  cursor: "pointer",
  float: "right",
};

export default CustomerItem;
