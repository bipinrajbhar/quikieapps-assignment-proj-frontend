import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { asyncUserSignup, clearError } from '../redux';
import TextError from './TextError';
import ImgUpload from './ImgUpload';

const initialValues = {
  username: '',
  email: '',
  password: '',
  userImg: '',
};

const handleSubmit = (values, signup) => {
  signup(values);
};

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2)
    .max(20)
    .matches(/^[A-Zz-z]+$/i, {
      message: "Hmmm, that name doesn't look right",
    })
    .required('Please provide your name'),
  email: yup
    .string()
    .email("Hmm, that email doesn't look right")
    .required('Please provide your email'),
  password: yup
    .string()
    .min(8)
    .max(20)
    .required('Please provide your password'),
  userImg: yup.string().required('Please provide your image'),
});

const SignUp = ({ user, asyncUserSignup, error, clearError }) => {
  useEffect(() => {
    clearError();
  }, []);

  if (user.isAuth) {
    return <Redirect to="/users" />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values, asyncUserSignup)}
    >
      <Form className="max-w-md mx-auto grid p-6 ">
        {error.msg && <TextError>{error.msg}</TextError>}
        <div className="my-4">
          <Field
            className="w-full border-2 border-gray-900 rounded-md p-2 mb-2 outline-none focus:border-indigo-500"
            type="text"
            name="username"
            placeholder="Name"
          />
          <ErrorMessage name="username" component={TextError} />
        </div>
        <div className="mb-4">
          <Field
            className="w-full border-2 border-gray-900 rounded-md p-2 mb-2 outline-none focus:border-indigo-500"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="mb-4 z-50">
          <Field
            className="w-full border-2 border-gray-900 rounded-md p-2 mb-2 outline-none focus:border-indigo-500"
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component={TextError} />
        </div>
        <Field name="userImg" children={ImgUpload} />
        <button
          className="text-white bg-gray-900 font-bold rounded-md py-2 transition duration-200 transform hover:-translate-y-1 focus:outline-none"
          type="submit"
        >
          Sign up
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
    asyncUserSignup: (data) => dispatch(asyncUserSignup(data)),
    clearError: () => dispatch(clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
