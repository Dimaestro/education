import { Component } from 'react';
// import styles from './App.module.css';
import Form from 'components/Form/Form';

class App extends Component {

  handleFormSubmit = data => {
    console.log(data);
  }

  render() {
    
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
}

export default App;