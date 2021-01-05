import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

class BoilerTypeItem extends Component {
    render() {
        const { _id, skillsId, type, stock, description } = this.props.boilerType;
        return (
            <tr className={styles.table}>
                <td>{_id}</td>
                <td>{skillsId}</td>
                <td>{type}</td>
                <td>{stock}</td>
                <td>{description}</td>
                <td>
                    <button
                        title="Edit"
                        onClick={this.props.editBoilerType.bind(this, this.props.boilerType)}
                        className={styles.btnStyle}
                    >
                        <i className="far fa-edit"></i>
                    </button>
                    <button
                        title="Delete"
                        className={styles.btnStyle}
                        onClick={this.props.deleteBoilerType.bind(this, _id)}
                    >
                        <i className="far fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

BoilerTypeItem.propTypes = {
    boilerType: PropTypes.object.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
    editBoilerType: PropTypes.func.isRequired,
};
export default BoilerTypeItem;

