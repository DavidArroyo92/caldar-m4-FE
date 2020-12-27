import React, { Component } from 'react';
import AddBuilding from './AddBuilding';
import BuildingsList from './BuildingsList';
import { v4 as uuidv4 } from 'uuid';
import styles from "../../layout/main/main.module.css";


//Set Building Object
class Buildings extends Component {
  state = {
    buildings: [],
    buildingEdit: null,
    showForm: false,
  };


//Get Data from JSON.Files
componentDidMount(){
  const getBuilding = require("../../data/buildingData.json");
  this.setState({buildings: getBuilding});
}

// Show form
handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      buildingEdit: null,
    });
    window.scrollTo(0, 0);
  };

// Edit Building
editBuilding = (building) => {
  this.setState({
    buildingEdit: building,
    showForm: true,
  });
  window.scrollTo(0, 0);
};

// Update Customer
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
    showForm: false,
  });
};

//Delete building

delBuilding = (id) =>{
  this.setState({ 
      buildings: [
          ...this.state.buildings.filter((building) => building.id !==id),
            ],
        showForm: false,
    });
};

//Add Building

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
      buildings: [...this.state.buildings, newBuilding],
    showForm: false,
    });
};

render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddBuilding
            AddBuilding={this.AddBuilding}
            updateBuilding={this.updateBuilding}
            buildingEdit={this.state.buildingEdit}
            handleShowForm={this.handleShowForm}
          />
        ) : (
          <BuildingsList
            buildings={this.state.buildings}
            delBuilding={this.delBuilding}
            editBuilding={this.editBuilding}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}  

export default Buildings;