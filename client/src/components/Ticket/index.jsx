import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTicketCode, StyledTicketPreview, StyledTicketWrapper,
} from './Styles';
import Status from '../Status';
import { MinimalUserPic } from '../Userpic';

const Ticket = ({
  status, preview, code, user, selected,
}) => (
  <StyledTicketWrapper selected={+selected}>
    <Status status={status} />
    <StyledTicketPreview>
      {preview}
    </StyledTicketPreview>
    <StyledTicketCode>
      {code}
    </StyledTicketCode>
    <MinimalUserPic userUrl={user} size="0.7" />
  </StyledTicketWrapper>
);

Ticket.propTypes = {
  status: PropTypes.string,
  preview: PropTypes.string,
  code: PropTypes.string,
  user: PropTypes.string,
  selected: PropTypes.bool,
};

Ticket.defaultProps = {
  status: 'disabled',
  preview: '',
  code: '#',
  user: '',
  selected: false,
};

export default Ticket;
