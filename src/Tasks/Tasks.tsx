import React from 'react'
import TaskInterface from './TaskInterface'
import Task from './Task'

export default class Tasks extends React.Component {
    tasks: TaskInterface[] = [
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
    ]

    buildTaskList (tasks: TaskInterface[]): JSX.Element[] {
        return tasks.map((task, index) => 
            <Task name={task.name} isComplete={task.isComplete} key={index}></Task>
        )
    }

    completedTaskCount (): Number {
        return this.tasks.reduce((accumulator, currentValue) => {
            if (currentValue.isComplete) {
                return accumulator + 1;
            }
            return accumulator;
        }, 0)
    }

    render () {
        return (
            <div id="tasks">
                <h1>Task list</h1>
                <p>{this.completedTaskCount()} completed</p>
                <ul>
                    {this.buildTaskList(this.tasks)}
                </ul>
            </div>
        )
    }
}