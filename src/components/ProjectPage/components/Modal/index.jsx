import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddButton from "./components/AddButton";
import AddIcon from "@mui/icons-material/Add";
import { createUseStyles } from "react-jss";
import { mainTheme } from "../../../../colorThemes/colorBase";
import { TextField } from "@mui/material";
import Basic from "./components/ModalFormik";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "50px",
    borderRadius: "25px",
    background: mainTheme.projectBlockColor,
    position: "fixed",
    zIndex: 5,
    right: 23,
    bottom: 70,
    transition: "1s",
    cursor: "pointer",
    "&:hover": {
      background: mainTheme.backgroundColor,
    },
  },

  someText: {
    fontSize: "17px",
    color: "white",
    fontWeight: 500,
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "50%",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ project }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.main}
        onClick={handleOpen}
        sx={{ color: "white" }}
      >
        Sprint
        <AddIcon sx={{ color: "white", marginLeft: "7px", fontSize: "38px" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new sprint
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Here you can create a new sprint-plan for your project
          </Typography>
          <Basic project={project} onPush={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
