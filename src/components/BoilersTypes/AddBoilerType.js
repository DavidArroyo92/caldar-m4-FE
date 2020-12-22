import React, { Component } from "react";
import PropTypes from "prop-types";

class AddBoilerType extends Component {
    state = {
      id: "",
      skillsId: "",
      type: "",
      stock: "",
      description: "",
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.props.boilerTypeEdit !== prevProps.boilerTypeEdit) {
        this.handleEdit(this.props.boilerTypeEdit);
      }
    }
  
    handleEdit = (boilerTypeEdit) => {
      this.setState({
        id: boilerTypeEdit.id,
        skillsId: boilerTypeEdit.skillsId,
        type: boilerTypeEdit.type,
        stock: boilerTypeEdit.stock,
        description: boilerTypeEdit.description,
      });
    };
  
    onSubmit = (e) => {
      e.preventDefault();
      if (this.state.id){
        this.props.updateBoilerType(
          this.state.id,
          this.state.skillsId,
          this.state.type,
          this.state.stock,
          this.state.description
        );
      }else {
        this.props.addBoilerType(
          this.state.id,
          this.state.skillsId,
          this.state.type,
          this.state.stock,
          this.state.description
        );
      }
      this.setState({
        id: "",
        skillsId: "",
        type: "",
        stock: "",
        description:"",
      });
    };
  
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
      return (
        <div>
          <h3>{this.state.id ? "Edit boiler type" : "Add new boiler type"}</h3>
          <form onSubmit={this.onSubmit}>
            <input
              itemType="text"
              name="skillsId"
              style={inputStyle}
              placeholder="Add Skills Id"
              value={this.state.skillsId}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="type"
              style={inputStyle}
              placeholder="Add Type"
              value={this.state.type}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="stock"
              style={inputStyle}
              placeholder="Add Stock"
              value={this.state.stock}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="description"
              style={inputStyle}
              placeholder="Add Description"
              value={this.state.description}
              onChange={this.onChange}
            />
            {this.state.id ?
            <input
              type="submit"
              value="Save"
              className="btn"
              style={inputStyle}
            />
            :
            <input
              type="submit"
              value="Add"
              className="btn"
              style={inputStyle}
            />}
          </form>
        </div>
      );
    }
  }
  
  // PropTypes
  AddBoilerType.propTypes = {
    addBoilerType: PropTypes.func.isRequired,
    updateBoilerType: PropTypes.func.isRequired,
    boilerTypeEdit: PropTypes.object,
  };
  
  const inputStyle = {
    padding: "10px",
    width: "20%",
    margin: "5px",
    borderRadius: "5px",
  };
  
  export default AddBoilerType;