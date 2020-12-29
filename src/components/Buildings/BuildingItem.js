import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css';

export class BuildingItem extends Component {

    render() {
        const  
            {
                _id, 
                boilersId,
                businessName, 
                email, 
                phone, 
                adress
            } = this.props.building;
        return (
                   <tr>
                       <td>
                            {_id}
                        </td>
                        <td>
                            {boilersId}
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
                                onClick={this.props.delBuilding.bind(this, _id)} 
                                className={styles.btnStyle}>
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
