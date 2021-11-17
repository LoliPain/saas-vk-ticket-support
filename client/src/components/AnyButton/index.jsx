import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Styles';

const AnyButton = (
  {
    onClick,
    fill,
    inline,
    active,
    label,
  },
) => (
  <Buttons onClick={onClick} fill={fill} inline={inline} active={active}>
    { label }
  </Buttons>
);

AnyButton.propTypes = {
  onClick: PropTypes.func,
  fill: PropTypes.string,
  inline: PropTypes.bool,
  active: PropTypes.bool,
  label: PropTypes.string,
};

AnyButton.defaultProps = {
  onClick: null,
  fill: '',
  inline: false,
  active: false,
  label: 'Кнопка',
};

export default AnyButton;
