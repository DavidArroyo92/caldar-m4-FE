import React, { Component} from 'react';
import BuildingsList from './BuildingsList';
import AddBuilding from './AddBuilding';
import styles from "../../layout/main/main.module.css";
import { connect} from 'react-redux';
import Chart from './Chart'
import {
  getBuildings as getBuildingActions,
  delBuilding as delBuildingActions, 
      } from '../../redux/actions/buildingsActions';
import {showModal as showModalAction} from '../../redux/actions/modalActions'
import modalTypes from '../../redux/types/types-modals';


//Set Building Object
class Buildings extends Component {


  state = {
    buildingEdit: null,
    showForm: false,
    showGraph: false,
    chartData:{},
  };

  componentWillMount(){
    // this.getchartData(); // this should be this.getChartData();
     this.getChartData();
   }

   getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Actives', 'No - Actives'],
        datasets:[
          {
            label:'Actives',
            data:[
              11,
              0
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)'
            ]
          }
        ]
      }
    });
  }


  //Get data from API
  componentDidMount() {
    this.props.getBuildings();
  }

  // Edit Building
  editBuilding = (building) => {
    this.setState({
      buildingEdit: building,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  //Showadd Modal
  showAddModal = () =>{
    this.props.showModal(modalTypes.ADD_BUILDING);
  };

  // Show Graph
handleShowGraph = () => {
  this.setState({
    showGraph: !this.state.showGraph,
  });
  window.scrollTo(0, 0);
};


  render() { 
      return (
        <div className={styles.info}>
         {this.state.showForm? (
            <AddBuilding  
              buildingEdit={this.state.buildingEdit}
            />
         ):(
            <BuildingsList
              buildings={this.props.buildings}
              editBuilding={this.editBuilding}
              showAddModal={this.showAddModal}
              showDelModal={this.showDelModal}
              handleShowGraph={this.handleShowGraph}
              showGraph={this.state.showGraph}
            />
         )
         }
         { this.state.showGraph ? (
      <Chart
      handleShowGraph={this.handleShowGraph}
      showGraph={this.state.showGraph}
      chartData={this.state.chartData}
       legendPosition="bottom"
      />
      ) : ('')
        }
        </div>
        
      );
    }
}  

  const mapDispatchToProps = (dispatch) =>({
      showModal: (modalType) =>dispatch(showModalAction(modalType)),
      getBuildings: () => dispatch(getBuildingActions()),
      delBuilding:(_id) => dispatch(delBuildingActions(_id))
    });
  
  const mapStateToProps = (state) =>({
    buildings: state.buildings.list,
  });



export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
