import React, { Component } from "react";
import { delBuilding as delBuildingActions } from "../../redux/actions/buildingsActions"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";
import styles from "../../layout/main/main.module.css";

class RemoveBuildingMessage extends Component {
  render() {
		const handleDelete = () => {
			this.props.delBuilding(this.props.buildingId);
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
RemoveBuildingMessage.propTypes = {
  buildingId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  delBuilding: (_id) => dispatch(delBuildingActions(_id)),
  closeModal: () => dispatch(closeModalActions()),
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveBuildingMessage);
