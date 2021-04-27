import React, { useState } from 'react'
import TaskInterface from './TaskInterface'
import { Task } from './Task'

export const Tasks = function () {
  const [tasks, setTasks] = useState([
    {
      name: 'Buy groceries',
      isComplete: false
    },
    {
      name: 'Feed fish',
      isComplete: true
    },
    {
      name: 'Mow the lawns',
      isComplete: false
    },
    {
      name: 'Collect mail',
      isComplete: false
    }
  ])

  function toggleTaskComplete (index: number): void {
    // const newState = tasks
    // newState[index].isComplete = !newState[index].isComplete

    // TODO: How to use existing state to create a new state?
    setTasks(tasks => tasks[index].isComplete = !tasks[index].isComplete)
  }

  function buildTaskList (tasks: TaskInterface[]): JSX.Element[] {
    return tasks.map((task, index) =>
      <Task task={task} onToggleComplete={toggleTaskComplete} index={index} key={index}/>
    )
  }

  function completedTaskCount (): Number {
    return tasks.reduce((accumulator, currentValue) => {
      if (currentValue.isComplete) {
        return accumulator + 1
      }
      return accumulator
    }, 0)
  }

  function allTasksDone (): JSX.Element|null {
    if (completedTaskCount() === tasks.length) {
      return (
        <p>Congratulations! You&apos;ve completed all your tasks! 🎉</p>
      )
    }
    return null
  }

  return (
    <div id="tasks">
        <h1>Task list</h1>
        <p>{completedTaskCount()} completed</p>
        {allTasksDone()}
        <ul>
            {buildTaskList(tasks)}
        </ul>
    </div>
  )
}
