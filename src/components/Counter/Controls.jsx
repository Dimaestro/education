import { ButtonControl, Button } from './Controls.styled';

const Controls = ({onIncrement, onDecrement}) => {
  return (
    <ButtonControl>
      <Button type="button" onClick={onIncrement}>Увеличить на 1</Button>
      <Button type="button" onClick={onDecrement}>Уменьшить на 1</Button>
    </ButtonControl>
  )
}

export default Controls;