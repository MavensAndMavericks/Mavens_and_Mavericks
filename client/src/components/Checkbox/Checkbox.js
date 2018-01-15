import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  state = {
        checkboxState: true
      };
    
  // toggle = (event) => {
  //   this.setState({
  //     checkboxState: !this.state.checkboxState
  //   });
  // };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
     [name]: value
    });
  };

  render() {
    const checkedOrNot = [];
    checkedOrNot.push(
      <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
    );
 
    const checkbox = (
      <span>
        <input 
        type="checkbox"
        value ="lorna"
        onChange={this.handleInputChange}
        />
        <label>Checkbox</label>
      </span>
    );

return (
      <div>
        
        {checkbox}
        {checkedOrNot}
      </div>
    );
  }
}
export default Checkbox;





// class Checkbox extends Component {
//   state = {
//     isChecked: false,
//   }

//   toggleCheckboxChange = () => {
//     const { handleCheckboxChange, label } = this.props;
//     this.setState(({ isChecked }) => (
//       {
//         isChecked: !isChecked,
//       }
//     ));
//     handleCheckboxChange(label);
//   }


//   render() {
//     const { label } = this.props;
//     const { isChecked } = this.state;
//     return (
//       <div className="checkbox">
//         <label>
//           <input
//             type="checkbox"
//             value={label}
//             checked={isChecked}
//             onChange={this.toggleCheckboxChange}
//           />
//           {label}
//         </label>
//       </div>
//     );
//   }
// }
// Checkbox.propTypes = {
//   label: PropTypes.string.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
// };
// export default Checkbox;