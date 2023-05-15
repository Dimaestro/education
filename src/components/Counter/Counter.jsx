import { Component } from 'react';

import Controls from './Controls';
import { Container, CounterValue } from './Counter.styled';

class Counter extends Component { 

  static defaultProps = {
    initialValue: 0,
  }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      }
    });
  }

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1
      }
    });
  }

  render() {
    return (
      <Container>
        <CounterValue>{this.state.value}</CounterValue>
        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
      </Container>
    )
  }
}

export default Counter;