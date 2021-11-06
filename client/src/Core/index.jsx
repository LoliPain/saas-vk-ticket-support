import React from 'react';
import { authTyping } from '../App/store/auth';

const Core = ({ authData }) => {
  if (authData) {
    return <div>Authed</div>;
  }
  return <div>Not authed</div>;
};

Core.propTypes = {
  authData: authTyping,
};

Core.defaultProps = {
  authData: null,
};

export default Core;
