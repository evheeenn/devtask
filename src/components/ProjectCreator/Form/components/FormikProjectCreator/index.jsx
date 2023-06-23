import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Switch, TextField, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Project } from "../../../../../classes/classes";
import { updateUserThunk } from "../../../../../store/actions";
import { useNavigate } from "react-router-dom";

export default function FormikProjectCreator() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((store) => store.user);

  const [sprints, setSprints] = useState(false);

  const spritsValue = () => {
    setSprints(!sprints);
  };

  const [deadlineBullean, setDeadlineBullean] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const deadlineBulleanValue = () => {
    setDeadlineBullean(!deadlineBullean);
    if(deadlineBullean == false){
      setSelectedDate(null)
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const styles = {
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

    deadline: {
      width: "37%",
      margin: "8px 0 8px 0",
      display: deadlineBullean ? "flex" : "none",
    },

    switchLabel: {
      color: "#535bc8",
      fontWeight: 600,
    },

    deadlineError: {
      display: !deadlineBullean ? 'none' : deadlineError.length > 0 ? "inherit" : "none",
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
      color: "#d32f2f",
    },

    submitButton: {
      marginTop: "27px",
      background: "#535bc8",
    },
  };

  const validation = (values, resetForm) => {
    setNameError("");
    setDescriptionError("");
    setDeadlineError("");
    const nameExist = user.projects.find((item) => item.name === values.name);
    const today = new Date();

    if(!values.name.includes(' ')){
      if (values.name.length <= 27) {
        if (!nameExist) {
          if (values.description.length <= 150) {
            if (deadlineBullean) {
              if (selectedDate !== null) {
                if (selectedDate && selectedDate.isAfter(today, "day")) {
                  const newProject = new Project(values.name, values.description, sprints, deadlineBullean, selectedDate, today)
                  user.projects.push(newProject)
                  dispatch(updateUserThunk(user))
                  navigate('/')
                } else {
                  setDeadlineError("Invalid deadline");
                }
              } else {
                setDeadlineError("Please, select deadline");
              }
            } else {
              const newProject = new Project(values.name, values.description, sprints, deadlineBullean, selectedDate, today)
              user.projects.push(newProject)
              dispatch(updateUserThunk(user))
              navigate('/')
            }
          } else {
            setDescriptionError("No more than 150 letters");
          }
        } else {
          setNameError(`Project with name ${values.name} already exists`);
        }
      }  else {
        setNameError("Not more than 25 letters");
      } 
    } else {
      setNameError("Space cannot be used in the name");
    }
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
          <form onSubmit={handleSubmit} style={styles.form}>
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
                  sx={styles.name}
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
                  sx={styles.name}
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
                  sx={styles.description}
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
                  sx={styles.description}
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={styles.switchLabel}>
                Sprints
              </Typography>
              <Switch onClick={spritsValue} sx={{ margin: "7px 0 0 0" }} />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", color: "#4c4c4c" }}
            >
              * For large collective projects
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={styles.switchLabel}>
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
                sx={styles.deadline}
                required
              />
            </LocalizationProvider>
            <Typography sx={styles.deadlineError}>{deadlineError}</Typography>
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={styles.submitButton}
            >
              Create new project
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
