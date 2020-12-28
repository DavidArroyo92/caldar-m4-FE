import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css'

 export class AddBuilding extends Component {
     state = {
         id:'',
         boilerId:'',
         businessName:'',
         email:'',
         phone:'',
         adress:'',
     };

     componentDidMount() {
        if (this.props.buildingEdit) {
          this.handleEdit(this.props.buildingEdit);
        }
      }

      handleCleanForm = () => {
        this.setState({
        id: "",
        boilerId: "",
        businessName: "",
        email: "",
        phone: "",
        adress: "",
        });
        this.props.handleShowForm();
      }
    
      handleEdit = (buildingEdit) => {
        this.setState({
        id: buildingEdit.id,
        boilerId: buildingEdit.boilerId,
        businessName: buildingEdit.businessName,
        email: buildingEdit.email,
        phone: buildingEdit.phone,
        adress: buildingEdit.adress,
        });
      };

     onSubmit = (e) => {
         e.preventDefault();
         if (this.state.id) {
            this.props.updateBuilding(
                this.state.id,
                this.state.boilerId,
                this.state.businessName,
                this.state.email,
                this.state.phone,
                this.state.adress
            );
          } else {
         this.props.addBuilding(
            this.state.boilerId,
            this.state.businessName,
            this.state.email,
            this.state.phone,
            this.state.adress
        );
         }
         this.setState({
            id: "",
             boilerId:"",
             businessName:"",
             email:"",
             phone:"",
             adress:"",
            });
     };

     onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render(){
        return(
            <div>
                <h3>
                {this.state.id ? "Edit building" : "Add new Building"}
                </h3>
                <form onSubmit ={this.onSubmit} >
                    <input type="hidden" name="id" value={this.state.id} />
                    <input
                    type="text"
                    name="boilerId"
                    className={styles.input}
                    placeholder="Add Boiler ID"
                    value={this.state.boilerId}
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

                    <input 
                    type="button"
                    value= "Cancel"
                    className={styles.input}
                    onClick={this.handleCleanForm}
                    />
                    <input
                    type="submit"
                    value="submit"
                    className={styles.input}
                    />
                </form>
            </div>
        );
    }
}

//proptypes
AddBuilding.propTypes = {
   addBuilding: PropTypes.func.isRequired,
   updateBuilding: PropTypes.func.isRequired,
   handleShowForm: PropTypes.func.isRequired,
   buildingEdit: PropTypes.object,
  }

export default AddBuilding 