import React, { Component } from "react";
import AddBoilerType from './AddBoilerType';
import {  editBoilerType as updateBoilerTypeActions, } from "../../redux/actions/BoilerTypesActions"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";
// import styles from "../../layout/main/main.module.css";

class EditBoilerTypeMessage extends Component {
  render() {
      
    return (
      <div>
         <div>
            <h1>
              Edit this Boiler Type?
            </h1>
        </div>
        <AddBoilerType
        editBoilerType ={this.props.editBoilerType}

        />
      </div>
    );
  }
}

// PropTypes
EditBoilerTypeMessage.propTypes = {
  boilerTypeId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) =>({
    closeModal: () => dispatch(closeModalActions()),
    editBoilerType: (
      _id,
      skillsId, 
      type,
      stock,
      description
    ) =>
    dispatch (
      updateBoilerTypeActions(
        _id,
        skillsId, 
        type,
        stock,
        description
      )
    ),
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoilerTypeMessage) 
