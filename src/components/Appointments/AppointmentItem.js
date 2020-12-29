import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

class AppointmentItem extends Component {
    render() {
        const {_id,buildingId, boilerId,start_timestamp, end_timestamp } = this.props.appointment;
        return (
            <tr>
                <td>{_id}</td>
                <td>{buildingId}</td>
                <td>{boilerId}</td>
                <td>{start_timestamp}</td>
                <td>{end_timestamp}</td>
                <td>
                    <button
                        onClick={this.props.delAppointment.bind(this, _id)}
                        className={styles.btnStyle}
                    >
                        X
                    </button>
                    <button
                        onClick={this.props.editAppointment.bind(this, this.props.appointment)}
                        className={styles.btnStyle}
                    >
                        Edit
                    </button>
                </td>
            </tr>
        )
    }
}

//PropTypes
AppointmentItem.propTypes = {
    appointment:PropTypes.object.isRequired,
    delAppointment:PropTypes.func.isRequired,
    editAppointment:PropTypes.func.isRequired,
}
export default AppointmentItem;