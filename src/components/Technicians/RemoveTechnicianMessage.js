import React, { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    delTechnicians as delTechniciansAction
} from '../../redux/actions/techniciansActions';
import {
    closeModal as closeModalAction
} from '../../redux/actions/modalActions';
import { Button } from '@material-ui/core';

const RemoveTechnicianMessage = ({
    closeModal,
    delTechnicians,
    technicianId
}) => {
    const onDeleteTechnician = () => {
        delTechnicians(technicianId);
        closeModal();
    }

    return (
        <div>
            Are you sure you want to delete this technician?
            <div>
                <button type='button' btnLabel='Cancel' onClick={() => closeModal()} />
                <button type='button' btnLabel='Confirm' primary onClick={() => onDeleteTechnician()} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
        closeModal: closeModalAction,
        delTechnicians: delTechniciansAction,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(RemoveTechnicianMessage);

