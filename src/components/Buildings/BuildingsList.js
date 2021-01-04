import React, {Component} from 'react';
import BuildingItem from './BuildingItem';
import styles from "../../layout/main/main.module.css";
import PropTypes from 'prop-types';


class Buildings extends Component{


  render(){
    return (
      <div>
          <h1 className={styles.title}>
            Buildings{" "}
            <input
              type="button"
              value="+"
              className={styles.btnStyleNew}
              onClick={() =>this.props.showAddModal()}
            />
          </h1>
          <table className={styles.table}>
          <thead>
              <tr>
                <th>Id</th>
                <th>BoilersId</th>
                <th>Business Name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
          <tbody>
        {this.props.buildings?.map((building, index) => (
          <BuildingItem
            key={index}
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
Buildings.propTypes = {
  buildings: PropTypes.array.isRequired,
  editBuilding: PropTypes.func.isRequired,
  delBuilding: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  showAddModal: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default Buildings;
