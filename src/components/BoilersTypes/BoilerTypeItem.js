import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

class BoilerTypeItem extends Component {
    render() {
        const { _id, skillsId, type, stock, description } = this.props.boilerType;
        return (
            <tr>
                <td>{_id}</td>
                <td>{skillsId}</td>
                <td>{type}</td>
                <td>{stock}</td>
                <td>{description}</td>
                <td>
                <button onClick={this.props.deleteBoilerType.bind(this, _id)}
                    className={styles.btnStyle}>X</button>
                    <button onClick={this.props.editBoilerType.bind(this, this.props.boilerType)} className={styles.btnStyle} >Edit</button>
                </td>
            </tr>
        );
    }
}

//proptypes

BoilerTypeItem.propTypes = {
    boilerType: PropTypes.object.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
    editBoilerType: PropTypes.func.isRequired,
};


export default BoilerTypeItem;

