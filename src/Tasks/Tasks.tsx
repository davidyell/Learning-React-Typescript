import React from 'react'
import TaskInterface from './TaskInterface'
import Task from './Task'

interface TasksState {
    tasks: TaskInterface[]
}

export default class Tasks extends React.Component<any, TasksState> {
    constructor(props: null) {
        super(props)

        this.state = {
            tasks: [
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
        }

        this.toggleTaskComplete = this.toggleTaskComplete.bind(this);
    }

    buildTaskList (tasks: TaskInterface[]): JSX.Element[] {
        return tasks.map((task, index) =>
            <Task task={task} onToggleComplete={this.toggleTaskComplete} index={index} key={index}/>
        )
    }

    completedTaskCount (): Number {
        return this.state.tasks.reduce((accumulator, currentValue) => {
            if (currentValue.isComplete) {
                return accumulator + 1;
            }
            return accumulator;
        }, 0)
    }

    toggleTaskComplete (index: number) {
        this.setState(state => {
            state.tasks[index].isComplete = !state.tasks[index].isComplete
        })
    }

    render () {
        return (
            <div id="tasks">
                <h1>Task list</h1>
                <p>{this.completedTaskCount()} completed</p>
                <ul>
                    {this.buildTaskList(this.state.tasks)}
                </ul>
            </div>
        )
    }
}
