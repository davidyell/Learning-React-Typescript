import React from 'react'
import TaskInterface from './TaskInterface'

export default class Task extends React.Component<TaskInterface> {
    render (): JSX.Element {
        return <li className="task">{this.complete(this.props.isComplete)} {this.props.name}</li>
    }

    complete (isComplete: boolean): JSX.Element {
        if (isComplete) {
            return <span className="task-status complete">✔</span>
        }

        return <span className="task-status incomplete">✘</span>
    }
}