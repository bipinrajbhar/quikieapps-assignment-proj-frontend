import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  asyncUsers,
  sortUserByAscOrder,
  sortUserByDescOrder,
} from '../redux/users/actions';
import { Redirect } from 'react-router-dom';

const Users = ({
  currentUser,
  users,
  asyncUsers,
  sortUserByAscOrder,
  sortUserByDescOrder,
}) => {
  const [order, setOrder] = useState(true);

  useEffect(() => {
    asyncUsers();
  }, []);

  if (!currentUser.isAuth) {
    return <Redirect to="/" />;
  }

  const handleClick = (data, order) => {
    if (!order) {
      sortUserByAscOrder(data);
    } else {
      sortUserByDescOrder(data);
    }
  };

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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
                <td className="px-4 py-2 text-gray-900 font-bold">
                  <button
                    className="flex items-center flex-no-shrink transition duration-200 hover:text-indigo-500 focus:outline-none"
                    onClick={() => {
                      setOrder(!order);
                      handleClick('username', order);
                    }}
                  >
                    <span>Username</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                    </svg>
                  </button>
                </td>
                <td className="px-4 py-2 text-gray-900 font-bold">
                  <button
                    className="flex items-center flex-no-shrink transition duration-200 hover:text-indigo-500 focus:outline-none"
                    onClick={() => {
                      setOrder(!order);
                      handleClick('email', order);
                    }}
                  >
                    <span>Email</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                    </svg>
                  </button>
                </td>
                <td className="px-4 py-2 text-gray-900 font-bold">
                  <button
                    className="flex items-center flex-no-shrink transition duration-200 hover:text-indigo-500 focus:outline-none"
                    onClick={() => {
                      setOrder(!order);
                      handleClick('[address.street]', order);
                    }}
                  >
                    <span>Address</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                    </svg>
                  </button>
                </td>
                <td className="px-4 py-2 text-gray-900 font-bold">
                  <button
                    className="flex items-center flex-no-shrink transition duration-200 hover:text-indigo-500 focus:outline-none"
                    onClick={() => {
                      setOrder(!order);
                      handleClick('phone', order);
                    }}
                  >
                    <span>Phone</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                    </svg>
                  </button>
                </td>
                <td className="px-4 py-2 text-gray-900 font-bold">
                  <button
                    className="flex items-center flex-no-shrink transition duration-200 hover:text-indigo-500 focus:outline-none"
                    onClick={() => {
                      setOrder(!order);
                      handleClick('website', order);
                    }}
                  >
                    <span>Website</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                    </svg>
                  </button>
                </td>
                <td className="px-4 py-2 text-gray-900 font-bold">
                  <button
                    className="flex items-center flex-no-shrink transition duration-200 hover:text-indigo-500 focus:outline-none"
                    onClick={() => {
                      setOrder(!order);
                      handleClick('company', order);
                    }}
                  >
                    <span>Company</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                    </svg>
                  </button>
                </td>
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
    sortUserByAscOrder: (data) => dispatch(sortUserByAscOrder(data)),
    sortUserByDescOrder: (data) => dispatch(sortUserByDescOrder(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
