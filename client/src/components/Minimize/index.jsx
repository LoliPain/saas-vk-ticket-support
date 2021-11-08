import React from 'react';
import PropTypes from 'prop-types';
import { StyledMinimize, StyledIco } from './Styles';

const Minimize = ({ updateStatus, status, className }) => (
  <StyledMinimize onClick={() => updateStatus()} className={className}>
    <StyledIco minimized={+status} viewBox="0 0 20 20" />
  </StyledMinimize>
);

Minimize.propTypes = {
  updateStatus: PropTypes.func,
  status: PropTypes.bool,
  className: PropTypes.string,
};

Minimize.defaultProps = {
  updateStatus: null,
  status: false,
  className: '',
};

export default Minimize;
