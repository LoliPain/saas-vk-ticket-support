import React from 'react';
import PropTypes from 'prop-types';
import { IcoWrapper, MinimizeDiv } from './Styles';

const Minimize = ({ updateStatus, status, className }) => (
  <MinimizeDiv onClick={() => updateStatus()} className={className}>
    <IcoWrapper minimized={+status} viewBox="0 0 20 20" />
  </MinimizeDiv>
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
