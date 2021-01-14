import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styles from "../../layout/main/main.module.css";
import modalTypes from "../../redux/types/types-modals.js";
import { showModal as showModalActions } from "../../redux/actions/modalActions";

export class TechnicianItem extends Component {

    //Show del Modal
    showDeleteModal = (_id) => {
        this.props.showModal(modalTypes.DEL_TECHNICIAN, {id: _id});
      };

    render() {
        const { _id, firstName, lastName, email, typeIds, skillsId, hour_rate, daily_capacity} = this.props.technician;
        return (
            <tr className={styles.table}>
                <td>{_id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{typeIds}</td>
                <td>{skillsId}</td>
                <td>{hour_rate}</td>
                <td>{daily_capacity}</td>
                <button
                        title="Edit"
                        onClick={this.props.editTechnician.bind(this, this.props.technician)}
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
            </tr>
        )
    }
}

// PropTypes
TechnicianItem.propTypes = {
    technician: PropTypes.object.isRequired,
  };
  
  const mapDispatchToProps = (dispatch) => ({
    showModal: (modalType, meta) => dispatch(showModalActions(modalType, meta)),
  });
  
  const mapStateToProps = (state) => ({});

  export default connect(mapStateToProps, mapDispatchToProps)(TechnicianItem);