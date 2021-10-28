import React from 'react';
import PropTypes from 'prop-types';
import { StyledPicWrapper, StyledPic } from './Styles';
import DefaultUser from './User.png';

export function UserPic({ userUrl }) {
  if (userUrl) {
    return (
      <StyledPicWrapper>
        <StyledPic src={userUrl} />
      </StyledPicWrapper>
    );
  }
  return (
    <StyledPicWrapper>
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
  userUrl: PropTypes.string.isRequired,
};

MinimalUserPic.propTypes = {
  userUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

MinimalUserPic.defaultProps = {
  size: '0.5',
};
