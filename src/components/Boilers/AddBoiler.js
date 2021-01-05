import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../layout/main/main.module.css";
import { Form, Field } from "react-final-form";
import TextInput from "../../SharedComponents/TextInput/TextInput";
export class AddBoiler extends Component {
  handleCleanForm = () => {
    this.props.handleShowForm();
  };

  onSubmit = (values) => {
    if (values._id) {
      this.props.updateBoiler(
        values._id,
        values.typeId,
        values.maintainceRate,
        values.hourMaintainceCost,
        values.hourEventualCost
      );
    } else {
      this.props.addBoiler(
        values.typeId,
        values.maintainceRate,
        values.hourMaintainceCost,
        values.hourEventualCost
      );
    }
    this.handleCleanForm();
  };

  render() {
    const boilerEdit = this.props.boilerEdit;
    return (
      <div>
        <h1>
          {boilerEdit && boilerEdit._id ? "Edit boiler" : "Add new boiler"}
        </h1>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            _id: boilerEdit && boilerEdit._id,
            typeId: boilerEdit && boilerEdit.typeId,
            maintainceRate: boilerEdit && boilerEdit.maintainceRate,
            hourMaintainceCost: boilerEdit && boilerEdit.hourMaintainceCost,
            hourEventualCost: boilerEdit && boilerEdit.hourEventualCost,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.typeId) {
              errors.typeId = "Required";
            }
            if (!values.maintainceRate) {
              errors.maintainceRate = "Required";
            }

            if (!values.hourMaintainceCost) {
              errors.hourMaintainceCost = "Required";
            }

            if (!values.hourEventualCost) {
              errors.hourEventualCost = "Required";
            }

            return errors;
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component="input"
                type="hidden"
                name="_id"
                className={styles.input}
                placeholder="Type boiler..."
              />
              <Field
                component={TextInput}
                type="text"
                name="typeId"
                className={styles.input}
                placeholder="Type boiler..."
              />
              <Field
                component={TextInput}
                type="text"
                name="maintainceRate"
                className={styles.input}
                placeholder="Maintaince rate ..."
              />
              <Field
                component={TextInput}
                type="text"
                name="hourMaintainceCost"
                className={styles.input}
                placeholder="Hour maintaince cost ..."
              />
              <Field
                component={TextInput}
                type="text"
                name="hourEventualCost"
                className={styles.input}
                placeholder="Hour maintaince cost ..."
              />
              <div className={styles.formsBtn}>
                {boilerEdit && boilerEdit._id ? (
                  <button title="Save" className={styles.btnStyle}>
                    <i className="far fa-save"></i>
                  </button>
                ) : (
                  <button title="Add" className={styles.btnStyle}>
                    <i className="fas fa-plus"></i>
                  </button>
                )}
                <div>
                  <button
                    title="Cancel"
                    className={styles.btnStyle}
                    onClick={this.handleCleanForm}
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
AddBoiler.propTypes = {
  addBoiler: PropTypes.func.isRequired,
  updateBoiler: PropTypes.func.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  boilerEdit: PropTypes.object,
};

export default AddBoiler;
