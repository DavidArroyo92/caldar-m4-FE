import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import { Field, Form, FieldRenderProps } from 'react-final-form';


class AddBoilerType extends Component {
  state = {
    _id: "",
    skillsId: "",
    type: "",
    stock: "",
    description: "",
  };

  componentDidMount() {
    if (this.props.boilerTypeEdit) {
      this.handleEdit(this.props.boilerTypeEdit);
    }
  }

  handleCleanForm = () => {
    this.setState({
      _id: "",
      skillsId: "",
      type: "",
      stock: "",
      description: "",
    });
    this.props.handleShowForm();
  };

  handleEdit = (boilerTypeEdit) => {
    this.setState({
      _id: boilerTypeEdit._id,
      skillsId: boilerTypeEdit.skillsId,
      type: boilerTypeEdit.type,
      stock: boilerTypeEdit.stock,
      description: boilerTypeEdit.description,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state._id){
      this.props.updateBoilerType(
        this.state._id,
        this.state.skillsId,
        this.state.type,
        this.state.stock,
        this.state.description
      );
    }else {
      this.props.addBoilerType(
        this.state.skillsId,
        this.state.type,
        this.state.stock,
        this.state.description
      );
    }
    this.handleCleanForm();
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    

  interface InputRowProps extends FieldRenderProps<String, HTMLElement> {
    label: string
  }
  const InputRow = ({input, meta, label}: InputRowProps) => (
    <div className={styles.input} >
      <label>{label} </label>
      <input {...input} placeholder={label}/>
      {meta.touched && meta.error &&<span>{meta.error}</span>}
    </div>
  )
  
  const required = value => (value ? undefined : 'Required');

  const validateSkillsId = value => /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(value) ? undefined: ' Invalid Skill Id';

  const validateType = value => /^([1-4])/i.test(value) ? undefined: ' Invalid Type';

  const validateStock = value => /^([1-9]{1,2}|100)$/i.test(value) ? undefined: ' Invalid Stock';
  
  const composeValidator =  (...validators) => value => validators.reduce((error, validator) => error  || validator(value), undefined);
    
    return (
      <div>
        <h3>{this.state._id ? "Edit boiler type" : "Add new boiler type"}</h3>
        <Form 
          onSubmit={(onSubmit) => {
            console.log(onSubmit);
          }}
          
          render ={({ handleSubmit, form, values }) => (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_id" value={this.state._id} />
              
              <Field name="skillsId" render={InputRow} label="Skills Id" validate={composeValidator(required, validateSkillsId)}/>
              
              <Field name="type" render={InputRow} label="Type" validate={composeValidator(required,validateType)}/>
              
              <Field name="stock" render={InputRow} label="Stock" validate={composeValidator(required,validateStock)}/>
             
              <Field name="description" render={InputRow} label="Description" validate={required}/>
              
              
              {this.state._id ?
              <input
                type="submit"
                value="Save"
                className={styles.input}
              />
              :
              <input
                type="submit"
                value="Add"
                className={styles.input}
              />}
              <input
                type="button"
                value="Cancel"
                className={styles.input}
                onClick={this.handleCleanForm}
              />
            </form>
          )}
        />
      </div>
    );
  }
}

// PropTypes
AddBoilerType.propTypes = {
  addBoilerType: PropTypes.func.isRequired,
  updateBoilerType: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  boilerTypeEdit: PropTypes.object,
};


export default AddBoilerType;