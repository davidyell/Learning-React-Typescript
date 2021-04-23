import React from 'react'
import TaskInterface from './TaskInterface'

interface TaskProps {
    task: TaskInterface,
    onToggleComplete: Function,
    index: Number
}

export default class Task extends React.Component<TaskProps> {
  constructor (props: TaskProps) {
    super(props)

    this.toggleComplete = this.toggleComplete.bind(this)
  }

  complete (isComplete: boolean): JSX.Element {
    if (isComplete) {
      return <span className="task-status complete" onClick={this.toggleComplete}>✔</span>
    }

    return <span className="task-status incomplete" onClick={this.toggleComplete}>✘</span>
  }

  toggleComplete () {
    this.props.onToggleComplete(this.props.index)
  }

  render (): JSX.Element {
    return <li className="task">{this.complete(this.props.task.isComplete)} <span className="task-name">{this.props.task.name}</span></li>
  }
}
