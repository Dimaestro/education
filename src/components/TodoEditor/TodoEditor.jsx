import { Component } from 'react';
import styles from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  }

  render() {

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <textarea className={styles.textarea} value={this.state.message} onChange={this.handleChange}></textarea>
        <button className={styles.button} type='submit'>create</button>
      </form>
    )
  }
}

export default TodoEditor;