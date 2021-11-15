import React from 'react';
import PropTypes from 'prop-types';
import StyledButtons from './Styles';

const Buttons = (
  {
    onClick,
    fill,
    inline,
    active,
    label,
  },
) => (
  <StyledButtons onClick={onClick} fill={fill} inline={inline} active={active}>
    { label }
  </StyledButtons>
);

Buttons.propTypes = {
  onClick: PropTypes.func,
  fill: PropTypes.string,
  inline: PropTypes.bool,
  active: PropTypes.bool,
  label: PropTypes.string,
};

Buttons.defaultProps = {
  onClick: null,
  fill: '',
  inline: false,
  active: false,
  label: 'Кнопка',
};

export default Buttons;
