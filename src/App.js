import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Users from './components/Users';
import { asyncUserAutoSignin } from './redux/index';

function App({ user, autoSignin }) {
  useEffect(() => {
    autoSignin();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <Switch>
          <Route exact path="/signup/" component={SignUp} />
          <Route exact path="/signin/" component={SignIn} />
          <Route exact path="/users/" component={Users} />
        </Switch>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoSignin: () => dispatch(asyncUserAutoSignin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
