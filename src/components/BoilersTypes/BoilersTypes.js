import React, { Component } from "react";
import BoilerTypeList from "./BoilerTypeList";
import AddBoilerType from "./AddBoilerType";
import styles from '../../layout/main/main.module.css';
import { connect } from "react-redux";
import {
  getBoilerTypes as getBoilerTypesActions,
  deleteBoilerType as deleteBoilerTypeActions,
  // addBoilerType as addBoilerTypeActions,
  // editBoilerType as updateBoilerTypeActions,
} from "../../redux/actions/boilerTypesActions"; 

import { showModal as showModalActions } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/types-modals.js";

class BoilerType extends Component {
  state = {
    boilerTypeEdit: null,
    showForm: false,
  }

  componentDidMount() {
    this.props.getBoilerTypes();
  }

  // // Show form
  // handleShowForm = () => {
  //   this.setState({
  //     showForm: !this.state.showForm,
  //     boilerTypeEdit: null,
  //   });
  //   window.scrollTo(0, 0);
  // };

  //Show add Modal
  showAddModal = () => {
    this.props.showModal(modalTypes.ADD_BOILERTYPE);
  };

  //edit boiler type
  editBoilerType = (bt) => {
    this.setState({
      boilerTypeEdit: bt,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddBoilerType 
            // addBoilerType={this.props.addBoilerType}
            // updateBoilerType={this.props.updateBoilerType}
            boilerTypeEdit={this.state.boilerTypeEdit}
            // handleShowForm={this.handleShowForm}
          />
        ) : (
          <BoilerTypeList 
            boilerTypes={this.props.boilerTypes} 
            deleteBoilerType={this.props.deleteBoilerType}
            editBoilerType={this.editBoilerType}
            // handleShowForm={this.handleShowForm}
            // showForm={this.state.showForm}
            showAddModal={this.showAddModal}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // getBoilerTypes: () => dispatch(getBoilerTypesActions()),
  // deleteBoilerType: (_id) => dispatch(deleteBoilerTypeActions(_id)),
  // addBoilerType: (skillsId, type, stock, description) =>
  //   dispatch(
  //     addBoilerTypeActions(skillsId, type, stock, description)
  //   ),
  // updateBoilerType: (_id, skillsId, type, stock, description) =>
  //   dispatch(
  //     updateBoilerTypeActions(
  //       _id, skillsId, type, stock, description
  //     )
  //   ),
  showModal: (modalType) => dispatch(showModalActions(modalType)),
  getBoilerTypes: () => dispatch(getBoilerTypesActions()),
  deleteBoilerType: (_id) => dispatch(deleteBoilerTypeActions(_id)),
});

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypes.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilerType);
