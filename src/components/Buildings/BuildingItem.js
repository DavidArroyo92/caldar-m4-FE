import React, { Component, useState } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css';
import confirmDialog from "../../components/Buildings/RemoveBuildingMessage";

export class BuildingItem extends Component {

//     ShowDel Modal
//   showDelModal = () =>{
//     this.props.showModal(modalTypes.DEL_BUILDING);
//   };

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

            const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
const onDelete = id => {
    setConfirmDialog({
        ...confirmDialog,
        isOpen: false
    })
}
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
                                onClick= {() => {
                                    setConfirmDialog({
                                        isOpen: true,
                                        title: 'Are you sure to delete this record?',
                                        subTitle: "You can't undo this operation",
                                        onConfirm: () => { onDelete(item.id) }
                                    })
                                }}>
                                <i className="far fa-trash-alt"></i>
                            </button>
                            <ConfirmDialog
                                confirmDialog={confirmDialog}
                                setConfirmDialog={setConfirmDialog}
            />
                        </td>
                   </tr>   
                   
        )

    }
};

//proptypes
BuildingItem.propTypes = {
    building: PropTypes.object.isRequired,
    delBuilding: PropTypes.func.isRequired,
    editBuilding: PropTypes.func.isRequired,
  };

export default BuildingItem;
