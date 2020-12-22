import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css'
class BuildingItem extends Component {

 
    render() {
        const  {id, boilerId, businessName, email, phone, adress
        } = this.props.building;
        return (
                   <tr>
                        <td>
                            {boilerId}
                        </td>
                        <td>
                            {businessName}
                        </td>
                        <td>
                            {email} 
                        </td>
                        <td>
                            {phone} 
                        </td>
                        <td>
                            {adress}
                        </td>
                        <td>
                            <button 
                                onClick={this.props.delBuilding.bind(this, id)} 
                                className={styles.propsbtnStyle}>
                                    x
                            </button>
                            <button 
                                onClick={this.props.editBuilding.bind(this, this.props.building)}
                                className={styles.btnStyle}>
                                    Edit
                            </button>
                        </td>
                   </tr>
        )
    }
}

//proptypes
BuildingItem.propTypes = {
    building: PropTypes.object.isRequired,
    delBuilding: PropTypes.func.isRequired,
  };

export default BuildingItem;
