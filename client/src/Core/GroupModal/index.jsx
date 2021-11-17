import React from 'react';
import PropTypes from 'prop-types';

/*
const BaseModal = ({ groupData }) => {

};
*/
const GroupModal = ({ group }) => {
  if (group) {
    return (
      <div>
        Edit group
        {group}
      </div>
    );
  }
  return <div>New group</div>;
};

GroupModal.propTypes = {
  /* modalControl: PropTypes.func.isRequired, */
  group: PropTypes.string,
};

GroupModal.defaultProps = {
  group: '',
};

export default GroupModal;
