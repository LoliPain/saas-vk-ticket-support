import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { authTyping } from '../App/store/auth';
import GCPanel from './GCPanel';
import LogoutModal from './LogoutModal';

const Modal = ({ instance, modalControl, group }) => {
  switch (instance) {
    case 'logout':
      return <LogoutModal modalControl={modalControl} />;
    default:
      return null;
  }
};

const Core = ({ authData }) => {
  const [selected, setSelect] = useState('');
  const [modal, modalControl] = useState('');
  return (
    <>
      <Modal instance={modal} modalControl={modalControl} group={selected} />
      <GCPanel
        userData={authData.data}
        groupSelection={{ selected, setSelect }}
        modalControl={modalControl}
        userLogged={!!authData.token}
      />
    </>
  );
};

Core.propTypes = {
  authData: authTyping.isRequired,
};

Modal.propTypes = {
  instance: PropTypes.string.isRequired,
  modalControl: PropTypes.func.isRequired,
  group: PropTypes.string.isRequired,
};

export default Core;
