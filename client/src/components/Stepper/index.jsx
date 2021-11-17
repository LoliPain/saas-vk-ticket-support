import React from 'react';
import PropTypes from 'prop-types';
import {
  Increase, PlusInline, Decrease, MinusInline, StepperWrapper,
} from './Styles';

const Stepper = ({
  isMinimal,
  increase,
  decrease,
  className,
}) => (
  <StepperWrapper className={className}>
    <Increase onClick={() => increase()}>
      <PlusInline viewBox="0 0 20 14" />
    </Increase>
    <Decrease onClick={!isMinimal ? () => decrease() : undefined} minimal={+isMinimal}>
      <MinusInline viewBox="0 0 20 14" />
    </Decrease>
  </StepperWrapper>
);

Stepper.propTypes = {
  isMinimal: PropTypes.bool,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  className: PropTypes.string,
};

Stepper.defaultProps = {
  isMinimal: false,
  increase: null,
  decrease: null,
  className: '',
};

export default Stepper;
