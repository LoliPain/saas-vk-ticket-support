import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../assets/baseStyles';
import StatusDiv from './Styles';

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
  <StatusDiv status={statusColor[status]} />
);

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
