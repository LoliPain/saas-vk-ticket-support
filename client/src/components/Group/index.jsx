import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupCounter, GroupWrapper, DragBar, GroupName,
  Error,
} from './Styles';
import Status from '../Status';

const Group = ({
  status, count, selected, groupName, errorDesc, select,
}) => (
  <GroupWrapper selected={+selected} onClick={select}>
    <Status status={status} />
    <GroupCounter>
      {count}
    </GroupCounter>
    <GroupName>{groupName}</GroupName>
    <Error>{errorDesc}</Error>
    <DragBar />
  </GroupWrapper>
);

Group.propTypes = {
  status: PropTypes.string,
  count: PropTypes.string,
  selected: PropTypes.bool,
  groupName: PropTypes.string,
  errorDesc: PropTypes.string,
  select: PropTypes.func.isRequired,
};

Group.defaultProps = {
  status: 'rejected',
  count: '!',
  selected: false,
  groupName: '',
  errorDesc: '',
};

export default Group;
