import React, {Component} from 'react';
import BuildingItem from './BuildingItem';
import styles from "../../layout/main/main.module.css";
import PropTypes from 'prop-types';


class Buildings extends Component{


  render(){
    return (
      <div>
          <h1>Buildings{" "}
            <button
              title="Add"
              className={styles.btnStyle}
              onClick={() => this.props.showAddModal()}
            >
              <i className="fas fa-plus"></i>
            </button>
          </h1>
          <table className={styles.table}>
          <thead>
              <tr className={styles.listHead}>
                <th>Id</th>
                <th>BoilersId</th>
                <th>Business Name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Options</th>
              </tr>
            </thead>
          <tbody>
        {this.props.buildings?.map((building, index) => (
          <BuildingItem
            key={index}
            building={building}
          />
        )
      )
    }
        </tbody>
       </table>

       <button
            title="See report"
            className={styles.btnStyle}
            onClick={() => this.props.handleShowGraph()}
          >
            <i class="fas fa-chart-pie"></i>
          </button>
      </div>
    );
  }
}


//proptypes
Buildings.propTypes = {
  buildings: PropTypes.array.isRequired,
  editBuilding: PropTypes.func.isRequired,
  showAddModal: PropTypes.func.isRequired,
};

export default Buildings;