import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import {
  addUserAction,
  getUsersForValidationThunk,
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
    margin: "17px auto 0 auto",
    cursor: "pointer",
  },

  createAccountButton: {
    width: "70%",
    height: "37px",
    margin: "23px auto 0 auto",
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
  const [emailErrorBullean, setemailErrorBullean] = useState(false);
  const [passwordErrorBullean, setPasswordErrorBullean] = useState(false);

  const submitValidation = (values, resetForm) => {
    setemailErrorBullean(false);
    setPasswordErrorBullean(false);
    let userExist = false;
    userCheck.forEach((el) => {
      if (el.email === values.email) {
        userExist = true;
        if (el.password === values.password) {
          setemailErrorBullean(false);
          setPasswordErrorBullean(false);
          localStorage.setItem("user", JSON.stringify(el.id));
          dispatch(addUserAction(el));
          navigate("/");
          resetForm();
        } else {
          setPasswordErrorBullean(true);
          setPasswordError("Invalid password");
        }
      }
    });

    if (!userExist) {
      setemailErrorBullean(true);
      setEmailError("Invalid email");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        submitValidation(values, resetForm);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.main}>
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
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            className={classes.button}
          >
            Log In
          </Button>
          <Typography className={classes.forgotPassword}>
            Forgot password?
          </Typography>
          <Button
            variant="outlined"
            className={classes.createAccountButton}
            onClick={() => navigate("/registration")}
          >
            Create account
          </Button>
        </form>
      )}
    </Formik>
  );
}
