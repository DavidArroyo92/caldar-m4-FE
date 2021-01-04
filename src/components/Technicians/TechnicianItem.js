import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

export class Technicianitem extends Component {

    render() {
        const { _id, firstName, lastName, email, typeIds, skillsId, hour_rate, daily_capacity} = this.props.technician;
        return (
            <tr className={styles.table}>
                <td>{_id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{typeIds}</td>
                <td>{skillsId}</td>
                <td>{hour_rate}</td>
                <td>{daily_capacity}</td>
                <button
                        title="Edit"
                        onClick={this.props.editTechnician.bind(this, this.props.technician)}
                        className={styles.btnStyle}
                    >
                        <i className="far fa-edit"></i>
                    </button>
                    <button
                        title="Delete"
                        className={styles.btnStyle}
                        onClick={this.props.delTechnician.bind(this, _id)}
                    >
                        <i className="far fa-trash-alt"></i>
                    </button>
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
