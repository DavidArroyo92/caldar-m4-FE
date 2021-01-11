import React, { Component } from "react";
import BoilerTypeList from "./BoilerTypeList";
import Chart from './Chart';
import AddBoilerType from "./AddBoilerType";
import styles from "../../layout/main/main.module.css";
import { connect } from "react-redux";
import {
  getBoilerTypes as getBoilerTypesActions,
} from "../../redux/actions/boilerTypesActions";

import { showModal as showModalActions } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/types-modals.js";

class BoilerTypes extends Component {
  state = {
    boilerTypeEdit: null,
    showForm: false,
    showGraph: false,
    chartData:{},
  };

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
   this.setState({
     chartData:{
       labels: ['Types', 'Stock'],
       datasets:[
         {
           label:'Boiler types',
           data:[
             1,
             7
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

  handleShowGraph = () => {
    this.setState({
      showGraph: !this.state.showGraph,
    });
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    this.props.getBoilerTypes();
  }

  // Edit Boiler Type
  editBoilerType = (boilerType) => {
    this.setState({
      boilerTypeEdit: boilerType,
      showForm: true,
    });
    window.scrollTo(0, 0);
  };

  //Show add Modal
  showAddModal = () => {
    this.props.showModal(modalTypes.ADD_BOILERTYPE);
  };

  render() {
    return (
      <div className={styles.info}>
        {/* {this.state.showForm ? (
          <AddBoilerType boilerTypeEdit={this.state.boilerTypeEdit} /> */}
        {this.state.showGraph? (
            <Chart
            handleShowGraph={this.handleShowGraph}
            showGraph={this.state.showGraph}
            chartData={this.state.chartData}
             legendPosition="bottom"
             boilerTypes={this.props.boilerTypes}

            />
        ) : (
          <BoilerTypeList
            boilerTypes={this.props.boilerTypes}
            editBoilerType={this.editBoilerType}
            showAddModal={this.showAddModal}
            handleShowGraph={this.handleShowGraph}
            showGraph={this.state.showGraph}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalType) => dispatch(showModalActions(modalType)),
  getBoilerTypes: () => dispatch(getBoilerTypesActions()),
});

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypes.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypes);
