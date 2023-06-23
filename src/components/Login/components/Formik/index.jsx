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
      margin: "17px auto 0 auto",
      cursor: "pointer",
    },

    createAccountButton: {
      width: "70%",
      height: "37px",
      margin: "23px auto 0 auto",
      color: "#3F4BF2",
    },
  };

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
          navigate('/')
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
        <form onSubmit={handleSubmit} style={styles.main}>
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
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={styles.button}
          >
            Log In
          </Button>
          <Typography sx={styles.forgotPassword}>Forgot password?</Typography>
          <Button
            variant="outlined"
            sx={styles.createAccountButton}
            onClick={() => navigate("/registration")}
          >
            Create account
          </Button>
        </form>
      )}
    </Formik>
  );
}
