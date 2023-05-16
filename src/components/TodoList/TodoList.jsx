const TodoList = ({ todos, onDeleteTodoItem }) => {
  return (
    <ul>
      {todos.map(({id, text}) => {
        return (
          <li key={id}>
            <p>
              {text}
            </p>
            <button type="button" onClick={() => onDeleteTodoItem(id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList;