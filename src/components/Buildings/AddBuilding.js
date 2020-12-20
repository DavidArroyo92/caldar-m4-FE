import React, { Component } from 'react'
import PropTypes from 'prop-types';

 export class AddBuilding extends Component {
     state = {
         id:'',
         boilerId:'',
         businessName:'',
         email:'',
         phone:'',
         adress:'',
     };

     componentDidUpdate(prevProps, prevState) {
        if (this.props.buildingEdit !== prevProps.buildingEdit) {
          this.handleInput(this.props.buildingEdit);
        }
      }
    
      handleInput = (buildingEdit) => {
        this.setState({
        id: buildingEdit.id,
        boilerId: buildingEdit.boilerId,
        businessName: buildingEdit.businessName,
        email: buildingEdit.email,
        phone: buildingEdit.phone,
        adress: buildingEdit.adress,
        });
      };

     onSubmit = (e) => {
         e.preventDefault();
         if (this.state.id) {
            this.props.updateBuilding(
                this.state.id,
                this.state.boilerId,
                this.state.businessName,
                this.state.email,
                this.state.phone,
                this.state.adress
            );
          } else {
         this.props.addBuilding(
            this.state.boilerId,
            this.state.businessName,
            this.state.email,
            this.state.phone,
            this.state.adress
        );
         }
         this.setState({
            id: "",
             boilerId:"",
             businessName:"",
             email:"",
             phone:"",
             adress:""
            });

     }
     onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render(){
        return(
            <div>
                <h3>
                {this.state.id ? "Edit building" : "Add new Building"}
                </h3>
                <form onSubmit ={this.onSubmit} style={{display:'flex'}}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <input
                    type="text"
                    name="boilerId"
                    style={inputStyle}
                    placeholder="Add Boiler ID"
                    value={this.state.boilerId}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="businessName"
                    style={inputStyle}
                    placeholder="Add Business Name"
                    value={this.state.businessName}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="email"
                    style={inputStyle}
                    placeholder="Add e-mail"
                    value={this.state.email}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="adress"
                    style={inputStyle}
                    placeholder="Add adress..."
                    value={this.state.adress}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="phone"
                    style={inputStyle}
                    placeholder="Add phone..."
                    value={this.state.phone}
                    onChange={this.onChange}
                    />

                    <input 
                    type="submit"
                    value= "submit"
                    className="btn"
                    style={inputStyle}
                    />
                </form>
            </div>
        )
    }
}

const inputStyle = {
    padding:"10px",
    width: "50%",
    margin: "5px",
    borderRadius: "5px",
};

//proptypes
AddBuilding.propTypes = {
   addBuilding: PropTypes.func.isRequired,
   updateBuilding: PropTypes.func.isRequired,
   buildingEdit: PropTypes.object,
  }

export default AddBuilding 