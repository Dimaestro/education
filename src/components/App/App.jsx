import { Component } from 'react';
import TodoList from "components/TodoList";
import todos from '../../data/todos.json';

class App extends Component {
  state = {
    todos: todos,
  }

  deleteTodoItem = (todoId) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => item.id !== todoId),
      };
    })
  }

  render() {
    const { todos } = this.state;
    const completedTodo = todos.filter(item => item.completed);
    
    return (
      <div>
        <div>
          <p>Кол-во заданий : {todos.length}</p>
          <p>Кол-во выполненых : {completedTodo.length}</p>
        </div>
        <TodoList todos={todos} onDeleteTodoItem={this.deleteTodoItem} />
      </div>
    )
  }
}

export default App;
