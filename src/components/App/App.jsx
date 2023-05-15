import PageTitle from "components/PageTitle/PageTitle";
import EventBord from "components/EventBord/EventBord";
// import style from "./App.module.css";
import { Container } from "./App.styled";
import events from "components/assets/events.json";

export const App = () => {
  return (
    <Container>
      <PageTitle title="Conference" />
      <EventBord events={events} />
    </Container>
  );
};
