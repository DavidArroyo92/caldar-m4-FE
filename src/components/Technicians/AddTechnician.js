import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

export class AddTechnician extends Component {
    state = {
        _id:"",
        firstName: "",
        lastName: "",
        email: "",
        typeIds: "",
        skillsId: "",
        hour_rate: "",
        daily_capacity: "",
      };

    componentDidMount(){
      if (this.props.technicianEdit) {
      this.handleEdit(this.props.technicianEdit);
    }
  }
    handleCleanForm = () => {
      this.setState({
        _id:"",
        firstName: "",
        lastName: "",
        email: "",
        typeIds: "",
        skillsId: "",
        hour_rate: "",
        daily_capacity: "",
        });
        this.props.handleShowForm();
  }
    
    handleEdit = (technicianEdit) => {
        this.setState({
            _id: technicianEdit._id,
            firstName: technicianEdit.firstName,
            lastName: technicianEdit.lastName,
            email: technicianEdit.email,
            typeIds: technicianEdit.typeIds,
            skillsId: technicianEdit.skillsId,
            hour_rate: technicianEdit.hour_rate,
            daily_capacity: technicianEdit.daily_capacity,
        });
    };


      onSubmit = (e) => {
        e.preventDefault();
        if (this.state._id) {
            this.props.updateTechnician(
                this.state._id,
                this.state.firstName,
                this.state.lastName,
                this.state.email,
                this.state.typeIds,
                this.state.skillsId,
                this.state.hour_rate,
                this.state.daily_capacity,
            );
        } else {
            this.props.addTechnician(
                this.state.firstName,
                this.state.lastName,
                this.state.email,
                this.state.typeIds,
                this.state.skillsId,
                this.state.hour_rate,
                this.state.daily_capacity,
            );
        }
        this.setState({
            firstName:"",
            lastName:"",
            email:"",
            typeIds: "",
            skillsId:"",
            hour_rate: "",
            daily_capacity: "",
        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <h3>{this.state._id ? "Edit Technician" : "Add new Technician"}</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" name="_id" value={this.state._id} />
                        <input
                            type="text"
                            name="firstName"
                            className={styles.input}
                            placeholder="First Name..."
                            value={this.state.firstName}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            className={styles.input}
                            placeholder="Last Name..."
                            value={this.state.lastName}
                            onChange={this.onChange}
                        />
                        <input
                            type="email"
                            name="email"
                            className={styles.input}
                            placeholder="Email..."
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="typeIds"
                            className={styles.input}
                            placeholder="Type Ids..."
                            value={this.state.typeIds}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="skillsId"
                            className={styles.input}
                            placeholder="Skills Id..."
                            value={this.state.skillsId}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="hour_rate"
                            className={styles.input}
                            placeholder="Hour rate..."
                            value={this.state.hour_rate}
                            onChange={this.onChange}
                        />
                        <input
                            type="number"
                            name="daily_capacity"
                            className={styles.input}
                            placeholder="Daily capacity..."
                            value={this.state.daily_capacity}
                            onChange={this.onChange}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className={styles.input}
                        />
                        <input
                            type="button"
                            value="Cancel"
                            className={styles.input}
                            onClick={this.handleCleanForm}
                        />
                </form>
            </div>
        )
    }
}

// Prop types
AddTechnician.propTypes = {
    addTechnician: PropTypes.func.isRequired,
    updateTechnician: PropTypes.func.isRequired,
    handleShowForm: PropTypes.func.isRequired,
    technicianEdit: PropTypes.object,
}

export default AddTechnician;