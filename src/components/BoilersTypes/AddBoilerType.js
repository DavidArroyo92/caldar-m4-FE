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
          <h1>{this.state._id ? "Edit boiler type" : "Add new boiler type"}</h1>
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
            <div  className={styles.formsBtn}>
              {this.state._id ?
                <button
                    title="Save"
                    className={styles.btnStyle}
                >
                    <i className="far fa-save"></i>
                </button>
                :
                <button
                    title="Add"
                    className={styles.btnStyle}
                >
                        <i className="fas fa-plus"></i>
                </button>
              }
              <div>
                <button
                    title="Cancel"
                    className={styles.btnStyle}
                    onClick={this.handleCleanForm}
                >
                        <i className="fas fa-ban"></i>
                </button>
              </div>
            </div>
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
  export default AddBoilerType;