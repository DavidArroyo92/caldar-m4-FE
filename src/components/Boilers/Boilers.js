import React, { Component } from "react";
import BoilersList from "./BoilersList";
import AddBoiler from "./AddBoiler";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import {
  getBoilers as getBoilersActions,
  delBoiler as delBoilerActions,
  addBoiler as addBoilerActions,
  editBoiler as updateBoilerActions,
} from "../../redux/actions/boilersActions";

class Boilers extends Component {
  state = {
    boilerEdit: null,
    showForm: false,
  };

  componentDidMount() {
    this.props.getBoilers();
  }

  // Show form
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      boilerEdit: null,
    });
    window.scrollTo(0, 0);
  };

  // Edit Boiler
  editBoiler = (boiler) => {
    this.setState({
      boilerEdit: boiler,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className={styles.info}>
        {this.state.showForm ? (
          <AddBoiler
            addBoiler={this.props.addBoiler}
            updateBoiler={this.props.updateBoiler}
            boilerEdit={this.state.boilerEdit}
            handleShowForm={this.handleShowForm}
          />
        ) : (
          <BoilersList
            boilers={this.props.boilers}
            delBoiler={this.props.delBoiler}
            editBoiler={this.editBoiler}
            handleShowForm={this.handleShowForm}
            showForm={this.state.showForm}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBoilers: () => dispatch(getBoilersActions()),
  delBoiler: (_id) => dispatch(delBoilerActions(_id)),
  addBoiler: (typeId, maintainceRate, hourMaintainceCost, hourEventualCost) =>
    dispatch(
      addBoilerActions(
        typeId,
        maintainceRate,
        hourMaintainceCost,
        hourEventualCost
      )
    ),
  updateBoiler: (
    _id,
    typeId,
    maintainceRate,
    hourMaintainceCost,
    hourEventualCost
  ) =>
    dispatch(
      updateBoilerActions(
        _id,
        typeId,
        maintainceRate,
        hourMaintainceCost,
        hourEventualCost
      )
    ),
});

const mapStateToProps = (state) => ({
  boilers: state.boilers.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Boilers);
