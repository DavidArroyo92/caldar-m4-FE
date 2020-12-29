import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

class AddBoilerType extends Component {
    state = {
      _id: "",
      skillsId: "",
      type: "",
      stock: "",
      description: "",
    };

    componentDidMount() {
      if (this.props.boilerTypeEdit) {
        this.handleEdit(this.props.boilerTypeEdit);
      }
    }

    handleCleanForm = () => {
      this.setState({
        _id: "",
        skillsId: "",
        type: "",
        stock: "",
        description: "",
      });
      this.props.handleShowForm();
    };

    // componentDidUpdate(prevProps, prevState) {
    //   if (this.props.boilerTypeEdit !== prevProps.boilerTypeEdit) {
    //     this.handleEdit(this.props.boilerTypeEdit);
    //   }
    // }
  
    handleEdit = (boilerTypeEdit) => {
      this.setState({
        _id: boilerTypeEdit._id,
        skillsId: boilerTypeEdit.skillsId,
        type: boilerTypeEdit.type,
        stock: boilerTypeEdit.stock,
        description: boilerTypeEdit.description,
      });
    };
  
    onSubmit = (e) => {
      e.preventDefault();
      if (this.state._id){
        this.props.updateBoilerType(
          this.state._id,
          this.state.skillsId,
          this.state.type,
          this.state.stock,
          this.state.description
        );
      }else {
        this.props.addBoilerType(
          this.state.skillsId,
          this.state.type,
          this.state.stock,
          this.state.description
        );
      }
      this.handleCleanForm();
    };
  
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
      return (
        <div>
          <h3>{this.state._id ? "Edit boiler type" : "Add new boiler type"}</h3>
          <form onSubmit={this.onSubmit}>
            <input type="hidden" name="_id" value={this.state._id} />
            <input
              itemType="text"
              name="skillsId"
              className={styles.input}
              placeholder="Add Skills Id"
              value={this.state.skillsId}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="type"
              className={styles.input}
              placeholder="Add Type"
              value={this.state.type}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="stock"
              className={styles.input}
              placeholder="Add Stock"
              value={this.state.stock}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="description"
              className={styles.input}
              placeholder="Add Description"
              value={this.state.description}
              onChange={this.onChange}
            />
            {this.state._id ?
            <input
              type="submit"
              value="Save"
              // className="btn"
              className={styles.input}
            />
            :
            <input
              type="submit"
              value="Add"
              className="btn"
              className={styles.input}
            />}
            <input
              type="button"
              value="Cancel"
              className={styles.input}
              onClick={this.handleCleanForm}
            />
          </form>
        </div>
      );
    }
  }
  
  // PropTypes
  AddBoilerType.propTypes = {
    addBoilerType: PropTypes.func.isRequired,
    updateBoilerType: PropTypes.func.isRequired,
    handleShowForm: PropTypes.func.isRequired,
    boilerTypeEdit: PropTypes.object,
  };
  
  // const inputStyle = {
  //   padding: "10px",
  //   width: "20%",
  //   margin: "5px",
  //   borderRadius: "5px",
  // };
  
  export default AddBoilerType;