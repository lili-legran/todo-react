import React from 'react';
import './active-tasks.scss';
import ActiveTask from '../active-task/active-task';

class ActiveTasks extends React.Component {
  render() {
    return (
      <div className='active-tasks'>
        <h2>Tasks in work</h2>
        <ul className='active-tasks__list'>
          {
          this.props.activeTasks
            .map(task => <ActiveTask activeTasks={ task } key={ task } complete = { this.props.complete } /> ) 
          } 
        </ul>
      </div>
    )
  }
}

export default ActiveTasks;