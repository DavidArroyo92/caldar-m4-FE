import React, { Component} from 'react';
import AddBuilding from './AddBuilding';
import BuildingsList from './BuildingsList';
// import { v4 as uuidv4 } from 'uuid';
import styles from "../../layout/main/main.module.css";
import {
    getBuildings as getBuildingActions,
    addBuilding as addBuildingActions,
    delBuilding as delBuildingActions,
    editBuilding as updateBuildingActions 
} from '../../redux/actions/buildingsActions';
import {showModal as showModalAction} 
from '../../redux/actions/modalActions'
import { connect} from 'react-redux';


//Set Building Object
class Buildings extends Component {


  state = {
    // buildings: [],
    buildingEdit: null,
    showModal,
  };


  //Get data from API
  componentDidMount() {
    this.props.getBuildings();
  }

  // Edit Building
  editBuilding = (building) => {
    this.setState({
      buildingEdit: building,
      showModal: true,
    });
    window.scrollTo(0, 0);
  };

  //Show add Modal
  showAddModal = () =>{
    showModal(modalTypes.ADD_BUILDING);
  };

  render() { 
      return (
        <div className={styles.info}>
         
            <AddBuilding
              addBuilding={this.props.addBuilding}
              updateBuilding={this.props.updateBuilding}
              buildingEdit={this.state.buildingEdit}
              handleShowForm={this.handleShowForm}
            />
       
            <BuildingsList
              buildings={this.props.buildings}
              delBuilding={this.props.delBuilding}
              editBuilding={this.editBuilding}
              handleShowForm={this.handleShowForm}
              showForm={this.state.showForm}
            />
          
        </div>
        
      );
    }
}  

  const mapDispatchToProps = (dispatch) =>({
      getBuildings: () => dispatch(getBuildingActions()),
      showModal: () =>dispatch(showModalAction()),
      delBuilding:(_id) => dispatch(delBuildingActions(_id)),
      addBuilding: (boilersId, businessName,email,phone,adress) =>
        dispatch(
          addBuildingActions(boilersId, businessName,email,phone,adress )
        ),
      updateBuilding:(_id, boilersId, businessName,email,phone,adress ) =>
          dispatch(
            updateBuildingActions(
              _id,
                boilersId,
              businessName,
              email,
              phone,
              adress
            )
          ),
    });
  
  const mapStateToProps = state =>{
    return{
      buildings: state.buildings.list,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
