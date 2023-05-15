import PropTypes from 'prop-types';
// import s from './PageTitle.module.css';
import { Header, Title } from './PageTitle.styled';


const PageTitle = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle;