import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { asyncUsers } from '../redux/users/actions';
import { Redirect } from 'react-router-dom';

const Users = ({ currentUser, users, asyncUsers }) => {
  useEffect(() => {
    asyncUsers();
  }, []);

  if (!currentUser.isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form>
        <div className="relative">
          <input
            className="w-full border-2 border-gray-900 rounded-md p-2 pl-10 mb-6 outline-none focus:border-indigo-500"
            type="search"
            placeholder="@example"
          />
          <svg
            className="absolute w-6 h-6 top-0 m-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </form>
      {!users.loading && users.data && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <td className="px-4 py-2 text-gray-900 font-bold">Id</td>
                <td className="px-4 py-2 text-gray-900 font-bold">Username</td>
                <td className="px-4 py-2 text-gray-900 font-bold">Email</td>
                <td className="px-4 py-2 text-gray-900 font-bold">Address</td>
                <td className="px-4 py-2 text-gray-900 font-bold">Phone</td>
                <td className="px-4 py-2 text-gray-900 font-bold">Website</td>
                <td className="px-4 py-2 text-gray-900 font-bold">Company</td>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 text-gray-900">{user.id}</td>
                  <td className="px-4 py-2 text-gray-900">{user.username}</td>
                  <td className="px-4 py-2 text-gray-900">{user.email}</td>
                  <td className="px-4 py-2 text-gray-900">
                    {user.address.street}
                  </td>
                  <td className="px-4 py-2 text-gray-900">{user.phone}</td>
                  <td className="px-4 py-2 text-gray-900">{user.website}</td>
                  <td className="px-4 py-2 text-gray-900">
                    {user.company.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    asyncUsers: () => dispatch(asyncUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
