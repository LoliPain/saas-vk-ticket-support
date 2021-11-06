import PropTypes from 'prop-types';

export const emptyAuthData = { token: '', data: { fullName: '', userGroups: [] } };

export const authTyping = (
  PropTypes.exact({
    token: PropTypes.string,
    data: PropTypes.shape({
      fullName: PropTypes.string,
      userGroups: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
  })
);

export const setAuthData = (token, credentials) => (
  localStorage.setItem('auth', JSON.stringify({ token, data: credentials }))
);

export const getAuthData = () => (
  JSON.parse(localStorage.getItem('auth')) || emptyAuthData
);

export const removeAuthData = () => localStorage.removeItem('auth');
