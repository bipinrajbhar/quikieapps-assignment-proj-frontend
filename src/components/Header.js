import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignout } from '../redux/index';

const Header = ({ user, signout }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    signout();
  };
  return (
    <header>
      {!user.loading && (
        <nav className="container mx-auto grid grid-cols-2 p-6">
          <Link to="/" className="self-center text-gray-900 font-bold text-xl">
            QuikieApps
          </Link>
          {!user.isAuth ? (
            <ul className="ml-auto grid grid-cols-2 gap-4">
              <li className="self-center">
                <Link
                  className="inline-block border-b-2 border-transparent hover:border-gray-900 transition duration-200"
                  to="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="self-center">
                <Link
                  className="inline-block text-white bg-gray-900 py-2 px-4 rounded-md transition duration-200 transform hover:-translate-y-1"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="relative ml-auto">
              <li>
                <button
                  className="flex items-center"
                  onClick={() => setOpen(!open)}
                >
                  <img
                    className="w-10 h-10 rounded-full border-2 border-gray-900"
                    src={user.user.userImg}
                    alt={user.user.username}
                  />
                </button>
                <ul
                  className={`bg-white  absolute right-0 mt-4 w-48 border-2 border-gray-900 rounded-md py-2  z-50 ${
                    open ? 'visble' : 'hidden'
                  }`}
                >
                  <li className="w-full text-center m-2">
                    <a href="#">{user.user.username}</a>
                  </li>
                  <li className="w-full text-center m-2">
                    <button
                      className="border-b-2 border-transparent hover:border-gray-900 transition duration-200"
                      onClick={handleClick}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </nav>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(userSignout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
