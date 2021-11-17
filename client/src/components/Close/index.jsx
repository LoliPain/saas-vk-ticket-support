import React from 'react';
import PropTypes from 'prop-types';
import { CloseWrapper, IcoWrapper } from './Styles';

const Close = ({ onClick }) => (
  <CloseWrapper onClick={onClick}>
    <IcoWrapper viewBox="0 0 20 20" />
  </CloseWrapper>
);

Close.propTypes = {
  onClick: PropTypes.func,
};

Close.defaultProps = {
  onClick: null,
};

export default Close;
