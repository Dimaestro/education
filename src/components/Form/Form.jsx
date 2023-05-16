import { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    age: '',
    level: 'junior',
    license: false,
  }

  handleChange = (event) => {
    const { name, value } = event.target
    
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.onSubmit(this.state);
    this.reset();
  }

  handleLicenseChange = (event) => {
    console.log(event.target.checked);
    this.setState({ license: event.target.checked })
  }

  reset = () => {
    this.setState({name: '', age: '', level: 'junior'})
  }

  render() {
    const { name, age, level, license } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        
      <label>
        Name :
        <input
          className={styles.name}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
      </label>
      <label>
        Age :
        <input
          className={styles.name}
          type="text"
          name="age"
          value={age}
          onChange={this.handleChange}
        />
        </label>
        <hr/>
        <p>Your level</p>
        <label>
          Junior
          <input
            className={styles.name}
            type='radio'
            name='level'
            value='junior'
            onChange={this.handleChange}
            checked={level === 'junior'}
          />
        </label>
        <label>
          Middle
          <input
            className={styles.name}
            type='radio'
            name='level'
            value='middle'
            onChange={this.handleChange}
            checked={level === 'middle'}
          />
        </label>
        <label>
          Senior
          <input
            className={styles.name}
            type='radio'
            name='level'
            value='senior'
            onChange={this.handleChange}
            checked={level === 'senior'}
          />
        </label>
        <hr/>
        <p>checkbox</p>
        <label>
          License
          <input
            className={styles.name}
            type='checkbox'
            name='license'
            checked={license}
            onChange={this.handleLicenseChange}
          />
        </label>
      <button type="submit">Send</button>
    </form>
    )
  }
};

export default Form;
