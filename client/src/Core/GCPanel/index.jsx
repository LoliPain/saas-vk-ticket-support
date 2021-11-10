import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledGCPanel,
  StyledGCPanelFooter,
  StyledGCPanelFooterElement,
  StyledGCPanelUser,
  StyledGCPanelWrapper,
  StyledGCPanelMinimize,
  StyledGCPanelContent,
  StyledGCPanelStepper,
  StyledGCPanelTitle,
  StyledGCPanelAbsWrapper,
  StyledGCPanelUserData,
  StyledGCPanelUserName,
  StyledGCPanelUserStatus,
  StyledGCPanelUserPic, StyledGCPanelGroups, StyledGCPanelEmpty, StyledGCPanelEmptyTitle,
} from './Styles';
import { emptyAuthData } from '../../App/store/auth';
import { supportLink, sourceCodeLink } from '../../App/global';
import Group from '../../components/Group';

const openUserModal = (mode) => (mode /* TODO open login/logout modal */);

const User = ({
  userPicUrl, fullName, userStatusString, userLogged,
}) => {
  let fullNameLoc = fullName;
  let userStatusStringLoc = userStatusString;
  if (!userLogged) {
    fullNameLoc = 'Авторизация';
    userStatusStringLoc = 'Войдите чтобы воспользоваться сервисом';
  }
  return (
    <StyledGCPanelUser>
      <StyledGCPanelUserPic changeAuth={() => openUserModal(userLogged)} userUrl={userPicUrl} />
      <StyledGCPanelUserData>
        <StyledGCPanelUserName>
          {fullNameLoc}
        </StyledGCPanelUserName>
        <StyledGCPanelUserStatus>
          {userStatusStringLoc}
        </StyledGCPanelUserStatus>
      </StyledGCPanelUserData>
    </StyledGCPanelUser>
  );
};

function statusSet(countString) {
  const count = parseInt(countString, 10);
  if (!Number.isNaN(count)) {
    if (count > 0) {
      return 'created';
    }
    return 'createdL';
  }
  return 'rejected';
}

const Groups = ({ userGroups, setSelect, selected }) => {
  const groupsComponent = [];
  userGroups.forEach(
    (group) => groupsComponent.push(
      <Group
        key={group.groupName}
        groupName={group.groupName}
        status={statusSet(group.count)}
        count={!Number.isNaN(parseInt(group.count, 10)) ? group.count : '!'}
        selected={selected === group.groupName}
        select={() => setSelect(group.groupName)}
        errorDesc={Number.isNaN(parseInt(group.count, 10)) ? group.count : ''}
      />,
    ),
  );
  if (userGroups.length) {
    return (
      <StyledGCPanel>
        <StyledGCPanelTitle>
          Группы
        </StyledGCPanelTitle>
        <StyledGCPanelContent>
          <StyledGCPanelAbsWrapper>
            <StyledGCPanelStepper />
          </StyledGCPanelAbsWrapper>
          <StyledGCPanelGroups>
            { groupsComponent }
          </StyledGCPanelGroups>
        </StyledGCPanelContent>
      </StyledGCPanel>
    );
  }
  return (
    <StyledGCPanel>
      <StyledGCPanelTitle>
        Группы
      </StyledGCPanelTitle>
      <StyledGCPanelEmpty>
        <StyledGCPanelAbsWrapper>
          <StyledGCPanelStepper isMinimal />
        </StyledGCPanelAbsWrapper>
        <StyledGCPanelEmptyTitle>
          Пока что тут пусто,
          <br />
          добавьте новую группу
          <br />
          и начните работу
        </StyledGCPanelEmptyTitle>
      </StyledGCPanelEmpty>
    </StyledGCPanel>
  );
};

const GCPanel = ({
  userData, userPicUrl, userStatus, userLogged, groupSelection,
}) => {
  const { fullName, userGroups } = userData;
  const [minimized, toggleMinimize] = useState(false);
  let userStatusString = 'Подписка неактивна';
  if (userStatus) {
    userStatusString = `Подписка активна до ${userStatus}`;
  }
  const minimize = () => (toggleMinimize(!minimized));
  return (
    <StyledGCPanelWrapper minimized={minimized}>
      <StyledGCPanelMinimize updateStatus={minimize} status={minimized} />
      {!minimized ? (
        <>
          <User
            userLogged={userLogged}
            userStatusString={userStatusString}
            userPicUrl={userPicUrl}
            fullName={fullName}
          />
          <Groups
            userGroups={userGroups}
            setSelect={groupSelection.setSelect}
            selected={groupSelection.selected}
          />
          <StyledGCPanelFooter>
            <StyledGCPanelFooterElement target="_blank" rel="noopener noreferrer" href={supportLink}>
              Помощь
            </StyledGCPanelFooterElement>
            <StyledGCPanelFooterElement target="_blank" rel="noopener noreferrer" href={sourceCodeLink}>
              Исходный код
            </StyledGCPanelFooterElement>
          </StyledGCPanelFooter>
        </>
      ) : (
        <>
        </>
      )}
    </StyledGCPanelWrapper>
  );
};

GCPanel.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string,
    userGroups: PropTypes.arrayOf(PropTypes.object),
  }),
  userPicUrl: PropTypes.string,
  userStatus: PropTypes.string,
  userLogged: PropTypes.bool,
  groupSelection: PropTypes.shape({
    selected: PropTypes.string,
    setSelect: PropTypes.func,
  }).isRequired,
};

GCPanel.defaultProps = {
  userData: emptyAuthData.data,
  userPicUrl: '',
  userStatus: '',
  userLogged: false,
};

Groups.propTypes = {
  userGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

User.propTypes = {
  fullName: PropTypes.string.isRequired,
  userPicUrl: PropTypes.string.isRequired,
  userStatusString: PropTypes.string.isRequired,
  userLogged: PropTypes.bool.isRequired,
};

openUserModal.propTypes = {
  mode: PropTypes.bool.isRequired,
};

export default GCPanel;
