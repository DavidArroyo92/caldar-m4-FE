import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from '../../layout/main/main.module.css';
import { showModal as showModalActions } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/types-modals.js";
import { connect } from "react-redux";

export class BuildingItem extends Component {

    showDeleteModal = (_id) => {
        this.props.showModal(modalTypes.DEL_BUILDING, {id: _id});
      };

    render() {
        const
            {
                _id,
                boilersId,
                businessName,
                email,
                phone,
                adress,
            } = this.props.building;
        return (
            <tr className={styles.table}>
                       <td>
                            {_id}
                        </td>
                        <td>
                            {boilersId}
                        </td>
                        <td>
                            {businessName}
                        </td>
                        <td>
                            {email}
                        </td>
                        <td>
                            {phone}
                        </td>
                        <td>
                            {adress}
                        </td>
                        <td>
                            <button
                                title="Edit"
                                onClick={this.props.editBuilding.bind(this, this.props.building)}
                                className={styles.btnStyle}
                            >
                                <i className="far fa-edit"></i>
                            </button>
                            <button
                                title="Delete"
                                className={styles.btnStyle}
                                onClick={this.showDeleteModal(_id)}
                            >
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </td>
                   </tr>
        )
    }
}

//proptypes
BuildingItem.propTypes = {
    building: PropTypes.object.isRequired,
    delBuilding: PropTypes.func.isRequired,
    editBuilding: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    showModal: (modalType, meta) => dispatch(showModalActions(modalType, meta)),
  });
  
  const mapStateToProps = (state) => ({});
  
  export default connect( mapStateToProps, mapDispatchToProps)(BuildingItem);