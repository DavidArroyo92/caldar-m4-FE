import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../layout/main/main.module.css";

class BoilerTypeItem extends Component {
//   getStyle = () => {
//       return {
//           background: "#f4f4f4",
//           paddign: "10px",
//           borderBottom: "1px #ccc dotted",
//       };
//   };
  
  
    render() {
        const { _id, skillsId, type, stock, description } = this.props.boilerType;
        
        return (
        // <div style={this.getStyle()}>
            <tr>
                <td>{_id}</td>
                <td>{skillsId}</td>
                <td>{type}</td>
                <td>{stock}</td>
                <td>{description}</td>
                <td>
                    <button onClick={() => this.props.deleteBoilerType.bind(this, _id)} 
                    className={styles.btnDelete}>x</button>
                    <button onClick={this.props.editBoilerType.bind(this, this.props.boilerType)} className={styles.btnEdit} >Edit</button>
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


// const btnDelete ={
//     background: 'red',
//     color: '#fff',
//     border:'none',
//     padding: '5px 10px',
//     borderRadius: '5px',
//     marginRight:'10px',
//     cursor: 'pointer',
//     float: 'right'
//   }
  
// const btnEdit ={
//     background: '#555',
//     color: '#fff',
//     border:'none',
//     padding: '5px 10px',
//     marginRight:'5px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     float: 'right'
//   }

export default BoilerTypeItem;

