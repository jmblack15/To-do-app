type Task = {
  task: string
  deleteTask: () => void
}

const CardTask = ({ task, deleteTask }: Task) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export { CardTask }