import React, { Component } from 'react';
import Technicianitem from './TechnicianItem';
import PropTypes from 'prop-types';

class TechniciansList extends Component {
  render() {
    return (
      <div>
          <h3 style={ActTecStyle}>Actual Technicians</h3>
          {this.props.technicians.map ((technician, index) => (
                <Technicianitem 
                  key={technician.id} 
                  technician={technician} 
                  delTechnician={this.props.delTechnician}
                  editTechnician={this.props.editTechnician}
                />
          ))}
      </div>
    );
  }
}

// Prop types
TechniciansList.propTypes = {
    technicians: PropTypes.array.isRequired,
    delTechnician: PropTypes.func.isRequired,
    editTechnician: PropTypes.func.isRequired,
}

const ActTecStyle = {
  padding: '1%',
  textAlign: 'center',
  borderBottom:'2px solid #232f3e',
}
export default TechniciansList;
