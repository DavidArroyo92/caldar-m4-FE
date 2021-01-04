import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css';
import {Form, Field} from 'react-final-form';
import {addBuilding as addBuildingActions,} from '../../redux/actions/buildingsActions';
import {closeModal as closeModalActions,} from '../../redux/actions/modalActions'
import { connect} from 'react-redux';

 export class AddBuilding extends Component {
     state = {
         _id:"",
         boilersId:"",
         businessName:"",
         email:"",
         phone:"",
         adress:"",
     };

     componentDidMount() {
        if (this.props.buildingEdit) {
          this.handleEdit(this.props.buildingEdit);
        }
      }

      handleCleanForm = () => {
        this.setState({
        _id: "",
        boilersId: "",
        businessName: "",
        email: "",
        phone: "",
        adress: "",
        });
        this.props.handleShowForm();
      };
    
      handleEdit = (buildingEdit) => {
        this.setState({
        _id: buildingEdit._id,
        boilersId: buildingEdit.boilersId,
        businessName: buildingEdit.businessName,
        email: buildingEdit.email,
        phone: buildingEdit.phone,
        adress: buildingEdit.adress,
        });
      };

     onSubmit = (e) => {
         e.preventDefault();
         if (this.state._id) {
            this.props.updateBuilding(
                this.state._id,
                this.state.boilersId,
                this.state.businessName,
                this.state.email,
                this.state.phone,
                this.state.adress
            );
          } else {
         this.props.addBuilding(
            this.state.boilersId,
            this.state.businessName,
            this.state.email,
            this.state.phone,
            this.state.adress
        );
      }
        
      this.handleCleanForm();
    };

     onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render(){
        return(
            <div>
                <h3>
                {this.state._id ? "Edit building" : "Add new Building"}
                </h3>
                <Form
                      onSubmit={onSubmit => {
                        console.log(onSubmit);
                      }}
                    >
                      {({ onSubmit }) => (
                        <form onSubmit={onSubmit}>
                          <Field name="_id">
                            {({ input }) => (
                              <input
                                type="hidden"
                                {...input}
                              />
                            )}
                            </Field>
                          <Field name="BoilersId">
                            {({ input }) => (
                              <input
                                placeholder="Add boiler ID"
                                type="text"
                                className={styles.input}
                                {...input}
                              />
                            )}
                          </Field>
                          <Field name="Business Name">
                            {({ input }) => (
                              <input
                                placeholder="Business Name"
                                type="text"
                                className={styles.input}
                                {...input}
                              />
                            )}
                          </Field>
                          <Field name="email">
                            {({ input }) => (
                              <input
                                placeholder="Email"
                                type="email"
                                className={styles.input}
                                {...input}
                              />
                            )}
                          </Field>
                          <Field name="adress">
                            {({ input }) => (
                              <input
                                placeholder="address"
                                type="text"
                                className={styles.input}
                                {...input}
                              />
                            )}
                          </Field>
                          <Field name="phone">
                            {({ input }) => (
                              <input
                                placeholder="Phone"
                                type="text"
                                className={styles.input}
                                {...input}
                              />
                            )}
                          </Field>
                          <button 
                            type="submit"
                            className={styles.input}
                          >Submit
                          </button>

                          <button 
                          type="submit"
                          className={styles.input}
                          >Cancel</button>
                        </form>
                      )}
                  </Form>
                );
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) =>({
  addBuilding: (boilersId, businessName,email,phone,adress) =>
    dispatch(
      addBuildingActions(boilersId, businessName,email,phone,adress )
    ),
    closeModal: () => dispatch(closeModalActions()),
});

//proptypes
AddBuilding.propTypes = {
  addBuilding: PropTypes.func.isRequired,
  updateBuilding: PropTypes.func.isRequired,
   handleShowForm: PropTypes.func.isRequired,
   buildingEdit: PropTypes.object,
  };

export default connect(null, mapDispatchToProps)(AddBuilding) 