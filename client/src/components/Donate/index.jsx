import React from 'react';
import PropTypes from 'prop-types';
import { DonateDiv, IcoWrapper, Wrapper } from './Styles';

const Donate = ({ onClick }) => (
  <DonateDiv onClick={onClick}>
    <Wrapper>
      <IcoWrapper viewBox="0 0 16 16" />
      Поддержать
    </Wrapper>
  </DonateDiv>
);

Donate.propTypes = {
  onClick: PropTypes.func,
};

Donate.defaultProps = {
  onClick: null,
};

export default Donate;
