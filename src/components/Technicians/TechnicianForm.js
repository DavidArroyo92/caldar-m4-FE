import React from 'react';
import { connect } from 'react-redux';
import styles from "../../layout/main/main.module.css";
import { bindActionCreators } from 'redux';
import {
    addTechnicians as addTechniciansActions
} from '../../redux/actions/techniciansActions';
import {
    closeModal as closeModalAction
} from '../../redux/actions/modalActions';
import { required, email, composeValidations } from '../../utils/validations';
import { Form, Field } from 'react-final-form';
import TextInput from '../../SharedComponents/TextInput/TextInput';

const TechnicianForm = (props) => {
    const onSubmitTechnician = (values) => {
        console.log(values);
        props.addTechnicians(values);
        props.closeModal();
    };
 

    return (
        <div>
            <Form
                onSubmit={onSubmitTechnician}
                render={({ handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit}>
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
                        <div>
                            <button type="submit" disabled={submitting || pristine}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
        addTechnicians: addTechniciansActions,
        closeModal: closeModalAction,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(TechnicianForm);

