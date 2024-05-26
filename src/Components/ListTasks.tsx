import { CardTask } from "./CardTask"

type ListTasks = {
  listTasks: string[]
  deleteTask: (index: number) => void
}

const ListTasks = ({ listTasks, deleteTask }: ListTasks) => {
  return (
    <div>
      {listTasks.map((task, index) => (
        <CardTask
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  )
}

export { ListTasks }