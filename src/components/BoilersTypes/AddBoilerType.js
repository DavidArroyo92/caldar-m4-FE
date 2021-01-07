import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import { Form, Field } from "react-final-form";
import TextInput from "../../SharedComponents/TextInput/TextInput";
import { connect } from "react-redux";
import { closeModal as closeModalActions } from "../../redux/actions/modalActions";

import {
  addBoilerType as addBoilerTypeActions,
  editBoilerType as updateBoilerTypeActions,
} from "../../redux/actions/boilerTypesActions";


export class AddBoilerType extends Component {

  onSubmit = (values) => {
    if (values._id) {
      this.props.updateBoilerType(
        values._id,
        values.skillsId,
        values.type,
        values.stock,
        values.description
      );
    } else {
      this.props.addBoilerType(
        values.skillsId,
        values.type,
        values.stock,
        values.description
      );
    }
    this.props.closeModal();
  };

  render() {
    const boilerTypeEdit = this.props.boilerTypeEdit;

    const required = value => (value ? undefined : 'Required');

    const validateSkillsId = value => /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(value) ? undefined: ' Invalid Skill Id';

    const validateType = value => /^([1-4])/i.test(value) ? undefined: ' Invalid Type';

    const validateStock = value => /^([1-9]{1,2}|100)$/i.test(value) ? undefined: ' Invalid Stock';
    
    const composeValidator =  (...validators) => value => validators.reduce((error, validator) => error  || validator(value), undefined);

    return (
      <div>
        <h1>
          {boilerTypeEdit && boilerTypeEdit._id ? "Edit boiler type" : "Add new boiler type"}
        </h1>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            _id: boilerTypeEdit && boilerTypeEdit._id,
            skillsId: boilerTypeEdit && boilerTypeEdit.skillsId,
            type: boilerTypeEdit && boilerTypeEdit.type,
            stock: boilerTypeEdit && boilerTypeEdit.stock,
            description: boilerTypeEdit && boilerTypeEdit.description,
          }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.skillsId) {
          //     errors.skillsId = "Required";
          //   }
          //   if (!values.type) {
          //     errors.type = "Required";
          //   }

          //   if (!values.stock) {
          //     errors.stock = "Required";
          //   }

          //   if (!values.description) {
          //     errors.description = "Required";
          //   }

          //   return errors;
          // }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component="input"
                type="hidden"
                name="_id"
                className={styles.input}
                placeholder="Id boiler type..."
              />
              <Field
                component={TextInput}
                type="text"
                name="skillsId"
                className={styles.input}
                placeholder="Skill Id..."
                validate={composeValidator(required, validateSkillsId)}
              />
              <Field
                component={TextInput}
                type="text"
                name="type"
                className={styles.input}
                placeholder="Type..."
                validate={composeValidator(required,validateType)}
              />
              <Field
                component={TextInput}
                type="text"
                name="stock"
                className={styles.input}
                placeholder="Stock..."
                validate={composeValidator(required,validateStock)}
              />
              <Field
                component={TextInput}
                type="text"
                name="description"
                className={styles.input}
                placeholder="Description..."
                validate={required}
              />
              <div className={styles.formsBtn}>
                {boilerTypeEdit && boilerTypeEdit._id ? (
                  <button type='submit' title="Save" className={styles.btnStyle}>
                    <i className="far fa-save"></i>
                  </button>
                ) : (
                  <button type='submit' title="Add" className={styles.btnStyle}>
                    <i className="fas fa-plus"></i>
                  </button>
                )}
                <div>
                  <button
                    title="Cancel"
                    className={styles.btnStyle}
                    onClick={this.props.closeModal}
                  >
                    <i className="fas fa-ban"></i>
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

// PropTypes
AddBoilerType.propTypes = {
  boilerTypeEdit: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModalActions()),
  addBoilerType: (skillsId, type, stock, description) =>
    dispatch(
      addBoilerTypeActions(
        skillsId,
        type,
        stock,
        description
      )
    ),
  updateBoilerType: (
    _id,
    skillsId,
    type,
    stock,
    description
  ) =>
    dispatch(
      updateBoilerTypeActions(
        _id,
        skillsId,
        type,
        stock,
        description
      )
    ),
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBoilerType);