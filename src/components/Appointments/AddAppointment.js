import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export default class AddAppointment extends Component {
    state = {
        id:"",
        buildingId:"",
        boilerId:"",
        start_timestamp:"",
        end_timestamp:""
    }

    componentDidMount() {
        if (this.props.appointmentEdit) {
          this.handleEdit(this.props.appointmentEdit);
        }
      }
    handleCleanForm = () => {
        this.setState({
            id:"",
            buildingId:"",
            boilerId:"",
            start_timestamp:"",
            end_timestamp:""
        });
        this.props.handleShowForm();
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
                            className={styles.input}
                            placeholder="Building Id..."
                            value={this.state.buildingId}
                            onChange={this.onChange}
                        />
                        <input
                            type="text"
                            name="boilerId"
                            className={styles.input}
                            placeholder="Boiler Id..."
                            value={this.state.boilerId}
                            onChange={this.onChange}
                        />
                        <input
                            type="date"
                            name="start_timestamp"
                            className={styles.input}
                            value={this.state.start_timestamp}
                            onChange={this.onChange}
                        />
                        <input
                            type="date"
                            name="end_timestamp"
                            className={styles.input}
                            value={this.state.end_timestamp}
                            onChange={this.onChange}
                        />
                         <input type="submit" value="Submit"
                         className={styles.input}
                         />
                        <input
                        type="button"
                        value="Cancel"
                        className={styles.input}
                        onClick={this.handleCleanForm}
                        />
                </form>
            </div >
        )
    }
}

//PropTypes
AddAppointment.propTypes = {
    addAppointment:PropTypes.func.isRequired,
    appointmentEdit: PropTypes.object,
    handleShowForm: PropTypes.func.isRequired,
    updateAppointment: PropTypes.func.isRequired,
}