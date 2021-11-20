import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { authTyping } from '../App/store/auth';
import GroupControlPanel from './GroupControlPanel';
import LogoutModal from './LogoutModal';
import GroupModal from './GroupModal';
import AuthModal from './AuthModal';

const Modal = ({ instance, modalControl, group }) => {
  switch (instance) {
    case 'auth':
      return <AuthModal modalControl={modalControl} />;
    case 'logout':
      return <LogoutModal modalControl={modalControl} />;
    case 'newGroup':
      return <GroupModal modalControl={modalControl} />;
    case 'changeGroup':
      return <GroupModal modalControl={modalControl} group={group} />;
    default:
      return null;
  }
};

const Core = ({ authData }) => {
  const [selected, setSelect] = useState('');
  const [modal, modalControl] = useState('');
  const closeKeyModal = useCallback((event) => {
    if (event.keyCode === 27) {
      modalControl('');
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', closeKeyModal, false);
    return () => {
      document.removeEventListener('keydown', closeKeyModal, false);
    };
  });
  return (
    <>
      <Modal instance={modal} modalControl={modalControl} group={selected} />
      <GroupControlPanel
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
