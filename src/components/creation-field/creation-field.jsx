import React from 'react';
import './creation-field.scss';

class CreationField extends React.Component {
 render () {
   return (
    <div className='creation-field'>
      <h3>Create new task :</h3>
      <div className='creation-field__container'>
        <input className='creation-field__input' onChange={this.props.getInputValue} value={this.props.currentValue}/>
        <button className='creation-field__button' onClick={this.props.createTask}> + </button>
      </div>
    </div>
   )
 }
}

export default CreationField;