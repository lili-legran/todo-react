import React from 'react';
import './active-task.scss';

class ActiveTask extends React.Component {
  setTaskValue = () => {
    this.props.complete(this.props.activeTasks);
  } 

  render () {
    return (
      <div className='active-task'>
        <li className='active-task__item'>{this.props.activeTasks}</li>
        <button className='active-task__button' onClick = { this.setTaskValue }>&#x2714;</button>
      </div>
    )
  }
}

export default ActiveTask;