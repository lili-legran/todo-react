import React from 'react';
import './todo-list.scss';
import CreationField from '../creation-field/creation-field';
import ActiveTasks from '../active-tasks/active-tasks';
import CompletedTasks from '../completed-tasks/completed-tasks';
import FirstPin from '../assets/pin-1.';
import SecondPin from '../assets/pin-2';

class TodoList extends React.Component {
  state = {
    currentValue : '',
    activeArray : [],
    completedArray : []
  }

  getInputValue = (e) => {
    this.setState ({
      currentValue : e.target.value
    })
  }

  createTask = () => {
    this.setState ({
      activeArray : [...this.state.activeArray, this.state.currentValue],
      currentValue : ''
    });
  }

  completeTask = (value) => {
    let newArray = this.state.activeArray.filter(item => item !== value);
    this.setState ({
      activeArray : newArray,
      completedArray : [...this.state.completedArray, value]
    })
  }

  render () {
    return (
     <div className='todo'>
        <h1>ToDo LIST</h1>
        <div className='todo__container' onClick={this.setActiveTask}>
          <CreationField 
            currentValue = { this.state.currentValue }
            getInputValue = { this.getInputValue } 
            createTask = { this.createTask }
          />
          <ActiveTasks 
            activeTasks = { this.state.activeArray }
            complete = { this.completeTask }
          />
          <CompletedTasks 
            completedTasks = {this.state.completedArray}
          />
        </div>
        <FirstPin />
        <SecondPin />
     </div>
    )
  }
}

export default TodoList;