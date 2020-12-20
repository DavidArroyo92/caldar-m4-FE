import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BuildingItem extends Component {

    getStyle = () => {
        return{
            background: '#f5f5f5',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        };
    };
 
    render() {
        const  {id, boilerId, businessName, email, phone, adress
        } = this.props.building;
        return (
            <div style={this.getStyle()} >
                
               <p>
                  BoilerID {boilerId} - Name: {businessName} - Email: {email} - Phone:{phone} - Adress:{adress}
                   <button onClick={this.props.delBuilding.bind(this, id)} 
                   style={btnStyle}>x</button>
                   <button onClick={this.props.editBuilding.bind(this, this.props.building)}
                   style={btnStyleEdit}>Edit</button>
               </p>
            </div>
        )
    }
}

//proptypes
BuildingItem.propTypes = {
    building: PropTypes.object.isRequired,
    delBuilding: PropTypes.func.isRequired,
    editBuilding: PropTypes.func.isRequired,
  }

//Get Styles to Buttons
const btnStyle = {
    background: 'red',
    color: '#fff',
    border:'none',
    padding: '5px 10px',
    borderRadiud: '50%',
    cursor: 'pointer',
    float: 'right'
}

const btnStyleEdit = {
    background: '#00aae4',
    color: '#fff',
    border:'none',
    padding: '5px 10px',
    borderRadiud: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default BuildingItem;
