import React, { Component} from 'react';
import BuildingsList from './BuildingsList';
import AddBuilding from './AddBuilding';
import styles from "../../layout/main/main.module.css";
import { connect} from 'react-redux';
import {
  getBuildings as getBuildingActions,
  delBuilding as delBuildingActions, 
      } from '../../redux/actions/buildingsActions';
import {showModal as showModalAction} from '../../redux/actions/modalActions'
import modalTypes from '../../redux/types/types-modals';


//Set Building Object
class Buildings extends Component {


  state = {
    buildingEdit: null,
    showForm: false,
  };


  //Get data from API
  componentDidMount() {
    this.props.getBuildings();
  }

  // Edit Building
  editBuilding = (building) => {
    this.setState({
      buildingEdit: building,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  //Showadd Modal
  showAddModal = () =>{
    this.props.showModal(modalTypes.ADD_BUILDING);
  };


  render() { 
      return (
        <div className={styles.info}>
         {this.state.showForm? (
            <AddBuilding  
              buildingEdit={this.state.buildingEdit}
            />
         ):(
            <BuildingsList
              buildings={this.props.buildings}
              delBuilding={this.props.delBuilding}
              editBuilding={this.editBuilding}
              showAddModal={this.showAddModal}
              showDelModal={this.showDelModal}
            />
         )
         }
        </div>
        
      );
    }
}  

  const mapDispatchToProps = (dispatch) =>({
      showModal: (modalType) =>dispatch(showModalAction(modalType)),
      getBuildings: () => dispatch(getBuildingActions()),
      delBuilding:(_id) => dispatch(delBuildingActions(_id))
    });
  
  const mapStateToProps = (state) =>({
    buildings: state.buildings.list,
  });



export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
