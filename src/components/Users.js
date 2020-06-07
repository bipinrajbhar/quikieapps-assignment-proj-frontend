import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { asyncUsers } from '../redux/users/actions';
import { Redirect } from 'react-router-dom';
import UserTable from './UserTable';

const Users = ({ currentUser, rxUsers, asyncUsers }) => {
  useEffect(() => {
    asyncUsers();
  }, []);

  if (!currentUser.token) {
    return <Redirect to="/" />;
  }

  return <>{rxUsers.data && <UserTable rxUsers={rxUsers.data} />}</>;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    rxUsers: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    asyncUsers: () => dispatch(asyncUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
