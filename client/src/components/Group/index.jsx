import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledGroupCounter, StyledGroupWrapper, StyledDragBar, StyledGroupName,
  StyledError,
} from './Styles';
import Status from '../Status';

const Group = ({
  status, count, selected, groupName, errorDesc,
}) => (
  <StyledGroupWrapper selected={+selected}>
    <Status status={status} />
    <StyledGroupCounter>
      {count}
    </StyledGroupCounter>
    <StyledGroupName>{groupName}</StyledGroupName>
    <StyledError>{errorDesc}</StyledError>
    <StyledDragBar />
  </StyledGroupWrapper>
);

Group.propTypes = {
  status: PropTypes.string,
  count: PropTypes.string,
  selected: PropTypes.bool,
  groupName: PropTypes.string,
  errorDesc: PropTypes.string,
};

Group.defaultProps = {
  status: 'rejected',
  count: '!',
  selected: false,
  groupName: '',
  errorDesc: '',
};

export default Group;
