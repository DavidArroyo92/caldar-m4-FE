import React, { Component } from "react";
import { delBoilerType as delBoilerTypeActions } from "../../redux/actions/boilerTypesActions";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";

class RemoveBoilerTypeMessage extends Component {
  render() {
		const handleDelete = () => {
			this.props.delBoilerType(this.props.boilerTypeId);
			this.props.closeModal();
		}
    return (
      <div>
        <h1>Are you sure to delete this item?</h1>
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
RemoveBoilerTypeMessage.propTypes = {
  boilerTypeId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  delBoilerType: (_id) => dispatch(delBoilerTypeActions(_id)),
  closeModal: () => dispatch(closeModalActions()),
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveBoilerTypeMessage);
