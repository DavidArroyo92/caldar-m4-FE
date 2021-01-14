import React, { Component } from "react";
import { delCustomer as delCustomerActions } from "../../redux/actions/customersActions";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";

class RemoveCustomerMessage extends Component {
  render() {
    const handleDelete = () => {
      this.props.delCustomer(this.props.customerId);
      this.props.closeModal();
    };
    return (
      <div>
        <h1>Desea borrar el registro?</h1>
        <button
          type="submit"
          title="Add"
          className={styles.btnStyle}
          onClick={handleDelete}
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          title="Cancel"
          className={styles.btnStyle}
          onClick={this.props.closeModal}
        >
          <i className="fas fa-ban"></i>
        </button>
      </div>
    );
  }
}

// PropTypes
RemoveCustomerMessage.propTypes = {
  customerId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  delCustomer: (_id) => dispatch(delCustomerActions(_id)),
  closeModal: () => dispatch(closeModalActions()),
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveCustomerMessage);
