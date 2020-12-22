import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import BoilerTypeList from "./BoilerTypeList";
import AddBoilerType from "./AddBoilerType";
import { v4 as uuidv4 } from "uuid";
import styles from '../../layout/main/main.module.css';

class BoilerType extends Component {
  state = {
    boilerTypeValue: [],
    boilerTypeEdit: null,
  }

  componentDidMount() {
    const data = require('../../data/boilerType.json');
    this.setState({ boilerTypeValue: data });
  }

    //edit boiler type
    editBoilerType = (bt) => {
      this.setState({
        boilerTypeEdit: bt,
      });
      window.scrollTo(0, 0);
    };
  
    //update boiler type
    updateBoilerType = (id, skillsId, type, stock, description) => {
      this.setState({
        boilerTypeValue: this.state.boilerTypeValue.map((boilerType) => {
          if (boilerType.id === id) {
            boilerType.skillsId = skillsId;
            boilerType.type = type;
            boilerType.stock = stock;
            boilerType.description = description;
          }
          return boilerType;
        }),
      });
    };

  // Add boilerType
  addBoilerType = (id, skillsId, type, stock, description) => {
    const newBoilerType = {
      id: uuidv4(),
      skillsId,
      type,
      stock,
      description
    };

    this.setState({ boilerTypeValue: [...this.state.boilerTypeValue, newBoilerType] });
  };

  deleteBoilerType = (id) => {
    this.setState({ boilerTypeValue: [...this.state.boilerTypeValue.filter(boilerType => boilerType.id!==id)]})
  };




  render() {
    return (
      <Router>
        <div className={styles.info}>
          <React.Fragment>
            <AddBoilerType 
              addBoilerType={this.addBoilerType}
              updateBoilerType={this.updateBoilerType}
              boilerTypeEdit={this.state.boilerTypeEdit}
            />
            <BoilerTypeList 
              boilerTypeValue={this.state.boilerTypeValue} 
              deleteBoilerType={this.deleteBoilerType}
              editBoilerType={this.editBoilerType}
            />
          </React.Fragment>
        </div>
      </Router> 
    );
  }
}

export default BoilerType;
