// import style from "./Event.module.css";
import { Container, EventName, Info, Chip } from "./Event.styled";

const Event = ({name, location, speacker, type, time}) => {
  return (
    <Container>
      <EventName>{name}</EventName>
      <ul>
        <Info>{location}</Info>
        <Info>{speacker}</Info>
        <Info>{type}</Info>
        <Info>{time.start}</Info>
        <Chip type={type}>{type}</Chip>
      </ul>
    </Container>
  )
}

export default Event;