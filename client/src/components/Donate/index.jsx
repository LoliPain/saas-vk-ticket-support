import React from 'react';
import PropTypes from 'prop-types';
import { StyledDonate, StyledIco, StyledWrapper } from './Styles';

const Donate = ({ onClick }) => (
  <StyledDonate onClick={onClick}>
    <StyledWrapper>
      <StyledIco viewBox="0 0 16 16" />
      Поддержать
    </StyledWrapper>
  </StyledDonate>
);

Donate.propTypes = {
  onClick: PropTypes.func,
};

Donate.defaultProps = {
  onClick: null,
};

export default Donate;
