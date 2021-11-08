import React from 'react';
import { authTyping } from '../App/store/auth';
import GCPanel from './GCPanel';

const Core = ({ authData }) => {
  if (authData.token) {
    return <GCPanel userData={authData.data} userLogged />;
  }
  return <GCPanel userData={authData.data} />;
};

Core.propTypes = {
  authData: authTyping,
};

Core.defaultProps = {
  authData: null,
};

export default Core;
