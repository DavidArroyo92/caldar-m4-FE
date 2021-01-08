import React, { Component }from 'react';
import { connect } from 'react-redux';
import {
    delTechnician as delTechnicianActions
} from '../../redux/actions/techniciansActions';
import {
    closeModal as closeModalActions
} from '../../redux/actions/modalActions';
import styles from "../../layout/main/main.module.css";
import PropTypes from "prop-types";

class RemoveTechnicianMessage extends Component {
    render() {
		const handleDelete = () => {
			this.props.delTechnician(this.props.technicianId);
			this.props.closeModal();
		}

        return (
            <div>
                <h1>
            |    Are you sure you want to delete this technician?
                </h1>
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
        )
    }
}

// PropTypes
RemoveTechnicianMessage.propTypes = {
    technicianId: PropTypes.string,
  };
  
  const mapDispatchToProps = (dispatch) => ({
    delTechnician: (_id) => dispatch(delTechnicianActions(_id)),
    closeModal: () => dispatch(closeModalActions()),
  });
  
  const mapStateToProps = (state) => ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(RemoveTechnicianMessage);