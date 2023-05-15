import Event from 'components/Event/Event';
// import style from './EventBord.module.css';
import { Container } from './EventBoard.styled';

const EventBord = ({events}) => {
  return (
    <Container>
      {events.map(({id, name, location, speacker, type, time}) => {
        return (
          <Event key={id} name={name} location={location} type={type} speacker={speacker} time={time}/>
        )
      })}
    </Container>
  )
}

export default EventBord;