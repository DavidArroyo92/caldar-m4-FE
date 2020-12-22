import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Technicianitem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
        
    }

    render() {
        const { id, first_name, last_name, email, typeIds, skillsId, hour_rate, daily_capacity} = this.props.technician;
        return (
            <div style={this.getStyle()}>
                <p>
                    {id} - First Name: { first_name } - Last Name: { last_name } - Email: { email } - Type Ids { typeIds } - Skills Id {skillsId} - Hour Rate: {hour_rate } - Daily Capacity: { daily_capacity }
                    <button onClick={this.props.delTechnician.bind(this, id)} style={btnStyle}>x</button>
                    <button onClick={this.props.editTechnician.bind(this, this.props.technician)} style={btnStyle}>Edit</button>
                </p>
            </div>
        )
    }
}

// Prop types
Technicianitem.propTypes = {
    technician: PropTypes.object.isRequired,
    delTechnician: PropTypes.func.isRequired,
    editTechnician: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#fc6225',
    color: '#fff',
    border: 'none',
    margin: '5px',
    padding: '5px 10px',
    borderRadius: '5%',
    cursor: 'pointer',
    float: 'right'
}
export default Technicianitem
