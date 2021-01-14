import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import modalTypes from "../../redux/types/types-modals.js";
import { showModal as showModalActions } from "../../redux/actions/modalActions";

export class BoilerItem extends Component {

    //Show add Modal
    showDeleteModal = (_id) => {
      this.props.showModal(modalTypes.DEL_BOILER, {id: _id});
    };
  
  render() {
    const {
      _id,
      maintainceRate,
      typeId,
      hourMaintainceCost,
      hourEventualCost,
    } = this.props.boiler;
    return (
      <tr className={styles.table}>
        <td>{_id}</td>
        <td>{typeId}</td>
        <td>{maintainceRate}</td>
        <td>{hourMaintainceCost}</td>
        <td>{hourEventualCost}</td>
        <td>
          <button
            title="Edit"
            onClick={this.props.editBoiler.bind(this, this.props.boiler)}
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
BoilerItem.propTypes = {
  boiler: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType, meta) => dispatch(showModalActions(modalType, meta)),
});

const mapStateToProps = (state) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoilerItem);