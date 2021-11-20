import React from 'react';
import PropTypes from 'prop-types';
import { CloseWrapper, IcoWrapper } from './Styles';

const Close = ({ onClick, className }) => (
  <CloseWrapper onClick={onClick} className={className}>
    <IcoWrapper viewBox="0 0 20 20" />
  </CloseWrapper>
);

Close.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Close.defaultProps = {
  onClick: null,
  className: '',
};

export default Close;
