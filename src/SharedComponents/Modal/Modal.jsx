import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialModal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeModal as closeModalAction } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/types-modals";

// Components
import AppointmentForm from "../../components/Appointments/AppointmentForm";
import RemoveAppointmentMessage from "../../components/Appointments/RemoveAppointmentMessage";
import AddBoiler from "../../components/Boilers/AddBoiler";
import RemoveBoilerMessage from "../../components/Boilers/RemoveBoilerMessage";
import AddBoilerType from "../../components/BoilersTypes/AddBoilerType";
import RemoveBoilerTypeMessage from "../../components/BoilersTypes/RemoveBoilerTypeMessage";
import BuildingForm from "../../components/Buildings/BuildingForm";
import RemoveBuildingMessage from "../../components/Buildings/RemoveBuildingMessage";
import CustomerForm from "../../components/Customers/CustomerForm";
import RemoveCustomerMessage from "../../components/Customers/RemoveCustomerMessage";
import TechnicianForm from "../../components/Technicians/TechnicianForm";
import RemoveTechnicianMessage from "../../components/Technicians/RemoveTechnicianMessage";

function getModalStyle() {
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
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Modal = ({ show, modalType, meta, closeModal }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  let modalComponent;
  switch (modalType) {
    case modalTypes.ADD_APPOINTMENT:
      modalComponent = <AppointmentForm />;
      break;
    case modalTypes.DEL_APPOINTMENT:
      modalComponent = <RemoveAppointmentMessage appointmentId={meta.id} />;
      break;
    case modalTypes.ADD_BOILER:
      modalComponent = <AddBoiler />;
      break;
    case modalTypes.DEL_BOILER:
      modalComponent = <RemoveBoilerMessage boilerId={meta.id} />;
      break;
    case modalTypes.ADD_BOILERTYPE:
      modalComponent = <AddBoilerType />;
      break;
    case modalTypes.DEL_BOILERTYPE:
      modalComponent = <RemoveBoilerTypeMessage boilerTypeId={meta.id} />;
      break;
    case modalTypes.ADD_BUILDING:
      modalComponent = <BuildingForm />;
      break;
    case modalTypes.DEL_BUILDING:
      modalComponent = <RemoveBuildingMessage buildingId={meta.id} />;
      break;
    case modalTypes.ADD_CUSTOMER:
      modalComponent = <CustomerForm />;
      break;
    case modalTypes.DEL_CUSTOMER:
      modalComponent = <RemoveCustomerMessage customerId={meta.id} />;
      break;
    case modalTypes.ADD_TECHNICIAN:
      modalComponent = <TechnicianForm />;
      break;
    case modalTypes.DEL_TECHNICIAN:
      modalComponent = <RemoveTechnicianMessage technicianId={meta.id} />;
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
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    modalType: state.modal.modalType,
    meta: state.modal.meta,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
