import React, { useState } from "react";
import { Formik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Switch, TextField, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../../../../../store/actions";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { getRandomColor } from "../../../../../colorThemes/getRandomColor";
import {
  ERROR_RED,
  MAIN_BLUE,
  SEROBUROMALINOVII,
} from "../../../../../constants/styles";
import { createUseStyles } from "react-jss";
import { v4 } from "uuid";

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "27px",
  },

  name: {
    width: "37%",
    margin: "8px 0 8px 0",
    "@media (max-width: 500px)": {
      width: "100%",
    },
  },

  description: {
    width: "62%",
    margin: "8px 0 8px 0",
    "@media (max-width: 500px)": {
      width: "100%",
    },
  },

  switchLabel: {
    color: MAIN_BLUE,
    fontWeight: 600,
  },

  submitButton: {
    marginTop: "17px",
    background: MAIN_BLUE,
  },
});

export default function FormikProjectCreator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  // const [sprints, setSprints] = useState(false);

  // const spritsValue = () => {
  //   setSprints(!sprints);
  // };

  const [deadlineBullean, setDeadlineBullean] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const deadlineBulleanValue = () => {
    setDeadlineBullean(!deadlineBullean);
    if (deadlineBullean == false) {
      setSelectedDate(null);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const validation = (values, resetForm) => {
    setNameError("");
    setDescriptionError("");
    setDeadlineError("");
    const nameExist = user.projects.find((item) => item.name === values.name);
    const today = dayjs();
    const colorCombination = getRandomColor();

    if (!values.name.includes(" ")) {
      if (values.name.length <= 15) {
        if (!nameExist) {
          if (values.description.length <= 25) {
            if (deadlineBullean) {
              if (selectedDate !== null) {
                if (selectedDate && selectedDate.isAfter(today, "day")) {
                  const newProject = {
                    id: v4(),
                    name: values.name,
                    description: values.description,
                    sprints: [],
                    deadlineBullean: deadlineBullean,
                    deadline: selectedDate.format("DD-MM-YYYY HH:mm"),
                    completed: false,
                    textColor: colorCombination.text,
                    backgroundColor: colorCombination.background,
                    middleColor: colorCombination.middleColor,
                    date: today.format("DD-MM-YYYY HH:mm"),
                  };
                  user.projects.push(newProject);
                  dispatch(updateUserThunk(user));
                  navigate("/");
                } else {
                  setDeadlineError("Invalid deadline");
                }
              } else {
                setDeadlineError("Please, select deadline");
              }
            } else {
              const newProject = {
                name: values.name,
                description: values.description,
                sprints: [],
                deadlineBullean: deadlineBullean,
                completed: false,
                textColor: colorCombination.text,
                backgroundColor: colorCombination.background,
                middleColor: colorCombination.middleColor,
                date: today.format("DD-MM-YYYY HH:mm"),
              };
              user.projects.push(newProject);
              dispatch(updateUserThunk(user));
              navigate("/");
            }
          } else {
            setDescriptionError("No more than 25 letters");
          }
        } else {
          setNameError(`Project with name ${values.name} already exists`);
        }
      } else {
        setNameError("Not more than 15 letters");
      }
    } else {
      setNameError("Space cannot be used in the name");
    }
  };

  const classes = useStyles();

  const conditionalStyles = {
    deadline: {
      width: "37%",
      margin: "8px 0 8px 0",
      display: deadlineBullean ? "flex" : "none",
    },

    deadlineError: {
      display: !deadlineBullean
        ? "none"
        : deadlineError.length > 0
        ? "inherit"
        : "none",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
      textAlign: "left",
      marginTop: "3px",
      marginRight: "14px",
      marginBottom: "0",
      marginLeft: "14px",
      color: ERROR_RED,
    },
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          validation(values, resetForm);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (max-width: 500px)": {
                  flexDirection: "column",
                },
              }}
            >
              {nameError.length > 0 ? (
                <TextField
                  className={classes.name}
                  id="outlined-basic"
                  label="Project Name"
                  variant="outlined"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  required
                  error
                  helperText={nameError}
                />
              ) : (
                <TextField
                  className={classes.name}
                  id="outlined-basic"
                  label="Project Name"
                  variant="outlined"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  required
                />
              )}
              {descriptionError.length > 0 ? (
                <TextField
                  className={classes.description}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  type="description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  required
                  error
                  helperText={descriptionError}
                />
              ) : (
                <TextField
                  className={classes.description}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  type="description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  required
                />
              )}
            </Box>
            {/* <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" className={classes.switchLabel}>
                Sprints
              </Typography>
              <Switch onClick={spritsValue} sx={{ margin: "7px 0 0 0" }} />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", color: SEROBUROMALINOVII }}
            >
              * For large collective projects
            </Typography> */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" className={classes.switchLabel}>
                Deadline
              </Typography>
              <Switch
                onClick={deadlineBulleanValue}
                sx={{ margin: "7px 0 0 0" }}
              />
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                onChange={handleDateChange}
                sx={conditionalStyles.deadline}
                required
              />
            </LocalizationProvider>
            <Typography sx={conditionalStyles.deadlineError}>
              {deadlineError}
            </Typography>
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              className={classes.submitButton}
            >
              Create new project
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
