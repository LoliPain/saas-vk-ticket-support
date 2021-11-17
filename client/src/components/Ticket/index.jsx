import React from 'react';
import PropTypes from 'prop-types';
import {
  TicketCode, TicketPreview, TicketWrapper,
} from './Styles';
import Status from '../Status';
import { MinimalUserPic } from '../Userpic';

const Ticket = ({
  status, preview, code, user, selected,
}) => (
  <TicketWrapper selected={+selected}>
    <Status status={status} />
    <TicketPreview>
      {preview}
    </TicketPreview>
    <TicketCode>
      {code}
    </TicketCode>
    <MinimalUserPic userUrl={user} size="0.7" />
  </TicketWrapper>
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
