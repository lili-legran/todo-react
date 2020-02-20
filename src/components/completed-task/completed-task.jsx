import React from 'react';
import './completed-task.scss';

class CompletedTask extends React.Component {
  render () {
    return (
      <div className='completed-task'>
        <li className='completed-task__item'>
          { this.props.task } 
        </li>
      </div>
    )
  } 
}

export default CompletedTask;