import React, { Component } from "react";
import BoilerTypeList from "./BoilerTypeList";
import AddBoilerType from "./AddBoilerType";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import {
  getBoilerTypes as getBoilerTypesActions,
} from "../../redux/actions/boilerTypesActions";

import { showModal as showModalActions } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/types-modals.js";

class BoilerTypes extends Component {
  state = {
    boilerTypeEdit: null,
    showForm: false,
  };

  componentDidMount() {
    this.props.getBoilerTypes();
  }

  // Edit Boiler Type
  editBoilerType = (boilerType) => {
    this.setState({
      boilerTypeEdit: boilerType,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  //Show add Modal
  showAddModal = () => {
    this.props.showModal(modalTypes.ADD_BOILERTYPE);
  };

  render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddBoilerType boilerTypeEdit={this.state.boilerTypeEdit} />
        ) : (
          <BoilerTypeList
            boilerTypes={this.props.boilerTypes}
            editBoilerType={this.editBoilerType}
            showAddModal={this.showAddModal}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType) => dispatch(showModalActions(modalType)),
  getBoilerTypes: () => dispatch(getBoilerTypesActions()),
});

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypes.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypes);
