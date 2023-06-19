import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import {
  getUsersForValidationThunk,
  registrationThunk,
} from "../../../../store/actions";
import User from "../../../../classes/classes";

export default function Form() {
  const styles = {
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
      background: "#3F4BF2",
      "&:hover": {
        background: "#3F4BF2",
      },
    },

    forgotPassword: {
      fontSize: "14px",
      color: "#3F4BF2",
      margin: "14px auto 0 auto",
      cursor: "pointer",
    },

    createAccountButton: {
      width: "70%",
      height: "37px",
      margin: "27px auto 0 auto",
      color: "#3F4BF2",
    },
  };

  const userCheck = useSelector((state) => state.usersForValidation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersForValidationThunk());
  }, []);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailErrorBullean, setemailErrorBullean] = useState(false);
  const [passwordErrorBullean, setpasswordErrorBullean] = useState(false);

  const submitRegistration = async (values, resetForm) => {
    const userExist = userCheck.some((user) => user.email === values.email);
    setemailErrorBullean(false);
    setpasswordErrorBullean(false);
    if (userExist) {
      setEmailError(`User with email ${values.email} already exists!`);
      setemailErrorBullean(true);
    } else if (values.password !== values.verifyPassword) {
      setPasswordError("Passwords does not match.");
      setpasswordErrorBullean(true);
    } else {
      const newUser = new User(values.name, values.email, values.password);
      await dispatch(registrationThunk(newUser));
      resetForm();
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
        <form onSubmit={handleSubmit} style={styles.main}>
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
            sx={styles.input}
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
              sx={styles.input}
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
              sx={styles.input}
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
              sx={styles.input}
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
              sx={styles.input}
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
              sx={styles.input}
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
              sx={styles.input}
            />
          )}
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={styles.button}
          >
            Create Account-
            
          </Button>
          <Typography sx={styles.forgotPassword}>
            I already have an account
          </Typography>
        </form>
      )}
    </Formik>
  );
}
