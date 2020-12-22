import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTechnician extends Component {
    state = {
        id:"",
        first_name: "",
        last_name: "",
        email: "",
        typeIds: "",
        skillsId: "",
        hour_rate: "",
        daily_capacity: "",
      };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.technicianEdit !== prevProps.technicianEdit) {
          this.handleEdit(this.props.technicianEdit);
        }
    }
    
    handleEdit = (technicianEdit) => {
        this.setState({
            id: technicianEdit.id,
            first_name: technicianEdit.first_name,
            last_name: technicianEdit.last_name,
            email: technicianEdit.email,
            typeIds: technicianEdit.typeIds,
            skillsId: technicianEdit.skillsId,
            hour_rate: technicianEdit.hour_rate,
            daily_capacity: technicianEdit.daily_capacity,
        });
    };


      onSubmit = (e) => {
        e.preventDefault();
        if (this.state.id) {
            this.props.updateTechnician(
                this.state.id,
                this.state.first_name,
                this.state.last_name,
                this.state.email,
                this.state.typeIds,
                this.state.skillsId,
                this.state.hour_rate,
                this.state.daily_capacity,
            );
        } else {
            this.props.addTechnician(
                this.state.first_name,
                this.state.last_name,
                this.state.email,
                this.state.typeIds,
                this.state.skillsId,
                this.state.hour_rate,
                this.state.daily_capacity,
            );
        }
        this.setState({
            first_name:"",
            last_name:"",
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
                <h3 style={AddTecStyle}>{this.state.id ? "Edit Technician" : "Add new Technician"}</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" name="id" value={this.state.id} />
                        <input
                            type="text"
                            name="first_name"
                            style={inputStyle}
                            placeholder="First Name..."
                            value={this.state.first_name}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="last_name"
                            style={inputStyle}
                            placeholder="Last Name..."
                            value={this.state.last_name}
                            onChange={this.onChange}
                        />
                        <input
                            type="email"
                            name="email"
                            style={inputStyle}
                            placeholder="Email..."
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="typeIds"
                            style={inputStyle}
                            placeholder="Type Ids..."
                            value={this.state.typeIds}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="skillsId"
                            style={inputStyle}
                            placeholder="Skills Id..."
                            value={this.state.skillsId}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="hour_rate"
                            style={inputStyle}
                            placeholder="Hour rate..."
                            value={this.state.hour_rate}
                            onChange={this.onChange}
                        />
                        <input
                            type="number"
                            name="daily_capacity"
                            style={inputStyle}
                            placeholder="Daily capacity..."
                            value={this.state.daily_capacity}
                            onChange={this.onChange}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            style={submitStyle}
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
    technicianEdit: PropTypes.object,
}

const inputStyle = {
    padding: "10px",
    width: "50%",
    margin: "0.5% 25%",
    borderRadius: "5px",
};
const submitStyle = {
    background: "#232f3e",
    color: "#fff",
    padding: "10px",
    width: "25%",
    margin: "0.5% 37.5%",
    borderRadius: "5px",
}
const AddTecStyle = {
    padding: '1%',
    textAlign: 'center',
}
export default AddTechnician