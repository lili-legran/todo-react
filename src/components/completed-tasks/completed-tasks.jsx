import React from 'react';
import './completed-tasks.scss';
import CompletedTask from '../completed-task/completed-task';

class CompletedTasks extends React.Component {
  render () {
    return (
      <div className='completed-tasks'>
        <h2>Completed tasks</h2>
        <ul className='completed-tasks__list'>
          {
            this.props.completedTasks
              .map(task => <CompletedTask task={ task } key={ task } /> )
          }
        </ul>
      </div>
    )
  }
}

export default CompletedTasks;