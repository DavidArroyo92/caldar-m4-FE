import React, { Component } from "react";
import { delBoiler as delBoilerActions } from "../../redux/actions/boilersActions";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";

class RemoveBoilerMessage extends Component {
  render() {
		const handleDelete = () => {
			this.props.delBoiler(this.props.boilerId);
			this.props.closeModal();
		}
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
RemoveBoilerMessage.propTypes = {
  boilerId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  delBoiler: (_id) => dispatch(delBoilerActions(_id)),
  closeModal: () => dispatch(closeModalActions()),
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveBoilerMessage);
