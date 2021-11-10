import React, { useState } from 'react';
import { authTyping } from '../App/store/auth';
import GCPanel from './GCPanel';

const Core = ({ authData }) => {
  const [selected, setSelect] = useState('');
  return (
    <GCPanel
      userData={authData.data}
      groupSelection={{ selected, setSelect }}
      userLogged={!!authData.token}
    />
  );
};

Core.propTypes = {
  authData: authTyping,
};

Core.defaultProps = {
  authData: null,
};

export default Core;
