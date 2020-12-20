import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class AddAppointment extends Component {
    state = {
        id:"",
        buildingId:"",
        boilerId:"",
        start_timestamp:"",
        end_timestamp:""
    }

    componentDidUpdate(prevProps) {
        if (this.props.appointmentEdit !== prevProps.appointmentEdit) {
          this.handleEdit(this.props.appointmentEdit);
        }
      }

      handleEdit = (appointmentEdit) => {
        this.setState({
          id: appointmentEdit.id,
          buildingId: appointmentEdit.buildingId,
          boilerId: appointmentEdit.boilerId,
          start_timestamp: appointmentEdit.start_timestamp,
          end_timestamp: appointmentEdit.end_timestamp,
        });
      };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.id) {
            this.props.updateAppointment(
                this.state.id,
                this.state.buildingId,
                this.state.boilerId,
                this.state.start_timestamp,
                this.state.end_timestamp,
            );
        } else {
            this.props.addAppointment(
                this.state.buildingId,
                this.state.boilerId,
                this.state.start_timestamp,
                this.state.end_timestamp,
            );
        }
        this.setState({
            id: "",
            buildingId: "",
            boilerId:"",
            start_timestamp:"",
            end_timestamp:"",
          });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    render() {
        return (
            <div>
                <h3>{this.state.id ? "Edit appointment" : "Add new appointment"}</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" name="id" value={this.state.id} />
                        <input
                            type="text"
                            name="buildingId"
                            style={inputStyle}
                            placeholder="Building Id..."
                            value={this.state.buildingId}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="boilerId"
                            style={inputStyle}
                            placeholder="Boiler Id..."
                            value={this.state.boilerId}
                            onChange={this.onChange}
                        />
                        <input
                            type="date"
                            name="start_timestamp"
                            style={inputStyle}
                            required pattern="\d{4}-\d{2}-\d{2}"
                            value={this.state.start_timestamp}
                            onChange={this.onChange}
                        />
                        <input
                            type="date"
                            name="end_timestamp"
                            style={inputStyle}
                            value={this.state.end_timestamp}
                            onChange={this.onChange}
                        />
                        <div>
                        {this.state.id ?
                        <input
                            type="submit"
                            value="Save"
                            style={inputButton}
                        />
                        :
                        <input
                        type="submit"
                        value="Add"
                        style={inputButton}
                    />}
                    {this.state.id ?
                        <input
                        type="submit"
                        value="Cancel"
                        style={inputButton}
                    />
                        :
                        ""}
                    </div>
                </form>
            </div >
        )
    }
}

//PropTypes
AddAppointment.propTypes = {
    addAppointment:PropTypes.func.isRequired,
    appointmentEdit: PropTypes.object,
    updateAppointment: PropTypes.func.isRequired,
}

const inputStyle = {
    padding: "10px",
    width: "50%",
    margin: "5px",
    borderRadius: "5px",
  };

const inputButton = {
padding: "10px",
width: "10%",
margin: "5px",
borderRadius: "5px",
};



