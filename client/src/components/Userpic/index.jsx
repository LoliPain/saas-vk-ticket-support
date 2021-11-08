import React from 'react';
import PropTypes from 'prop-types';
import { StyledPicWrapper, StyledPic } from './Styles';
import DefaultUser from '../../assets/User.png';

export function UserPic({ userUrl, className }) {
  if (userUrl) {
    return (
      <StyledPicWrapper className={className}>
        <StyledPic src={userUrl} />
      </StyledPicWrapper>
    );
  }
  return (
    <StyledPicWrapper className={className}>
      <StyledPic src={DefaultUser} />
    </StyledPicWrapper>
  );
}

export function MinimalUserPic({ userUrl, size }) {
  if (userUrl) {
    return <StyledPic src={userUrl} style={{ transform: `scale(${size})` }} minimal />;
  }
  return <StyledPic src={DefaultUser} style={{ transform: `scale(${size})` }} minimal />;
}

UserPic.propTypes = {
  userUrl: PropTypes.string,
  className: PropTypes.string,
};

UserPic.defaultProps = {
  userUrl: DefaultUser,
  className: '',
};

MinimalUserPic.propTypes = {
  userUrl: PropTypes.string,
  size: PropTypes.string,
};

MinimalUserPic.defaultProps = {
  size: '0.5',
  userUrl: DefaultUser,
};
