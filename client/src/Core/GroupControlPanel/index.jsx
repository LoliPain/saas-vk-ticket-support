import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  GCPanel,
  GCPanelFooter,
  GCPanelFooterElement,
  GCPanelUser,
  GCPanelWrapper,
  GCPanelMinimize,
  GCPanelContent,
  GCPanelStepper,
  GCPanelTitle,
  GCPanelAbsWrapper,
  GCPanelUserData,
  GCPanelUserName,
  GCPanelUserStatus,
  GCPanelUserPic, GCPanelGroups, GCPanelEmpty, GCPanelEmptyTitle,
} from './Styles';
import { supportLink, sourceCodeLink } from '../../App/global';
import Group from '../../components/Group';

const User = (
  {
    userPicUrl,
    fullName,
    userStatusString,
    userLogged,
    modalControl,
  },
) => {
  let fullNameLoc = fullName;
  let userStatusStringLoc = userStatusString;
  if (!userLogged) {
    fullNameLoc = 'Авторизация';
    userStatusStringLoc = 'Войдите чтобы воспользоваться сервисом';
  }
  return (
    <GCPanelUser>
      <GCPanelUserPic
        changeAuth={() => (userLogged ? modalControl('logout') : modalControl('auth'))}
        userUrl={userPicUrl}
      />
      <GCPanelUserData>
        <GCPanelUserName>
          {fullNameLoc}
        </GCPanelUserName>
        <GCPanelUserStatus>
          {userStatusStringLoc}
        </GCPanelUserStatus>
      </GCPanelUserData>
    </GCPanelUser>
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

const Groups = (
  {
    userGroups,
    setSelect,
    selected,
    modalControl,
    userLogged,
  },
) => {
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
      <GCPanel>
        <GCPanelTitle>
          Группы
        </GCPanelTitle>
        <GCPanelContent>
          <GCPanelAbsWrapper>
            <GCPanelStepper
              increase={() => modalControl('newGroup')}
              decrease={() => modalControl('changeGroup')}
            />
          </GCPanelAbsWrapper>
          <GCPanelGroups>
            { groupsComponent }
          </GCPanelGroups>
        </GCPanelContent>
      </GCPanel>
    );
  }
  return (
    <GCPanel>
      <GCPanelTitle>
        Группы
      </GCPanelTitle>
      <GCPanelEmpty>
        <GCPanelAbsWrapper>
          <GCPanelStepper
            isMinimal
            increase={() => (userLogged ? modalControl('newGroup') : modalControl('auth'))}
          />
        </GCPanelAbsWrapper>
        <GCPanelEmptyTitle>
          Пока что тут пусто,
          <br />
          добавьте новую группу
          <br />
          и начните работу
        </GCPanelEmptyTitle>
      </GCPanelEmpty>
    </GCPanel>
  );
};

const GroupControlPanel = (
  {
    userData,
    userPicUrl,
    userStatus,
    userLogged,
    groupSelection,
    modalControl,
  },
) => {
  const { fullName, userGroups } = userData;
  const [minimized, toggleMinimize] = useState(false);
  let userStatusString = 'Подписка неактивна';
  if (userStatus) {
    userStatusString = `Подписка активна до ${userStatus}`;
  }
  const minimize = () => (toggleMinimize(!minimized));
  return (
    <GCPanelWrapper minimized={minimized}>
      <GCPanelMinimize updateStatus={minimize} status={minimized} />
      {!minimized ? (
        <>
          <User
            userLogged={userLogged}
            userStatusString={userStatusString}
            userPicUrl={userPicUrl}
            fullName={fullName}
            modalControl={modalControl}
          />
          <Groups
            userGroups={userGroups}
            setSelect={groupSelection.setSelect}
            selected={groupSelection.selected}
            modalControl={modalControl}
            userLogged={userLogged}
          />
          <GCPanelFooter>
            <GCPanelFooterElement target="_blank" rel="noopener noreferrer" href={supportLink}>
              Помощь
            </GCPanelFooterElement>
            <GCPanelFooterElement target="_blank" rel="noopener noreferrer" href={sourceCodeLink}>
              Исходный код
            </GCPanelFooterElement>
          </GCPanelFooter>
        </>
      ) : (
        <>
        </>
      )}
    </GCPanelWrapper>
  );
};

GroupControlPanel.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string,
    userGroups: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  userPicUrl: PropTypes.string,
  userStatus: PropTypes.string,
  userLogged: PropTypes.bool.isRequired,
  groupSelection: PropTypes.shape({
    selected: PropTypes.string,
    setSelect: PropTypes.func,
  }).isRequired,
  modalControl: PropTypes.func.isRequired,
};

GroupControlPanel.defaultProps = {
  userPicUrl: '',
  userStatus: '',
};

Groups.propTypes = {
  userGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  modalControl: PropTypes.func.isRequired,
  userLogged: PropTypes.bool.isRequired,
};

User.propTypes = {
  fullName: PropTypes.string.isRequired,
  userPicUrl: PropTypes.string.isRequired,
  userStatusString: PropTypes.string.isRequired,
  userLogged: PropTypes.bool.isRequired,
  modalControl: PropTypes.func.isRequired,
};

export default GroupControlPanel;
