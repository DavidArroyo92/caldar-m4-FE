import React, { Component } from "react";
import PropTypes from "prop-types";

export class BoilerItem extends Component {
  getStyle = () => {
    return {
      background: "#f5f5f5",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const {
      id,
      maintainceRate,
      typeId,
      hourMaintainceCost,
      hourEventualCost,
    } = this.props.boiler;
    return (
      <div style={this.getStyle()}>
        <p>
          Nro {id} - Type {typeId} - Maintaince {maintainceRate} - Maintaince
          Cost {hourMaintainceCost} - Eventual Cost {hourEventualCost}
          <button
            onClick={this.props.delBoiler.bind(this, id)}
            style={btnStyle}
          >
            delete
          </button>
          <button
            onClick={this.props.editBoiler.bind(this, this.props.boiler)}
            style={btnStyle}
          >
            edit
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
BoilerItem.propTypes = {
  boiler: PropTypes.object.isRequired,
  delBoiler: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#fff",
  color: "#000",
  border: "none",
  padding: "5px 9px",
  borderRadius: "5px",
  cursor: "pointer",
  float: "right",
};

export default BoilerItem;
