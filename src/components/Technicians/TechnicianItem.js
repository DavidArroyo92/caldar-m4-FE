import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

export class Technicianitem extends Component {

    render() {
        const { id, first_name, last_name, email, typeIds, skillsId, hour_rate, daily_capacity} = this.props.technician;
        return (
            <tr>
                <td>{id   }  </td>
                <td>{first_name   }  </td>
                <td>{last_name}</td>
                <td>{email}</td>
                <td>{typeIds}</td>
                <td>{skillsId}</td>
                <td>{hour_rate}</td>
                <td>{daily_capacity}</td>
                <td>
                    <button onClick={this.props.delTechnician.bind(this, id)} className={styles.btnStyle}>x</button>
                    <button onClick={this.props.editTechnician.bind(this, this.props.technician)} className={styles.btnStyle}>Edit</button>
                </td>
            </tr>
        )
    }
}

// Prop types
Technicianitem.propTypes = {
    technician: PropTypes.object.isRequired,
    delTechnician: PropTypes.func.isRequired,
    editTechnician: PropTypes.func.isRequired,
}

export default Technicianitem
