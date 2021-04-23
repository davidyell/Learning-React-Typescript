import Tasks from '../../Tasks/Tasks'
import TaskInterface from '../../Tasks/TaskInterface'

describe('<Tasks />', () => {
  test('Should have a list of four tasks', async () => {
    const tasksComponent = new Tasks(null)

    expect(tasksComponent.state.tasks.length).toBe(4)
  })

  test('Can create a list of tasks', () => {
    const tasksComponent = new Tasks(null)

    const tasks: TaskInterface[] = [
      {
        name: 'Brush weasel',
        isComplete: true
      },
      {
        name: 'Shave badger',
        isComplete: false
      }
    ]

    const taskList = tasksComponent.buildTaskList(tasks)

    expect(taskList).toHaveLength(2)

    expect(taskList[0].props.task).toEqual({
      name: 'Brush weasel',
      isComplete: true
    })

    expect(taskList[1].props.task).toEqual({
      name: 'Shave badger',
      isComplete: false
    })
  })
})
