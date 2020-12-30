import React, {Component} from 'react';
import BuildingItem from './BuildingItem';
import styles from "../../layout/main/main.module.css";
import PropTypes from 'prop-types';

class BuildingsList extends Component{


  render(){
    return (
      <div>
          <h1 className={styles.title}>
            Buildings{" "}
            <input
            type="button"
            value="+"
            className={styles.btnStyleNew}
            onClick={() =>this.props.handleShowForm()}
            />
          </h1>
          <table className={styles.table}>
              <tr>
                <th>Id</th>
                <th>Business Name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
          <tbody>
        {this.props.buildings.map((building) => (
          <BuildingItem
            key={building.id}
            building={building}
            delBuilding={this.props.delBuilding}
            editBuilding={this.props.editBuilding}
          />
        ))}
        </tbody>
        </table>
      </div>
    );
  }
}

//proptypes
BuildingsList.propTypes = {
  buildings: PropTypes.array.isRequired,
  editBuilding: PropTypes.func.isRequired,
  delBuilding: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default BuildingsList;
