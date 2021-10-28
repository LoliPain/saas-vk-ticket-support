import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../assets/baseStyles';
import StyledStatus from './Styles';

const statusColor = {
  disabled: color.disabled,
  responded: color.responded,
  respondedL: color.respondedLight,
  created: color.created,
  createdL: color.createdLight,
  rejected: color.rejected,
  rejectedL: color.rejectedLight,
};

const Status = ({ status }) => (
  <StyledStatus status={statusColor[status]} />
);

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
