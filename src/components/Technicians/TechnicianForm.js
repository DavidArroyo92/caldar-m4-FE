import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from "../../layout/main/main.module.css";
//import { bindActionCreators } from 'redux';
import {
    addTechnicians as addTechniciansActions,
    editTechnicians as updateTechniciansActions,
} from '../../redux/actions/techniciansActions';
import {
    closeModal as closeModalActions
} from '../../redux/actions/modalActions';
import { required, email, composeValidations } from '../../utils/validations';
import { Form, Field } from 'react-final-form';
import TextInput from '../../SharedComponents/TextInput/TextInput';


export class TechnicianForm extends Component {

    onSubmit = (values) => {
        if (values._id) {
            this.props.updateTechnician(
                values._id,
                values.firstName,
                values.lastName,
                values.email,
                values.typeIds,
                values.skillsId,
                values.hour_rate,
                values.daily_capacity,
            );
        } else {
            this.props.addTechnicians(
                values.firstName,
                values.lastName,
                values.email,
                values.typeIds,
                values.skillsId,
                values.hour_rate,
                values.daily_capacity,
            );
        }
        this.props.closeModal();
    }

    render () {
        const technicianEdit = this.props.technicianEdit;
        return (
            <div>
                <h1>
                {technicianEdit && technicianEdit._id ? "Edit technician" : "Add new Technician"}</h1>
                <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit}>
                            <div>                    
                                <Field
                                    component="input"
                                    type="hidden"
                                    name="_id"
                                    className={styles.input}
                                    placeholder="Technician Id..."
                                />
                            </div>
                            <div>
                                <Field
                                    name= "firstName"
                                    component= {TextInput}
                                    placeholder= "First Name..."
                                    label = "First Name:"
                                    className={styles.input}
                                    validate= {required}
                                />
                            </div>
                            <div>
                                <Field
                                    name= "lastName"
                                    component= {TextInput}
                                    placeholder= "Last Name..."
                                    label= "Last Name:"
                                    className={styles.input}
                                    validate= {required}
                                />
                            </div>
                            <div>
                                <Field
                                    name= "email"
                                    component= {TextInput}
                                    placeholder= "Email..."
                                    label= "Email:"
                                    className={styles.input}
                                    validate= {required}
                                />
                            </div>
                            <div>
                                <Field
                                    name= "typeIds"
                                    component= {TextInput}
                                    placeholder= "Type Ids..."
                                    label= "Type Ids:"
                                    className={styles.input}
                                    validate= {required}
                                />
                            </div>
                            <div>
                                <Field
                                    name= "skillsId"
                                    component= {TextInput}
                                    placeholder= "Skills Id..."
                                    label= "Skills Id:"
                                    className={styles.input}
                                    validate= {required}
                                />
                            </div>
                            <div>
                                <Field
                                    name= "hour_rate"
                                    component= {TextInput}
                                    placeholder= "Hour rate..."
                                    label= "Hour Rate:"
                                    className={styles.input}
                                    validate= {required}
                                />
                            </div>
                            <div>
                                <Field
                                    name= "daily_capacity"
                                    component= {TextInput}
                                    placeholder= "Daily capacity..."
                                    label= "Daily Capacity:"
                                    className={styles.input}
                                    validate= {required}
                                />
                            </div>
                            <div className={styles.formsBtn}>
                                {technicianEdit && technicianEdit._id ? (
                                    <button type='submit' title="Save" className={styles.btnStyle}>
                                        <i className="far fa-save"></i>
                                    </button>
                                ) : (
                                    <button type='submit' title="Add" className={styles.btnStyle}>
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
        )
    }
};

//proptypes
TechnicianForm.propTypes = {
    technicianEdit: PropTypes.object,
   };

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModalActions()),
    addTechnicians: (firstName, lastName, email, typeIds, skillsId, hour_rate, daily_capacity) =>
      dispatch(
        addTechniciansActions(
          firstName,
          lastName,
          email,
          typeIds,
          skillsId,
          hour_rate,
          daily_capacity,
        )
      ),
    editTechnicians: (
      _id,
      firstName,
      lastName,
      email,
      typeIds,
      skillsId,
      hour_rate,
      daily_capacity,
    ) =>
      dispatch(
        updateTechniciansActions(
          _id,
          firstName,
          lastName,
          email,
          typeIds,
          skillsId,
          hour_rate,
          daily_capacity,
        )
      ),
  });
  
  const mapStateToProps = (state) => ({
  });

export default connect(null, mapDispatchToProps)(TechnicianForm);

