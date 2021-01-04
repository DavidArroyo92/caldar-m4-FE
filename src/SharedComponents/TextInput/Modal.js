import React, { useState} from 'react';
import MaterialModal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import {connect } from 'react-redux';
import modalTypes from '../../redux/types/types-modals';
import { showModal as showModalAction } from '../../redux/actions/modalActions';

//Import Components
import AddBuilding from '../../components/Buildings/AddBuilding';

const getModalStyle = () =>{
    const top = 50;
    const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '80%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Modal = ({
    show,
    modalType,
    meta,
    closeModal
}) => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);

    let modalComponent;
    switch (modalType) {
        case modalTypes.ADD_BUILDING:
            modalComponent = <AddBuilding/>
            break;
        default:
            modalComponent = null;
            break;
    }
 

    return (
        <MaterialModal
        open={show}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div style={modalStyle} className={classes.paper}>
            {modalComponent}
        </div>
        </MaterialModal>
    )
};

const mapStateToProps = state =>{
    return {
        show: state.modal.show,
        modalType: state.modal.modalType,
        meta: state.modal.meta
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        showModal: () =>dispatch(showModalAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);  