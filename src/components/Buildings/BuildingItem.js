import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css'
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
                <table className={styles.tableContain}border='1'>
                    <thread>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>ADRESS</th>
                        </tr>
                    </thread>
                
               <p>
                   <tr>
                    <th>{boilerId}</th>
                    <th>{businessName}</th>
                    <th>{email} </th>
                    <th>{phone} </th>
                    <th>{adress}</th>
                   <button onClick={this.props.delBuilding.bind(this, id)} 
                   style={btnStyle}>x</button>
                   <button onClick={this.props.editBuilding.bind(this, this.props.building)}
                   style={btnStyleEdit}>Edit</button>
                   </tr>
               </p>
               </table>
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
