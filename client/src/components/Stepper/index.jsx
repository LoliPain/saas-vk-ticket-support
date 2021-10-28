import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledIncrease, StyledPlus, StyledDecrease, StyledMinus, StyledStepper,
} from './Styles';

const Stepper = ({ isMinimal, increase, decrease }) => (
  <StyledStepper>
    <StyledIncrease onClick={() => increase()}>
      <StyledPlus viewBox="0 0 20 14" />
    </StyledIncrease>
    <StyledDecrease onClick={!isMinimal ? () => decrease() : undefined} minimal={+isMinimal}>
      <StyledMinus viewBox="0 0 20 14" />
    </StyledDecrease>
  </StyledStepper>
);

Stepper.propTypes = {
  isMinimal: PropTypes.bool,
  increase: PropTypes.func,
  decrease: PropTypes.func,
};

Stepper.defaultProps = {
  isMinimal: false,
  increase: null,
  decrease: null,
};

export default Stepper;
