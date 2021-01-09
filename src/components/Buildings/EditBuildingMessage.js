import React, { Component } from "react";
import AddBuilding from './AddBuilding';
import {  editBuilding as updateBuildingActions, } from "../../redux/actions/buildingsActions"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";
// import styles from "../../layout/main/main.module.css";

class EditBuildingMessage extends Component {
  render() {
      
    return (
      <div>
         <div>
            <h1>
              Edit this Building?
            </h1>
        </div>
        <AddBuilding
        editBuilding ={this.props.editBuilding}

        />
      </div>
    );
  }
}

// PropTypes
EditBuildingMessage.propTypes = {
  buildingId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) =>({
    closeModal: () => dispatch(closeModalActions()),
    editBuilding: (
      _id,
      boilersId, 
        businessName,
        email,
        adress,
        phone
    ) =>
    dispatch (
      updateBuildingActions(
        _id,
        boilersId, 
        businessName,
        email,
        adress,
        phone
      )
    ),
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditBuildingMessage) 
