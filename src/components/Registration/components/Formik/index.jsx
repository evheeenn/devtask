import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import {
  getUsersForValidationThunk,
  registrationThunk,
} from "../../../../store/actions";
import { useNavigate } from "react-router-dom";
import { FORM_BLUE } from "../../../../constants/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    padding: "23px 10px 0 10px",
  },

  input: {
    width: "90%",
    margin: "23px auto 0 auto",
  },

  button: {
    width: "90%",
    height: "37px",
    margin: "27px auto 0 auto",
    background: FORM_BLUE,
    "&:hover": {
      background: FORM_BLUE,
    },
  },

  forgotPassword: {
    fontSize: "14px",
    color: FORM_BLUE,
    margin: "14px auto 0 auto",
    cursor: "pointer",
  },

  createAccountButton: {
    width: "70%",
    height: "37px",
    margin: "27px auto 0 auto",
    color: FORM_BLUE,
  },
});

export default function Form() {
  const classes = useStyles();
  const userCheck = useSelector((state) => state.usersForValidation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsersForValidationThunk());
  }, []);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailErrorBullean, setEmailErrorBullean] = useState(false);
  const [passwordErrorBullean, setPasswordErrorBullean] = useState(false);

  const submitRegistration = async (values, resetForm) => {
    const userExist = userCheck.some((user) => user.email === values.email);
    setEmailErrorBullean(false);
    setPasswordErrorBullean(false);
    if (userExist) {
      setEmailError(`User with email ${values.email} already exists!`);
      setEmailErrorBullean(true);
    } else if (values.password !== values.verifyPassword) {
      setPasswordError("Passwords does not match.");
      setPasswordErrorBullean(true);
    } else {
      const newUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        projects: [],
      };
      await dispatch(registrationThunk(newUser));
      resetForm();
      navigate("/");
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", verifyPassword: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        submitRegistration(values, resetForm);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.main}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            required
            className={classes.input}
          />
          {emailErrorBullean ? (
            <TextField
              error
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required
              className={classes.input}
              helperText={emailError}
            />
          ) : (
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required
              className={classes.input}
            />
          )}
          {passwordErrorBullean ? (
            <TextField
              error
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required
              className={classes.input}
              helperText={passwordError}
            />
          ) : (
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required
              className={classes.input}
            />
          )}
          {passwordErrorBullean ? (
            <TextField
              error
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              type="password"
              name="verifyPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.verifyPassword}
              required
              className={classes.input}
              helperText={passwordError}
            />
          ) : (
            <TextField
              id="outlined-basic"
              label="Comfirm password"
              variant="outlined"
              type="password"
              name="verifyPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.verifyPassword}
              required
              className={classes.input}
            />
          )}
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            className={classes.button}
          >
            Create Account
          </Button>
          <Typography
            className={classes.forgotPassword}
            onClick={() => navigate("/login")}
          >
            I already have an account
          </Typography>
        </form>
      )}
    </Formik>
  );
}
