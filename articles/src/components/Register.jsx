import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registerUser } from "../action/register";
import { Link, withRouter } from "react-router-dom";

const Register = ({ values, touched, errors }) => {
  return (
    <div className="register">
      <div className="illustration">
        <img
          width="300px"
          src="img/register-illustration.svg"
          alt="lighthouse illustration"
        />
      </div>
      <Form>
        <Field
          className="styled-input"
          name="username"
          value={values.username}
          placeholder="username"
          type="text"
        />
        <Field
          className="styled-input"
          name="password"
          value={values.password}
          placeholder="password"
          type="password"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button className="primary-button" type="submit">
          Register
        </button>
        <div className="register-login">
          Have an account?{" "}
          <Link to="/login" className="button">
            Log in
          </Link>{" "}
        </div>
      </Form>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  }),

  handleSubmit(values, formikBag) {
    console.log(formikBag);
    formikBag.props.registerUser(values);
    formikBag.resetForm({ username: "", password: "" });
    formikBag.props.history.push('/login')
  }
})(Register);

export default withRouter(connect(null, { registerUser })(FormikRegister));
