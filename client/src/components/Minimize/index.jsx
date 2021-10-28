import React from 'react';
import PropTypes from 'prop-types';
import { StyledMinimize, StyledIco } from './Styles';

const Minimize = ({ updateStatus, status }) => (
  <StyledMinimize onClick={() => updateStatus()}>
    <StyledIco minimized={+status} viewBox="0 0 20 20" />
  </StyledMinimize>
);

Minimize.propTypes = {
  updateStatus: PropTypes.func,
  status: PropTypes.bool,
};

Minimize.defaultProps = {
  updateStatus: null,
  status: false,
};

export default Minimize;
