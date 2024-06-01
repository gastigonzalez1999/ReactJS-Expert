/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

const newMessage = {
  message: 'Hey',
  title: 'Gasti',
}

const getResult = () => {
  return 4 + 4;
}

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="title">{ title }</h1>
      <p>Hello</p>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>{ getResult() }</p>
      <p>{ title }</p>
      <p>{subtitle}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: 'Nothing',
  name: 'Gaston Gonzalez',
}
