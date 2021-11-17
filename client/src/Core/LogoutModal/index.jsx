import React from 'react';
import PropTypes from 'prop-types';
import {
  LogoutModalBG,
  LogoutModalBox,
  LogoutModalFooter,
  LogoutModalTitle,
} from './Styles';
import AnyButton from '../../components/AnyButton';
import { color } from '../../assets/baseStyles';
import { removeAuthData } from '../../App/store/auth';

const LogoutAction = (modalControl) => {
  removeAuthData();
  modalControl('');
  document.location.reload();
};

const LogoutModal = ({ modalControl }) => (
  <LogoutModalBG>
    <LogoutModalBox>
      <LogoutModalTitle>
        Подтвердите выход из аккаунта
      </LogoutModalTitle>
      <LogoutModalFooter>
        <AnyButton inline label="Отмена" onClick={() => modalControl('')} />
        <AnyButton inline fill={color.rejected} label="Выйти" onClick={() => LogoutAction(modalControl)} />
      </LogoutModalFooter>
    </LogoutModalBox>
  </LogoutModalBG>
);

LogoutModal.propTypes = {
  modalControl: PropTypes.func.isRequired,
};

export default LogoutModal;
