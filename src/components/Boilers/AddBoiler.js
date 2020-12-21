import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";

export class AddBoiler extends Component {
  state = {
    id: "",
    typeId: "",
    maintainceRate: "",
    hourMaintainceCost: "",
    hourEventualCost: "",
  };

  componentDidMount(){
      if (this.props.boilerEdit) {
      this.handleEdit(this.props.boilerEdit);
    }
  }
  handleCleanForm = () => {
    this.setState({
      id: "",
      typeId: "",
      maintainceRate: "",
      hourMaintainceCost: "",
      hourEventualCost: "",
    });
    this.props.handleShowForm();
  }

  handleEdit = (boilerEdit) => {
    this.setState({
      id: boilerEdit.id,
      typeId: boilerEdit.typeId,
      maintainceRate: boilerEdit.maintainceRate,
      hourMaintainceCost: boilerEdit.hourMaintainceCost,
      hourEventualCost: boilerEdit.hourEventualCost,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateBoiler(
        this.state.id,
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
    this.setState({
      id: "",
      typeId: "",
      maintainceRate: "",
      hourMaintainceCost: "",
      hourEventualCost: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h3>{this.state.id ? "Edit boiler" : "Add new boiler"}</h3>
        <form onSubmit={this.onSubmit}>
          <input type="hidden" name="id" value={this.state.id} />
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

          <input type="submit" value="Submit" className={styles.input} />
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
AddBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
  updateBoiler: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  boilerEdit: PropTypes.object,
};

export default AddBoiler;
