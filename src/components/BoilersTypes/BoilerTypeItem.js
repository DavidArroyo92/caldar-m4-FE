import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import modalTypes from "../../redux/types/types-modals.js";
import { showModal as showModalActions } from "../../redux/actions/modalActions";

export class BoilerTypeItem extends Component {

    //Show add Modal
    showDeleteModal = (_id) => {
      this.props.showModal(modalTypes.DEL_BOILERTYPE, {id: _id});
    };
  
  render() {
    const {
      _id,
      skillsId,
      type,
      stock,
      description,
    } = this.props.boilerType;
    return (
      <tr className={styles.table}>
        <td>{_id}</td>
        <td>{type}</td>
        <td>{skillsId}</td>
        <td>{stock}</td>
        <td>{description}</td>
        <td>
          <button
            title="Edit"
            onClick={this.props.editBoilerType.bind(this, this.props.boilerType)}
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
BoilerTypeItem.propTypes = {
  boilerType: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType, meta) => dispatch(showModalActions(modalType, meta)),
});

const mapStateToProps = (state) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoilerTypeItem);
