import React from 'react';
import PropTypes from 'prop-types';
import { StyledClose, StyledIco } from './Styles';

const Close = ({ onClick }) => (
  <StyledClose onClick={onClick}>
    <StyledIco viewBox="0 0 20 20" />
  </StyledClose>
);

Close.propTypes = {
  onClick: PropTypes.func,
};

Close.defaultProps = {
  onClick: null,
};

export default Close;
