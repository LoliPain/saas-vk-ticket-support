import React from 'react';
import PropTypes from 'prop-types';
import { PicWrapper, Pic } from './Styles';
import DefaultUser from '../../assets/User.png';

export const UserPic = ({ userUrl, className, changeAuth }) => (
  <PicWrapper className={className} onClick={changeAuth}>
    <Pic src={userUrl || DefaultUser} />
  </PicWrapper>
);

export const MinimalUserPic = ({ userUrl, size }) => (
  <Pic src={userUrl || DefaultUser} style={{ transform: `scale(${size})` }} />
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
