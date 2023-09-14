import React, { useState } from "react";
import { Formik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  Switch,
  TextField,
  Typography,
  Button,
  FormControlLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../../../../../../store/actions";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import {
  ERROR_RED,
  MAIN_BLUE,
  SEROBUROMALINOVII,
} from "../../../../../../constants/styles";
import { createUseStyles } from "react-jss";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

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

export default function FormikProjectCreator({ project, setOpen, setEdit }) {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [deadlineDelete, setDeadlineDelete] = useState(false);
  const [newDeadlineSwitch, setNewDeadlineSwitch] = useState(false);
  const [newDeadline, setNewDeadline] = useState(null);

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleDescriptionChange = (description) => {
    setDescription(description);
  };

  const handleDeleteDeadline = () => {
    if (newDeadlineSwitch) {
      // Зберегти поточний дедлайн у `newDeadline`, якщо перемикач "Choose new deadline" включений
      setNewDeadline(project.deadline);
    }
    setDeadlineDelete(!deadlineDelete);
  };

  const handleNewDeadlineSwitch = () => {
    setNewDeadlineSwitch(!newDeadlineSwitch);
  };

  const deadlineWillDeleteBullean = deadlineDelete ? false : true;

  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const validation = (values, resetForm) => {
    setNameError("");
    setDescriptionError("");
    setDeadlineError("");
    const nameExist = user.projects.find((item) => item.name === values.name);
    const today = dayjs();

    if (!values.name.includes(" ")) {
      if (values.name.length <= 15) {
        if (!nameExist) {
          if (values.description.length <= 25) {
            user.projects.forEach((projectItem) => {
              if (projectItem.id === project.id) {
                const indexOfObj = user.projects.indexOf(projectItem);
                const thisProject = user.projects[indexOfObj];
                thisProject.name = name;
                thisProject.description = description;
                thisProject.deadlineBullean = deadlineDelete
                  ? false
                  : newDeadline == null
                  ? false
                  : true;
                thisProject.deadline = deadlineDelete
                  ? null
                  : newDeadline == null
                  ? project.deadline
                  : dayjs(newDeadline).format("DD-MM-YYYY HH:mm");
                dispatch(updateUserThunk(user));
                setOpen(false);
                setEdit(false);
              }
            });
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

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          validation(values, resetForm);
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
                  onChange={(e) => handleNameChange(e.target.value)}
                  onBlur={handleBlur}
                  value={name}
                  error
                  helperText={nameError}
                  required
                />
              ) : (
                <TextField
                  className={classes.name}
                  id="outlined-basic"
                  label="Project Name"
                  variant="outlined"
                  type="name"
                  name="name"
                  onChange={(e) => handleNameChange(e.target.value)}
                  onBlur={handleBlur}
                  value={name}
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
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  onBlur={handleBlur}
                  value={description}
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
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  onBlur={handleBlur}
                  value={description}
                />
              )}
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    disabled={!project.deadlineBullean || newDeadlineSwitch}
                  />
                }
                label="Delete deadline"
                onClick={handleDeleteDeadline}
              />
            </Box>
            <FormControlLabel
              control={<Switch />}
              label="Choose new deadline"
              onChange={handleNewDeadlineSwitch}
              disabled={deadlineDelete}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Basic date picker"
                  value={newDeadline}
                  onChange={(newValue) => setNewDeadline(newValue)}
                  sx={{ display: newDeadlineSwitch ? "inherit" : "none" }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Button
              variant="contained"
              type="submit"
              className={classes.submitButton}
            >
              Edit project
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
