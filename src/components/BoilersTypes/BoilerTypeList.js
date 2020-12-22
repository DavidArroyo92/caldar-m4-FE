import React, { Component } from "react";
import PropTypes from "prop-types";
import BoilerTypeItem from "./BoilerTypeItem";

class BoilerTypeList extends Component {
  render() {
    return (
      <div>
        {
          this.props.boilerTypeValue.map((boilerType) => (
            <BoilerTypeItem 
              key={boilerType.id} 
              boilerType={boilerType}
              deleteBoilerType={this.props.deleteBoilerType}
              editBoilerType={this.props.editBoilerType}
            />
            )
          )
        }
      </div>
    )
  }
}

//PropTypes
BoilerTypeList.propTypes = {
  boilerTypeValue: PropTypes.array.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
}


export default BoilerTypeList;

