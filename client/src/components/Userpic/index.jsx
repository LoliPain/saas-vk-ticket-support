import React from 'react';
import PropTypes from 'prop-types';
import { StyledPicWrapper, StyledPic } from './Styles';
import DefaultUser from '../../assets/User.png';

export const UserPic = ({ userUrl, className, changeAuth }) => (
  <StyledPicWrapper className={className} onClick={changeAuth}>
    <StyledPic src={userUrl || DefaultUser} />
  </StyledPicWrapper>
);

export const MinimalUserPic = ({ userUrl, size }) => (
  <StyledPic src={userUrl || DefaultUser} style={{ transform: `scale(${size})` }} minimal />
);

UserPic.propTypes = {
  userUrl: PropTypes.string.isRequired,
  changeAuth: PropTypes.func.isRequired,
  className: PropTypes.string,
};

MinimalUserPic.propTypes = {
  userUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

UserPic.defaultProps = {
  className: '',
};

MinimalUserPic.defaultProps = {
  size: '0.5',
};
