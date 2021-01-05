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
                <h1>
                {this.state._id ? "Edit building" : "Add new Building"}</h1>
                <form onSubmit ={this.onSubmit} >
                    <input type="hidden" name="_id" value={this.state._id} />
                    <input
                    type="text"
                    name="boilersId"
                    className={styles.input}
                    placeholder="Add Boiler ID"
                    value={this.state.boilersId}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="businessName"
                    className={styles.input}
                    placeholder="Add Business Name"
                    value={this.state.businessName}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="email"
                    className={styles.input}
                    placeholder="Add e-mail"
                    value={this.state.email}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="adress"
                    className={styles.input}
                    placeholder="Add adress..."
                    value={this.state.adress}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="phone"
                    className={styles.input}
                    placeholder="Add phone..."
                    value={this.state.phone}
                    onChange={this.onChange}
                    />
                    <div  className={styles.formsBtn}>
                      {this.state._id ?
                        <button
                          title="Save"
                          className={styles.btnStyle}
                        >
                          <i className="far fa-save"></i>
                        </button>
                        :
                        <button
                          title="Add"
                          className={styles.btnStyle}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      }
                      <div>
                        <button
                          title="Cancel"
                          className={styles.btnStyle}
                          onClick={this.handleCleanForm}
                        >
                          <i className="fas fa-ban"></i>
                        </button>
                      </div>
                    </div>
                </form>
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