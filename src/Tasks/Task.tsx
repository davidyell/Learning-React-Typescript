import React from 'react'
import TaskInterface from './TaskInterface'

interface TaskProps {
    task: TaskInterface,
    onToggleComplete: Function,
    index: Number
}

export const Task = function (props: TaskProps) {
  function toggleComplete () {
    props.onToggleComplete(props.index)
  }

  function complete (isComplete: boolean): JSX.Element {
    if (isComplete) {
      return <span className="task-status complete" onClick={toggleComplete}>✔</span>
    }

    return <span className="task-status incomplete" onClick={toggleComplete}>✘</span>
  }

  return <li className="task">{complete(props.task.isComplete)} <span className="task-name">{props.task.name}</span></li>
}
