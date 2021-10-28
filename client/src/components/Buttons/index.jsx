import React from 'react';
import PropTypes from 'prop-types';
import StyledButtons from './Styles';
import { color } from '../../assets/baseStyles';

const Buttons = ({
  onClick, bgColor, hoverColor, label,
}) => (
  <StyledButtons onClick={onClick} bgColor={bgColor} hoverColor={hoverColor}>
    { label }
  </StyledButtons>
);

Buttons.propTypes = {
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
};

Buttons.defaultProps = {
  onClick: null,
  bgColor: color.light,
  hoverColor: color.dark,
  label: 'Кнопка',
};

export default Buttons;
