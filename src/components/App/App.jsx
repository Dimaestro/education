import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import TodoList from "components/TodoList";
import todos from '../../data/todos.json';
import TodoEditor from 'components/TodoEditor';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    todos: todos,
    filter: '',
  }

  addTodo = (message) => {
    const todo = {
      id: nanoid(),
      text: message,
      completed: false,
    }

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }))
  }

  deleteTodoItem = (todoId) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => item.id !== todoId),
      };
    })
  }

  toogleCompleted = (todoId) => {
    console.log(todoId);

    this.setState(prevState => {
      return {
        todos: prevState.todos.map(item => {
          return item.id === todoId ? { ...item, completed: !item.completed } : item;
        })
      }
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value);

    this.setState({
      [name]: value 
    })
  }

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase()

    return todos.filter(item => item.text.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { todos, filter } = this.state;
    const completedTodo = todos.filter(item => item.completed);
    const visibleTodos = this.getVisibleTodos();
    
    return (
      <div className={styles.container}>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter filter={filter} onChange={this.handleChange}/>
        <TodoList todos={visibleTodos} onDeleteTodoItem={this.deleteTodoItem} onToogleCompleted={this.toogleCompleted} />

        <div>
          <p className={styles.text}>Кол-во заданий : {todos.length}</p>
          <p className={styles.text}>Кол-во выполненых : {completedTodo.length}</p>
        </div>
      </div>
    )
  }
}

export default App;
