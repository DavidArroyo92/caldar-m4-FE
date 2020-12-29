import React, { Component } from "react";
import BoilerTypeList from "./BoilerTypeList";
import AddBoilerType from "./AddBoilerType";
import styles from '../../layout/main/main.module.css';
import { connect } from "react-redux";
import {
  getBoilerTypes as getBoilerTypesActions,
  deleteBoilerType as deleteBoilerTypeActions,
  addBoilerType as addBoilerTypeActions,
  editBoilerType as updateBoilerTypeActions,
} from "../../redux/actions/boilerTypesActions"; 

class BoilerType extends Component {
  state = {
    // boilerTypeValue: [],
    boilerTypeEdit: null,
    showForm: false,
  }

  componentDidMount() {
    // const data = require('../../data/boilerType.json');
    // this.setState({ boilerTypeValue: data });
    this.props.getBoilerTypes();
  }

  // Show form
    handleShowForm = () => {
      this.setState({
        showForm: !this.state.showForm,
        boilerTypeEdit: null,
      });
      window.scrollTo(0, 0);
    };

    //edit boiler type
    editBoilerType = (bt) => {
      this.setState({
        boilerTypeEdit: bt,
        showForm: true,
      });
      window.scrollTo(0, 0);
    };
  
  //   //update boiler type
  //   updateBoilerType = (id, skillsId, type, stock, description) => {
  //     this.setState({
  //       boilerTypeValue: this.state.boilerTypeValue.map((boilerType) => {
  //         if (boilerType.id === id) {
  //           boilerType.skillsId = skillsId;
  //           boilerType.type = type;
  //           boilerType.stock = stock;
  //           boilerType.description = description;
  //         }
  //         return boilerType;
  //       }),
  //       showForm: false,
  //     });
  //   };

  // // Add boilerType
  // addBoilerType = (id, skillsId, type, stock, description) => {
  //   const newBoilerType = {
  //     id: uuidv4(),
  //     skillsId,
  //     type,
  //     stock,
  //     description
  //   };

  //   this.setState({ boilerTypeValue: [...this.state.boilerTypeValue, newBoilerType],
  //     showForm: false,
  //   });
  // };

  // //delete boilerType
  // deleteBoilerType = (id) => {
  //   this.setState({ boilerTypeValue: [...this.state.boilerTypeValue.filter(boilerType => boilerType.id!==id)],
  //     showForm: false,
  //   });
  // };




  render() {
    return (
      
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddBoilerType 
            addBoilerType={this.props.addBoilerType}
            updateBoilerType={this.props.updateBoilerType}
            boilerTypeEdit={this.state.boilerTypeEdit}
            handleShowForm={this.handleShowForm}
          />
        ) : (
          <BoilerTypeList 
            boilerTypeValue={this.props.boilerTypeValue} 
            deleteBoilerType={this.props.deleteBoilerType}
            editBoilerType={this.editBoilerType}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBoilerTypes: () => dispatch(getBoilerTypesActions()),
  deleteBoilerType: (_id) => dispatch(deleteBoilerTypeActions(_id)),
  addBoilerType: (skillsId, type, stock, description) =>
    dispatch(
      addBoilerTypeActions(skillsId, type, stock, description)
    ),
  updateBoilerType: (_id, skillsId, type, stock, description) =>
    dispatch(
      updateBoilerTypeActions(
        _id, skillsId, type, stock, description
      )
    ),
});

const mapStateToProps = (state) => ({
  BoilerTypes: state.BoilerTypes.list,
});


export default connect(mapStateToProps, mapDispatchToProps)(BoilerType);
