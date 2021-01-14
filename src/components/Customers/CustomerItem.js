import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import modalTypes from "../../redux/types/types-modals.js";
import { showModal as showModalActions } from "../../redux/actions/modalActions";

export class CustomerItem extends Component {
  showDeleteModal = (_id) => {
    this.props.showModal(modalTypes.DEL_CUSTOMER, { id: _id });
  };

  render() {
    const {
      _id,
      customerType,
      email,
      buildingsIds,
      fiscalAddress,
    } = this.props.customer;
    return (
      <tr className={styles.table}>
        <td>{_id}</td>
        <td>{customerType}</td>
        <td>{email}</td>
        <td>{buildingsIds}</td>
        <td>{fiscalAddress}</td>
        <td>
          <button
            title="Edit"
            onClick={this.props.editCustomer.bind(this, this.props.customer)}
            className={styles.btnStyle}
          >
            <i className="far fa-edit"></i>
          </button>
          <button
            title="Delete"
            className={styles.btnStyle}
            onClick={() => this.showDeleteModal(_id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    );
  }
}

// PropTypes
CustomerItem.propTypes = {
    customer: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType, meta) => dispatch(showModalActions(modalType, meta)),
});

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CustomerItem);
