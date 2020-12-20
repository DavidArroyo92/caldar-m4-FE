import React, { Component } from 'react';
import BuildingsList from './BuildingsList';
import AddBuilding from './AddBuilding';
import styles from '../../layout/main/main.module.css'
import { v4 as uuidv4 } from 'uuid';


//Set Building Object
class Buildings extends Component {
  state = {
    buildings: [],
    buildingEdit: null,

  }

//Get Data from JSON.Files
componentDidMount(){
  const getBuilding = require('../../data/buildingData.json');
  this.setState({buildings: getBuilding});
}
// Edit Building
editBuilding = (building) => {
  this.setState({
    buildingEdit: building,
  });
  window.scrollTo(0, 0);
};

// Update Building
updateBuilding = (
  id,
  boilerId,
  businessName,
  email,
  phone,
  adress
) => {
  
  this.setState({
    buildings: this.state.buildings.map((building) => {
      if (building.id === id) {
        building.boilerId = boilerId;
        building.email = email;
        building.businessName = businessName;
        building.adress = adress;
        building.phone = phone;
      }
      return building;
    }),
  });
};

//Delete building

delBuilding = (id) =>{
  this.setState({ 
      buildings: [
          ...this.state.buildings.filter(building => building.id!==id),
        ],
    });
};

//Add building

AddBuilding = (boilerId, businessName,email,phone,adress) =>{
  const newBuilding ={
    id: uuidv4(),
    boilerId,
    businessName,
    email,
    phone,
    adress
  };
  this.setState({ 
      buildings: [
          ...this.state.buildings, newBuilding]
        });
};

  render() {
    return (
        <div className={styles.info}>

                <AddBuilding 
                  addBuilding ={this.AddBuilding} 
                  updateBuilding={this.updateBuilding}
                  buildingEdit={this.state.buildingEdit}
                />
                <BuildingsList
                  buildings={this.state.buildings}  
                  delBuilding={this.delBuilding}
                  editBuilding={this.editBuilding}
                />
        </div>
    );
  }
}

export default Buildings;