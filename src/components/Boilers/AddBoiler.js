import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class AddBoiler extends Component {
  state = {
    _id: "",
    typeId: "",
    maintainceRate: "",
    hourMaintainceCost: "",
    hourEventualCost: "",
};

  componentDidMount() {
    if (this.props.boilerEdit) {
      this.handleEdit(this.props.boilerEdit);
    }
  }

  handleCleanForm = () => {
    this.setState({
      _id: "",
      typeId: "",
      maintainceRate: "",
      hourMaintainceCost: "",
      hourEventualCost: "",
    });
    this.props.handleShowForm();
  };

  handleEdit = (boilerEdit) => {
    this.setState({
      _id: boilerEdit._id,
      typeId: boilerEdit.typeId,
      maintainceRate: boilerEdit.maintainceRate,
      hourMaintainceCost: boilerEdit.hourMaintainceCost,
      hourEventualCost: boilerEdit.hourEventualCost,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state._id) {
      this.props.updateBoiler(
        this.state._id,
        this.state.typeId,
        this.state.maintainceRate,
        this.state.hourMaintainceCost,
        this.state.hourEventualCost
      );
    } else {
      this.props.addBoiler(
        this.state.typeId,
        this.state.maintainceRate,
        this.state.hourMaintainceCost,
        this.state.hourEventualCost
      );
    }
    this.handleCleanForm();
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h1>{this.state._id ? "Edit boiler" : "Add new boiler"}</h1>
        <form onSubmit={this.onSubmit}>
        <input type="hidden" name="_id" value={this.state._id} />
          <input
            type="text"
            name="typeId"
            className={styles.input}
            placeholder="Type boiler..."
            value={this.state.typeId}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="maintainceRate"
            className={styles.input}
            placeholder="Maintaince rate ..."
            value={this.state.maintainceRate}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="hourMaintainceCost"
            className={styles.input}
            placeholder="Hour maintaince cost ..."
            value={this.state.hourMaintainceCost}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="hourEventualCost"
            className={styles.input}
            placeholder="Hour maintaince cost ..."
            value={this.state.hourEventualCost}
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
AddBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
  updateBoiler: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  boilerEdit: PropTypes.object,
};

export default AddBoiler;