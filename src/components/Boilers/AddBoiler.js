import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddBoiler extends Component {
  state = {
    id: "",
    typeId: "",
    maintainceRate: "",
    hourMaintainceCost: "",
    hourEventualCost: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.boilerEdit !== prevProps.boilerEdit) {
      this.handleEdit(this.props.boilerEdit);
    }
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
            style={inputStyle}
            placeholder="Type boiler..."
            value={this.state.typeId}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="maintainceRate"
            style={inputStyle}
            placeholder="Maintaince rate ..."
            value={this.state.maintainceRate}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="hourMaintainceCost"
            style={inputStyle}
            placeholder="Hour maintaince cost ..."
            value={this.state.hourMaintainceCost}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="hourEventualCost"
            style={inputStyle}
            placeholder="Hour maintaince cost ..."
            value={this.state.hourEventualCost}
            onChange={this.onChange}
          />

          <input type="submit" value="Submit" style={inputStyle} />
        </form>
      </div>
    );
  }
}

// PropTypes
AddBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
  updateBoiler: PropTypes.func.isRequired,
  boilerEdit: PropTypes.object,
};

const inputStyle = {
  padding: "10px",
  width: "50%",
  margin: "5px",
  borderRadius: "5px",
};

export default AddBoiler;
