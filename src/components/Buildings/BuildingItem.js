import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css';
import modalTypes from '../../redux/types/types-modals';

export class BuildingItem extends Component {

    //ShowDel Modal
  showDelModal = () =>{
    this.props.showModal(modalTypes.DEL_BUILDING);
  };

    render() {
        const
            {
                _id,
                boilersId,
                businessName,
                email,
                phone,
                adress,
            } = this.props.building;
        return (
            <tr className={styles.table}>
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
                                title="Edit"
                                onClick={this.props.editBuilding.bind(this, this.props.building)}
                                className={styles.btnStyle}
                            >
                                <i className="far fa-edit"></i>
                            </button>
                            <button
                                title="Delete"
                                className={styles.btnStyle}
                                onClick={this.props.showDelModal()}
                            >
                                <i className="far fa-trash-alt"></i>
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
    editBuilding: PropTypes.func.isRequired,
    showDelModal: PropTypes.func.isRequired,

  };

export default BuildingItem;
