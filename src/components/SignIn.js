import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { asyncUserSignin, clearError } from '../redux/index';
import TextError from './TextError';
import { Redirect } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Hmm, that email doesn't look right")
    .required('Please provide your email'),
  password: yup.string().required('Please provide the password'),
});

const SignUp = ({ history, user, signin, error, clearError }) => {
  useEffect(() => {
    clearError();
  }, []);

  const handleSubmit = (values) => {
    signin(values);

    if (user.isAuth) {
      history.push('/users/');
    }
  };

  if (user.isAuth) {
    console.log(user);
    return <Redirect to="/users" />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, history) => handleSubmit(values, history)}
    >
      <Form className="max-w-md mx-auto grid p-6">
        {error.msg && <TextError>{error.msg}</TextError>}
        <div className="mb-4 mt-4">
          <Field
            className="w-full border-2 border-gray-900 rounded-md p-2 mb-2 outline-none focus:border-indigo-500"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="mb-6">
          <Field
            className="w-full border-2 border-gray-900 rounded-md p-2 mb-2 outline-none focus:border-indigo-500"
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component={TextError} />
        </div>

        <button
          className="text-white bg-gray-900 font-bold rounded-md py-2 transition duration-200 transform hover:-translate-y-1 focus:outline-none"
          type="submit"
        >
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (data) => dispatch(asyncUserSignin(data)),
    clearError: () => dispatch(clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
