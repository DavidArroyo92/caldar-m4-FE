import React, { Component } from "react";
import BoilersList from "./BoilersList";
import AddBoiler from "./AddBoiler";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import {
  getBoilers as getBoilersActions,
} from "../../redux/actions/boilersActions";

import { showModal as showModalActions } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/types-modals.js";

class Boilers extends Component {
  state = {
    boilerEdit: null,
    showForm: false,
  };

  componentDidMount() {
    this.props.getBoilers();
  }

  // Edit Boiler
  editBoiler = (boiler) => {
    this.setState({
      boilerEdit: boiler,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  //Show add Modal
  showAddModal = () => {
    this.props.showModal(modalTypes.ADD_BOILER);
  };

  render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddBoiler boilerEdit={this.state.boilerEdit} />
        ) : (
          <BoilersList
            boilers={this.props.boilers}
            editBoiler={this.editBoiler}
            showAddModal={this.showAddModal}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType) => dispatch(showModalActions(modalType)),
  getBoilers: () => dispatch(getBoilersActions()),
});

const mapStateToProps = (state) => ({
  boilers: state.boilers.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Boilers);
