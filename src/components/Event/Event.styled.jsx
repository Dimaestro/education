import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  flex-basis: calc((100% / 3) - 30px);

  background-color: #64cbf732;
  border-radius: 10px;
  padding: 10px;
`;

export const EventName = styled.h2`
  font-size: 20px;
  margin: 0;
  text-align: center;
`;

export const Info = styled.li`
  font-family: Arial,sans-serif;
  font-weight: bold;
`;

export const Chip = styled.span`
  background-color: ${props => {
  switch (props.type) {
    case 'free':
      return 'green';
    case 'paid':
      return 'red';
    case 'vip':
      return 'yellow';
    default:
      return 'black';
  }
  }};
  color: white;
  text-transform: uppercase;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 2px;

`