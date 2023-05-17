import clsx from 'clsx';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodoItem, onToogleCompleted }) => {
  return (
    <ul className={styles.list}>
      {todos.map(({id, text, completed}) => {
        return (
          <li key={id} className={clsx(styles.item, completed && styles.itemActive)}>
            <input
              type='checkbox'
              checked={completed}
              onChange={() => onToogleCompleted(id)}
            />
            <p className={styles.text}>
              {text}
            </p>
            <button className={styles.button} type="button" onClick={() => onDeleteTodoItem(id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList;