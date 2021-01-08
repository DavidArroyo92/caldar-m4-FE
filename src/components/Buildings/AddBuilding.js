import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css';
import {Form, Field} from 'react-final-form';
import TextInput from "../../SharedComponents/TextInput/TextInput";
import { connect} from 'react-redux';
import {closeModal as closeModalActions,} from '../../redux/actions/modalActions'

import {
  addBuilding as addBuildingActions,
  editBuilding as updateBuildingActions,
}from '../../redux/actions/buildingsActions';
 
export class AddBuilding extends Component {
     

     onSubmit = (values) => {
         if (values._id) {
            this.props.updateBuilding(
                values._id,
                values.boilersId,
                values.businessName,
                values.email,
                values.adress,
                values.phone,
            );
          } else {
         this.props.addBuilding(
           values.boilersId,
           values.businessName,
           values.email,
           values.adress,
           values.phone

        );
      }
      this.props.closeModal();
    };
    
    render(){
      const buildingEdit = this.props.buildingEdit;
        return(
            <div>
                <h1>
                {buildingEdit && buildingEdit._id ? "Edit building" : "Add new Building"}</h1>
                <Form
                  onSubmit={this.onSubmit}
                  initialValues={{
                    _id: buildingEdit && buildingEdit._id,
                    boilersId: buildingEdit && buildingEdit.boilersId,
                    businessName: buildingEdit && buildingEdit.businessName,
                    email: buildingEdit && buildingEdit.email,
                    adress: buildingEdit && buildingEdit.adress,
                    phone: buildingEdit && buildingEdit.phone,
                  }}
                  validate={(values)=>{
                    const errors = {};

                    if(!values.boilersId){
                      errors.boilersId="Required";
                    } else if ((values.boilersId.length <24)){
                        errors.boilersId = 'At least 24 characters, only numbers and letter. Example 5fef8b6c46090d0017049421'
                    }
                    if(!values.businessName){
                      errors.businessName="Required";
                    }
                    if(!values.email){
                      errors.email="Required";
                    } else if (!/^[^@]+@[^@]+\.[A-Z]{2,4}$/i.test(values.email)){
                      errors.email = "invalid e-mail the E-mail must contain @ and .com"
                    }

                    if(!values.adress){
                      errors.adress="Required";
                    } else if (!/[a-z]/i.test(values.adress) || !/\d/g.test(values.adress) || (values.adress.length <5) || (values.adress.indexOf(" ") === -1)){
                      errors.adress = "At least 5 characters, with letters, numbers and a space"
                    }
                    if(!values.phone){
                      errors.phone="Required";
                    } else if (!/^[+0-9]+[^-_()\\s]$/.test(values.phone) || (values.phone.length <7) || (values.adress.indexOf(" ") !== -1) ){
                      errors.phone = "Number of at least 7 digits, do not accept spaces, hyphens or parentheses."
                    }

                    return errors;
    }}
                  render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                          <Field 
                              name="_id"
                              component="input"
                              type="hidden"
                              placeholder="_Id"
                              className={styles.input}
                            />
                          <Field 
                                name="boilersId"
                                component={TextInput}
                                type="text"
                                placeholder="Add boiler Id..."
                                className={styles.input}
                            />
                         
                          <Field 
                                name="businessName"
                                component={TextInput}
                                type="text"
                                placeholder="Add Business Name..."
                                className={styles.input}
                              />
          
                          <Field 
                                name="email"
                                component={TextInput}
                                type="text"
                                placeholder="Add email@email.com"
                                className={styles.input}
                               
                        
                          />
                          <Field 
                                name="adress"
                                component={TextInput}
                                type="text"
                                placeholder="Add Address..."
                                className={styles.input}
                                 
                          />
                          <Field 
                                name="phone"
                                component={TextInput}
                                placeholder="Add phone number"
                                type="text"
                                className={styles.input} 
                          />
                         <div  className={styles.formsBtn}>
                      {buildingEdit && buildingEdit._id ? (
                        <button type='submit' title="Save" className={styles.btnStyle}>
                          <i className="far fa-save"></i>
                        </button>
                      ) : (
                        <button type='submit' title="Add" className={styles.btnStyle}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      )}
                      <div>
                        <button
                          title="Cancel"
                          className={styles.btnStyle}
                          onClick={this.props.closeModal}
                        >
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                    </div>
                          
                        </form>
                      )}
                  />
            </div>
        );
    }
}
//proptypes
AddBuilding.propTypes = {
   buildingEdit: PropTypes.object,
  };

  const mapDispatchToProps = (dispatch) =>({
    closeModal: () => dispatch(closeModalActions()),
    addBuilding: (boilersId, businessName,email,phone,adress) =>
    dispatch(
      addBuildingActions(
        boilersId, 
        businessName,
        email,
        adress,
        phone
         )
    ),

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

export default connect(mapStateToProps, mapDispatchToProps)(AddBuilding) 